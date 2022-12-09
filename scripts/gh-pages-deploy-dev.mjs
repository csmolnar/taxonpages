
/* eslint-disable no-console */
import { execa } from "execa";
import fs from "fs";

const sourceBranch = "gh-pages";
const ghPagesBranch = "gh-pages-dev";

(async () => {
  try {
    await execa("git", ["checkout", "--orphan", ghPagesBranch]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", ghPagesBranch]);
    console.log("Pushing to " + sourceBranch + "...");
    await execa("git", ["push", "origin", "HEAD:" + ghPagesBranch, "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", sourceBranch]);
    await execa("git", ["branch", "-D", ghPagesBranch]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();