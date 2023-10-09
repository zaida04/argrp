#!/usr/bin/env node

const {replaceArguments} = require("./index");
const {execSync} = require("child_process");

const command = process.argv[2];
const args = process.argv.slice(3);

execSync(replaceArguments(command, args), {
	stdio: "inherit",
	cwd: process.cwd(),
});
