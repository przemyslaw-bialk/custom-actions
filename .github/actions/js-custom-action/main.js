import * as core from "@actions/core";
import * as github from "@actions/github";
import * as exec from "@actions/exec";

function run() {
  // getting input values from action

  const name = core.getInput("name", { required: true });
  const lastName = core.getInput("last-name", { required: true });

  exec.exec(` echo "OH HI ${name} ${lastName}`);

  core.notice("hello przemek");
}

run();
