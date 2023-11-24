/**
 * Replaces numbered arguments in the command with the given args.
 *
 * @param {string} command - The command string containing placeholders like $1, $2, etc.
 * @param {string[]} args - Array of arguments to replace in the command string.
 * @returns {string} - The processed string with arguments replaced.
 */
function replaceArguments(command, args) {
	const regex = /\$(\d+)/g;
	let match;

	while ((match = regex.exec(command)) !== null) {
		const index = match[1]
		command = command.replaceAll(`$${index}`, args[parseInt(index) - 1]);
	}

	return command;
}

module.exports = {
	replaceArguments,
};
