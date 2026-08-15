Great question — you’re zeroing in on the mechanics of **object destructuring in imports**. Let’s break it down carefully:

---

### 1. What’s being pulled out
When you write:
```js
import { createRoot } from 'react-dom/client'
```

- The module `react-dom/client` exports an **object** (via CommonJS → ESM interop).
- That object has properties like `createRoot`, `hydrateRoot`, etc.
- The `{ createRoot }` syntax means: *pull out the property named `createRoot` from the export object*.

So yes — the name you specify must match the property name in the export object.

---

### 2. Binding to a local variable
By default, the local variable name is the same as the property name.  
So `createRoot` (property) → `createRoot` (local variable).

But you can rename it using `as`:
```js
import { createRoot as makeRoot } from 'react-dom/client'

makeRoot(document.getElementById('root')).render(<App />);
```

Here:
- It still pulls out the property `createRoot`.
- But binds it to a local variable called `makeRoot`.

---

### 3. Why both happen at once
Destructuring does **two things in one step**:
1. **Lookup**: Find the property on the export object (`createRoot`).
2. **Binding**: Assign it to a local variable (same name, unless you rename with `as`).

That’s why it feels like it’s “doing both” — because it is.

---

### 4. Analogy
Imagine the module exports this object:
```js
const exports = {
  createRoot: function() { console.log("root created"); },
  hydrateRoot: function() { console.log("hydrated"); }
};
```

Your import is equivalent to:
```js
const { createRoot } = exports;
```

Or with renaming:
```js
const { createRoot: makeRoot } = exports;
```

---

✅ **Summary:**  
- The name inside `{ ... }` must match the property name in the module’s export object.  
- By default, the local variable has the same name.  
- You can rename it with `as`.  
- Import destructuring is just syntactic sugar for “pull property from object and bind to variable.”

---

Would you like me to show you a **side-by-side example** of `import { ... }` vs. the equivalent `const { ... } = require(...)` so you can see exactly how the bundler translates it?

[BackLink](../ProjectSetupNote.md)