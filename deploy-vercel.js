#!/usr/bin/env node

/**
 * Fast Vercel Deploy Automation for FSD-1 React Experiments
 * Deploys all 10 React applications in one shot.
 */

import { execSync, spawnSync } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = __dirname;

const projects = [
  {
    name: "fsd-react-conditional-rendering",
    dir: "react-conditional-rendering-app/react-conditional-rendering-app-main",
    title: "React Conditional Rendering"
  },
  {
    name: "fsd-react-form-events",
    dir: "react-form-events-app/react-form-events-app-main",
    title: "React Form Events"
  },
  {
    name: "fsd-react-frontend-crud",
    dir: "react-frontend-crud-app/react-frontend-crud-app-main",
    title: "React Frontend CRUD"
  },
  {
    name: "fsd-react-html-render",
    dir: "react_html_render_app/react_html_render_app",
    title: "React HTML Render"
  },
  {
    name: "fsd-react-jsx-render",
    dir: "react_jsx_render_app/react_jsx_render_app",
    title: "React JSX Render"
  },
  {
    name: "fsd-react-multiple-components",
    dir: "react_multiple_components/react_multiple_components",
    title: "React Multiple Components"
  },
  {
    name: "fsd-react-rendering-lists",
    dir: "react-rendering-lists-app/react-rendering-lists-app-main",
    title: "React Rendering Lists"
  },
  {
    name: "fsd-react-state-events",
    dir: "react-state-events-app/react-state-events-app-main",
    title: "React State Events"
  },
  {
    name: "fsd-react-router",
    dir: "react-router-app/react-router-app-main",
    title: "React Router"
  },
  {
    name: "fsd-mern-frontend",
    dir: "mern-crud-app/mern-crud-app-main/frontend",
    title: "MERN CRUD Frontend"
  }
];

console.log("==================================================");
echoLog("🚀 FSD-1 - Automated Vercel Deployer");
console.log("==================================================\n");

function echoLog(msg) {
  console.log(msg);
}

const vercelBin = fs.existsSync(path.resolve(rootDir, "node_modules/.bin/vercel.cmd"))
  ? `"${path.resolve(rootDir, "node_modules/.bin/vercel.cmd")}"`
  : "vercel";

// 1. Verify Vercel CLI login
console.log("Checking Vercel CLI login status...");
let whoami = spawnSync(vercelBin, ["whoami"], { encoding: "utf-8", shell: true });

if (whoami.status !== 0) {
  console.log("⚠️ You are not logged in to Vercel CLI.");
  console.log("Please authenticate below (press Enter on default prompt):\n");
  spawnSync(vercelBin, ["login"], { stdio: "inherit", shell: true });
  whoami = spawnSync(vercelBin, ["whoami"], { encoding: "utf-8", shell: true });
  if (whoami.status !== 0) {
    console.error("\n❌ Login was not completed. Please run: npm run login:vercel\n");
    process.exit(1);
  }
}

console.log(`✅ Logged in as: ${whoami.stdout.trim()}`);
console.log(`💡 Note: If you want to deploy to a different account, run:`);
console.log(`   npx vercel logout && npx vercel login\n`);

// Function to update live links in README.md without deleting instructions
function updateReadmeLinks(deployResults) {
  const readmePath = path.resolve(rootDir, "README.md");
  const getUrl = (name, fallback) => {
    const item = deployResults.find(r => r.name === name);
    return item && item.url && item.url.startsWith("https://") ? item.url : fallback;
  };

  if (fs.existsSync(readmePath)) {
    let content = fs.readFileSync(readmePath, "utf-8");
    for (const p of projects) {
      const url = getUrl(p.name, null);
      if (url) {
        const regex = new RegExp(`(\\|\\s*\\d+\\s*\\|\\s*${p.title}\\s*\\|\\s*\\[Live Demo\\]\\()[^)]*(\\))`, "i");
        content = content.replace(regex, `$1${url}$2`);
      }
    }
    fs.writeFileSync(readmePath, content, "utf-8");
    console.log("📝 Your repository README.md has been updated with YOUR live links!");
    console.log("   (Deployment instructions have been preserved).\n");
  }
}

// Check for --sync flag to update README from existing Vercel project list
if (process.argv.includes("--sync") || process.argv.includes("--clean")) {
  console.log("Fetching live projects from Vercel CLI (npx vercel project ls)...\n");
  const lsOutput = execSync("npx --yes vercel project ls", { encoding: "utf-8" });
  const syncResults = [];
  for (const p of projects) {
    const regex = new RegExp(`^\\s*${p.name}\\s+(https:\\/\\/[a-zA-Z0-9.-]+\\.vercel\\.app)`, "m");
    const m = lsOutput.match(regex);
    if (m) {
      syncResults.push({ name: p.name, title: p.title, url: m[1], status: "✅ Ready" });
    }
  }
  updateReadmeLinks(syncResults);
  spawnSync("npx", ["--yes", "vercel", "project", "ls"], { stdio: "inherit" });
  process.exit(0);
}

// 2. Clean up any stale .vercel folders from previous user accounts
for (const p of projects) {
  const staleVercel = path.resolve(rootDir, p.dir, ".vercel");
  if (fs.existsSync(staleVercel)) {
    fs.rmSync(staleVercel, { recursive: true, force: true });
  }
}
const rootVercel = path.resolve(rootDir, ".vercel");
if (fs.existsSync(rootVercel)) {
  fs.rmSync(rootVercel, { recursive: true, force: true });
}

// 3. Deploy each project
const results = [];

for (let i = 0; i < projects.length; i++) {
  const p = projects[i];
  const targetPath = path.resolve(rootDir, p.dir);

  console.log(`[${i + 1}/${projects.length}] Deploying "${p.title}" (${p.name})...`);

  if (!fs.existsSync(targetPath)) {
    console.error(`❌ Directory not found: ${p.dir}`);
    results.push({ name: p.name, title: p.title, url: "FAILED (Folder not found)", status: "❌" });
    continue;
  }

  try {
    const vercelBin = fs.existsSync(path.resolve(rootDir, "node_modules/.bin/vercel.cmd"))
      ? `"${path.resolve(rootDir, "node_modules/.bin/vercel.cmd")}"`
      : "npx --yes vercel";
    const deployCmd = `${vercelBin} "${targetPath}" --name "${p.name}" --project "${p.name}" --create-if-missing --prod --yes`;
    const output = execSync(deployCmd, { encoding: "utf-8" });
    
    const match = output.match(/https:\/\/[a-zA-Z0-9.-]+\.vercel\.app/);
    const liveUrl = match ? match[0] : "✅ Deployed";

    console.log(`   ✅ Deployed: ${liveUrl}\n`);
    results.push({ name: p.name, title: p.title, url: liveUrl, status: "✅ Ready" });
  } catch (err) {
    console.error(`   ❌ Failed to deploy ${p.name}: ${err.message}\n`);
    results.push({ name: p.name, title: p.title, url: "FAILED", status: "❌ Error" });
  }
}

// 4. Print final summary table
console.log("\n==================================================");
console.log("🎉 All Deployments Finished!");
console.log("==================================================\n");
console.table(results);

// 5. Update local README.md with live links
updateReadmeLinks(results);

// 6. Run npx vercel project ls to display project list in terminal
console.log("Executing: npx vercel project ls...\n");
spawnSync("npx", ["--yes", "vercel", "project", "ls"], { stdio: "inherit" });
