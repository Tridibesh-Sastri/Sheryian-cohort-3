# Debug Log

A running notebook for debugging questions, fixes, and short explanations.

## How to add a new entry

Use this format for every new debug item:

```md
## N. Short title
- Date:
- Area:
- Problem:
- Root cause:
- Fix:
- Result:
- Notes:
```

## 1. ESM import path error
- Date: 2026-09-06
- Area: Node.js, ESM modules
- Problem: `import app from './src/app'` failed with `ERR_MODULE_NOT_FOUND` even though `type: "module"` was set in `package.json`.
- Root cause: In ESM, Node does not auto-add file extensions for relative imports.
- Fix: Change the import to `import app from './src/app.js'`.
- Result: `server.js` can resolve `src/app.js` correctly.
- Notes: `type: "module"` enables ESM syntax, but it does not change path resolution rules.

- Snippet:

```js
import app from './src/app.js'
```

## 2. MongoDB URI is undefined
- Date: 2026-09-06
- Area: dotenv, MongoDB, Mongoose
- Problem: `mongoose.connect(process.env.MONGO_URI)` crashed because the URI was `undefined`.
- Root cause: The `.env` file had a typo (`MOGO_URI` instead of `MONGO_URI`) and `dotenv.config()` was not loaded early enough in the startup flow.
- Fix:
  - Rename the env key to `MONGO_URI`.
  - Call `dotenv.config()` before reading `process.env`.
  - Prefer loading dotenv in the entry file ([server/server.js](server/server.js)) before importing code that depends on env values.
- Result: `process.env.MONGO_URI` becomes available to all imported modules in the same Node process.
- Notes: `process.env` is shared across the running process; `dotenv.config()` reads `.env` once and populates it.

- Snippet:

```js
import dotenv from 'dotenv'

dotenv.config()

await mongoose.connect(process.env.MONGO_URI)
```