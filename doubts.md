# Doubts Log

A running notebook for conceptual questions and answers.

## How to add a new entry

Use this format for every new doubt:

```md
## N. Short title
```
## 1. Why package imports do not need a file path
- Date: 2026-09-20
- Area: Node.js module resolution
- Question: Why does a package import such as `import express from "express"` not need a path, while a normal file import needs `./` or `../`? How does Node differentiate between them?
- Answer:
	- The JavaScript parser reads the import syntax, but Node's **module resolver** decides where the imported module is located.
	- Node identifies the import type from the module specifier:
		- `./helper.js` means a file relative to the current file.
		- `../utils.js` means a file in a parent directory.
		- `/absolute/path/file.js` means an absolute filesystem path.
		- `express` is a bare specifier, so Node treats it as a package name.
		- `node:fs` refers to a built-in Node.js module.
		- `#utils` refers to an alias configured in `package.json`.
	- For a package import, Node searches for a matching package in `node_modules`. Starting from the importing file's directory, it checks nearby `node_modules` folders and then walks upward through parent directories.
	- Once it finds the package, Node reads that package's `package.json`. The `main` or modern `exports` field tells Node which entry file to load.
	- The application's `package.json` normally does not create a custom search path. It records dependencies, while `npm install` downloads or links those dependencies into `node_modules`.
	- A random folder such as `abc` is not searched automatically. Either use a relative path such as `../abc/xyz/index.js`, install the local package with `npm install ./abc/xyz`, or configure a supported package/workspace setup.
- Key idea: `./`, `../`, and `/` tell Node to resolve a filesystem path; a name without those path markers tells Node to search for a package.
- Notes:
	- `package.json` can also define internal aliases with the `imports` field, for example `"imports": { "#utils": "./src/utils.js" }`.
	- `NODE_PATH` can customize lookup in older setups, but relative imports, installed packages, and workspaces are more predictable.
