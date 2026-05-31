#!/usr/bin/env node
import inquirer from "inquirer";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

async function hunt() {
  console.log("\n🌸 Chopper Port Hunter 🌸\nAll bow to the pink hat!\n");

  const { action } = await inquirer.prompt([
    {
      type: "rawlist",
      name: "action",
      message: "What do you want to do?",
      choices: ["Fix a stuck port", "Go to sleep"],
    },
  ]);

  if (action.includes("sleep")) {
    console.log("\n⛵ Chopper sits onboard the Thousand Sunny...");
    console.log("Puts his pink hat over his face to block the sun... 💤\n");
    process.exit(0);
  }

  const { port } = await inquirer.prompt([
    {
      type: "input",
      name: "port",
      message: "Which port needs medicine?",
    },
  ]);

  const num = parseInt(port, 10);

  if (isNaN(num)) {
    console.log("\n❌ Chopper: Wait, that is not a number! I cannot parse it!");
    return hunt();
  }

  if (num < 1024) {
    console.log(
      "\n❌ Chopper: Stop! Hidden system ports under 1024 are too dangerous!",
    );
    return hunt();
  }

  if (num > 65535) {
    console.log(
      "\n❌ Chopper: Wow, that number is way too huge! It does not exist!",
    );
    return hunt();
  }

  const cmd = `powershell -NoProfile -NonInteractive -WindowStyle Hidden -Command "Stop-Process -Id (Get-NetTCPConnection -LocalPort ${num} -ErrorAction SilentlyContinue).OwningProcess -Force -ErrorAction SilentlyContinue"`;

  try {
    await execAsync(cmd, { windowsHide: true });
    console.log(`\n🎉 Success! I cured it! Port ${num} is healthy and free!`);
  } catch {
    console.log(
      "\n💨 The scopes are clear. This port has no active infections!",
    );
  }

  return hunt();
}

hunt();
