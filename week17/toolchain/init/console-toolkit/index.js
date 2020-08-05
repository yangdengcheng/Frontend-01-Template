var tty = require("tty");
var ttys = require("ttys");
var rl = require("readline");

var stdin = ttys.stdin;
var stdout = ttys.stdout;

// stdout.write("Hello World!\n");

// stdout.write("\033[1A"); // 向上移动一行光标
// stdout.write("Link \n");

// without this, we would only get streams once enter is pressed
stdin.setRawMode(true);
// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();
stdin.setEncoding("utf8");

function getChar() {
	return new Promise((resolve) => {
		stdin.once("data", function (key) {
			resolve(key);
		});
	});
}

function up(n = 1) {
	return stdout.write("\033[" + n + "A");
}

function down(n = 1) {
	return stdout.write("\033[" + n + "B");
}

function right(n = 1) {
	return stdout.write("\033[" + n + "C");
}

function left(n = 1) {
	return stdout.write("\033[" + n + "D");
}

async function select(choices) {
	let selected = 0;
	for (let i = 0; i < choices.length; i++) {
		if (i === selected) {
			stdout.write("[x] " + choices[i] + "\n");
		} else {
			stdout.write("[ ] " + choices[i] + "\n");
		}
	}
	up(choices.length);
	right();

	while (true) {
		let char = await getChar();
		// ctrl-c ( end of text )
		if (char === "\u0003") {
			process.exit();
		}
		// console.log(char);
		if (char === "w" && selected > 0) {
			stdout.write(" ");
			left();
			selected--;
			up();
			stdout.write("x");
			left();
		}
		if (char === "s" && selected < choices.length - 1) {
			stdout.write(" ");
			left();
			selected++;
			down();
			stdout.write("x");
			left();
		}
		if (char === "\r") {
			down(choices.length - selected);
			left();
			return choices[selected];
		}
	}
}

void (async function () {
	stdout.write("Which framework do you want to use?\n");
	let answer = await select(["react", "vue", "angular"]);
	stdout.write("You selected " + answer + ".\n");
	process.exit();
})();
