/**
 * Replaces numbered arguments in the command with the given args.
 *
 * @param {string} command - The command string containing placeholders like $1, $2, etc.
 * @param {string[]} args - Array of arguments to replace in the command string.
 * @returns {string} - The processed string with arguments replaced.
 */
function replaceArguments(command, args) {
	const regex = /\$(\d+)/g;
	const numbers = [];
	let match;

	while ((match = regex.exec(command)) !== null) {
		numbers.push(match[1]);
	}

	if (numbers.length > 0) {
		const number1 = numbers[0];
		return command.replace(`$${number1}`, args[parseInt(number1) - 1]);
	}

	return command;
}

module.exports = {
	replaceArguments,
};
