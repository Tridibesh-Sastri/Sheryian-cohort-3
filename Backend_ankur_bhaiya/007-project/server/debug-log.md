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

## 1. Bcrypt reports an invalid salt
- Date: 2026-09-21
- Area: Node.js authentication and bcrypt
- Problem: `bcrypt.hash()` reported `Invalid salt. Salt must be in the form of: $Vers$log2(NumRounds)$saltvalue` while registering a user.
- Root cause: `process.env.SALT_ROUNDS` is loaded as the string `"10"`. Bcrypt interpreted the string as a complete salt instead of a numeric cost factor.
- Fix: Convert the environment value to a number in the config:

```js
SALT_ROUNDS: Number(process.env.SALT_ROUNDS)
```

- Result: `bcrypt.hash(password, saltRounds)` receives the numeric cost factor required by bcrypt.
- Notes: Environment variables are always loaded as strings, even when their values look numeric.
