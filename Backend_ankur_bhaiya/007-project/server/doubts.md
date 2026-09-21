# Doubts Log

A running notebook for conceptual questions and answers.

## How to add a new entry

Use this format for every new doubt:

```md
## N. Short title
- Date:
- Area:
- Question:
- Answer:
- Notes:
```

## 1. Why use a structured error response
- Date: 2026-09-21
- Area: Express.js API response design
- Question: Why use a structured response instead of only returning an error message when an email already exists?
- Answer:
	- A simple response is enough when the frontend only needs to display one general message:

```js
{
	error: "Email exists, login or try with another email"
}
```

	- A structured response is more useful for form validation because the frontend can identify which input has the error and display the message beside it.
	- The `errors` array can contain multiple validation errors later:

```js
{
	message: "User already exists with this email address",
	errors: [
		{
			field: "email",
			message: "This email is already registered"
		}
	]
}
```

- Key idea: `field` should be `"email"`, not the `email` variable, because `field` represents the input name while the variable contains the user's actual email value.

## 2. Why `validationResult(req)` needs `.isEmpty()`
- Date: 2026-09-21
- Area: Express-validator middleware
- Question: Why did invalid input continue to the controller and return a Mongoose error instead of the expected validation errors array?
- Answer:
	- `validationResult(req)` always returns a result object, even when validation errors exist.
	- Therefore, checking `if (!errors)` does not work because the result object is truthy.
	- Use `if (!errors.isEmpty())` to check whether validation errors were collected:

```js
const errors = validationResult(req)

if (!errors.isEmpty()) {
	return res.status(400).json({
		message: "Invalid request",
		errors: errors.array().map((error) => ({
			field: error.path,
			message: error.msg
		}))
	})
}

next()
```

- Key idea: Return the validation response when errors exist; call `next()` only when the result is empty.

## 3. Why use `bail()` in express-validator
- Date: 2026-09-21
- Area: Express-validator middleware
- Question: Why is the `bail()` function used in a validation chain?
- Answer:
	- `bail()` stops validating the current field when the previous validator fails.
	- For example, if `email` is missing, `.exists()` fails and `bail()` prevents `.trim()` and `.isEmail()` from running on the missing value.
	- This avoids unnecessary or confusing errors, such as returning both `"Email is required"` and `"Enter a valid email"` for the same missing field.
	- `bail()` only stops the chain for the current field. It does not stop validation for other fields and it does not send the response itself.
	- `validationResult(req)` collects the errors, and `!errors.isEmpty()` is used to decide whether the request should be rejected.

- Key idea: `bail()` prevents later validators from running after an earlier validator has already failed.
