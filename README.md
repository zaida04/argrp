# argrp - Positional arguments for your npm scripts

`argrp` works by replacing placeholders (`$1`, `$2`, ...) in npm scripts with the arguments you provide.

## Installation

You can install `argrp` globally:

```bash
npm install -g argrp
```

Or as a development dependency:

```bash
npm install --save-dev argrp
```

## Usage

### In your `package.json`:

You can set up scripts like:

```json
"scripts": {
  "test:specific": "argrp \"uvu __tests__/$1.test.ts\""
}
```

### Command Line:

Then, you can run:

```bash
npm run test:specific somefile
```

The above command will execute `uvu __tests__/somefile.test.ts`.

## Contributing

Contributions are welcome! Please open an issue or submit a PR.

## License

[MIT](LICENSE)
