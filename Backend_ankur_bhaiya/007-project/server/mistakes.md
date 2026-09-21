# Mistakes Log

A running notebook for mistakes, misunderstandings, and corrections.

## How to add a new entry

Use this format for every new mistake:

```md
## N. Short title
- Date:
- Area:
- Mistake:
- Why it happened:
- Correct understanding:
- Fix:
- Lesson:
- Notes:
```

## 1. Passing `SALT_ROUNDS` as a string to bcrypt
- Date: 2026-09-21
- Area: Node.js authentication and bcrypt
- Mistake: Passing `process.env.SALT_ROUNDS` directly to `bcrypt.hash()`.
- Why it happened: Environment variables are loaded as strings, so the value `10` became the string `"10"`.
- Correct understanding: Bcrypt treats a string second argument as a complete salt, while the salt-rounds value must be a number.
- Fix: Convert the value to a number in the config:

```js
SALT_ROUNDS: Number(process.env.SALT_ROUNDS)
```

- Lesson: Parse numeric environment variables before passing them to libraries that expect numbers.
- Notes: Passing the unparsed value caused the `Invalid salt` error.

## 2. Checking the validation result object incorrectly
- Date: 2026-09-21
- Area: Express-validator middleware
- Mistake: Using `if (!errors)` after calling `validationResult(req)`.
- Why it happened: It was assumed that `validationResult(req)` would return a falsy value when validation failed.
- Correct understanding: `validationResult(req)` always returns a result object. The `.isEmpty()` method tells whether that object contains validation errors.
- Fix: Stop the request when errors exist:

```js
const errors = validationResult(req)

if (!errors.isEmpty()) {
	return res.status(400).json({
		message: "Invalid request",
		errors: errors.array()
	})
}

next()
```

- Lesson: Use `!errors.isEmpty()` for express-validator error handling and call `next()` only when validation passes.
- Notes: Because the incorrect condition never ran, invalid input reached Mongoose and produced a database validation error.
