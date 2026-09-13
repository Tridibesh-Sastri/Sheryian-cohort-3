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
- Key idea:
- Notes:
```

## 1. Why can server.js read process.env if dotenv is imported in app.js?
- Date: 2026-09-06
- Area: Node.js, dotenv, module loading
- Question: `dotenv` is imported and configured inside [src/app.js](server/src/app.js), but `process.env` is later used in [server.js](server/server.js) and [db.config.js](server/src/configs/db.config.js). How does the upper file know about the `.env` values?
- Answer: `process.env` belongs to the whole Node process, not to one file. When `dotenv.config()` runs anywhere in that process, it loads values from `.env` into the shared `process.env` object.
- Key idea: `dotenv` does not create a file-scoped env store. It mutates the global process environment that every imported module can read.
- Snippet:

```js
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.MONGO_URI)
```

- Notes:
  - `server.js` does not need to import `.env` directly.
  - What matters is that `dotenv.config()` executes before code reads `process.env.MONGO_URI`.
  - The cleanest setup is to call `dotenv.config()` in the entry file, usually [server/server.js](server/server.js).

## 2. What is `new` doing in the post schema and model flow?
- Date: 2026-09-06
- Area: JavaScript, Mongoose, constructors
- Question: Why do we write `new mongoose.Schema(...)`, and what is `new` used for?
- Answer: `new` creates a fresh instance from a constructor. In this case, `new mongoose.Schema(...)` creates a schema object that stores field rules, not actual data.
- Key idea: `new` is for creating instances from constructor functions or classes.
- Snippet:

```js
const postSchema = new mongoose.Schema({
  caption: { type: String, required: true },
  image: { type: String, required: true }
})
```

- Notes:
  - The schema is the definition of structure.
  - Data is created later when you use the model, for example `postModel.create(...)` or `new postModel(...)`.

## 3. How does Express send work to Mongoose and MongoDB?
- Date: 2026-09-06
- Area: Express, Mongoose, MongoDB
- Question: How does Express tell Mongoose what DB work to do, and how does Mongoose perform that work in MongoDB?
- Answer: Express receives the HTTP request, your route/controller calls Mongoose model methods, and Mongoose converts those model calls into MongoDB operations.
- Key idea: Express handles HTTP. Mongoose handles database translation. MongoDB stores the data.
- Snippet:

```js
app.post('/posts', async (req, res) => {
  const post = await postModel.create(req.body)
  res.status(201).json(post)
})
```

- Notes:
  - `create()` becomes an insert operation.
  - `find()` becomes a read/query operation.
  - `findByIdAndUpdate()` becomes an update operation.
  - `deleteOne()` or `findByIdAndDelete()` becomes a delete operation.
  - Mongoose is an ODM layer, not middleware between Express and MongoDB.