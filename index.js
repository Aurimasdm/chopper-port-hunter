#!/usr/bin/env node
import inquirer from "inquirer";
import { exec } from "child_process";

function hunt() {
  console.log("\n🌸 CHOPPER PORT HUNTER 🦌\nAll bow to the pink hat!\n");

  inquirer
    .prompt([
      {
        type: "input",
        name: "port",
        message: "Enter port to clear:",
      },
    ])
    .then(({ port }) => {
      const num = parseInt(port, 10);

      if (isNaN(num) || num < 1024 || num > 65535) {
        console.log(
          "\n❌ Invalid port entry! Rules: more than 1024, and below 65535. No commas",
        );
        return hunt();
      }

      const cmd = `powershell -WindowStyle Hidden -Command "Stop-Process -Id (Get-NetTCPConnection -LocalPort ${num} -ErrorAction SilentlyContinue).OwningProcess -Force -PassThru -ErrorAction SilentlyContinue"`;

      exec(cmd, (err, stdout) => {
        if (err || !stdout.trim()) {
          console.log(
            "💨 Active target not found. This port is already clear!",
          );
          return;
        }

        const report = stdout.replace(/[\r\n]+/g, " ").trim();
        console.log(
          `\n🎉 Success!\n\n ${report}\n\n🌸 Port ${num} is completely free!`,
        );
      });
    });
}

hunt();
