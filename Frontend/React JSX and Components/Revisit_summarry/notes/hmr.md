**Hot Module Replacement (HMR) in Vite allows you to update modules instantly in the browser without a full reload, preserving application state. In React projects, this is integrated via Fast Refresh, so when you edit a component, only that component is re-rendered while its state remains intact.**  [v3.vitejs.dev](https://v3.vitejs.dev/guide/api-hmr.html)  [Github](https://github.com/vitejs/vite/blob/main/docs/guide/api-hmr.md)  [adhdecode.com](https://adhdecode.com/articles/vite/vite-hmr-hot-module-replacement/)

---

## 🔥 What is HMR?
- **Definition:** Hot Module Replacement (HMR) is a dev‑server feature that swaps updated modules into a running app without reloading the entire page.
- **Goal:** Speed up development by keeping state (e.g., form inputs, counters) intact while applying code changes.
- **In Vite:** Built on native ES Modules (ESM) and a lightweight runtime injected into your app.

---

## ⚙️ How HMR Works in Vite
1. **File Change Detected:** You save a file (e.g., `Counter.jsx`).
2. **Vite Dev Server:** Intercepts the change and determines which modules are affected.
3. **Update Message:** Sends a minimal update message to the browser.
4. **Browser Runtime:** Requests the updated module and swaps it in memory.
5. **React Fast Refresh:** Re-renders only the changed component, preserving state if possible.

---

## 📌 Syntax & API
Vite exposes HMR through `import.meta.hot`:

```js
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log("Updated module:", newModule);
  });

  import.meta.hot.dispose(() => {
    console.log("Cleaning up before replacement");
  });
}
```

- **`accept(cb)`** → Accept updates for the current module.
- **`accept(dep, cb)`** → Accept updates from a dependency.
- **`dispose(cb)`** → Clean up side effects before replacement.
- **`invalidate()`** → Force a full reload if update cannot be applied safely.

---

## 🧩 Example in React
```jsx
// Counter.jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default Counter;

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log("Counter updated");
  });
}
```

- Change button text → Browser updates instantly.
- State (`count`) is preserved thanks to Fast Refresh.

---

## ⚖️ Benefits vs Risks
| **Pros** | **Cons / Risks** |
|----------|------------------|
| Preserves app state | Some changes (e.g., hook order changes) force full reload |
| Faster dev feedback loop | Misconfigured HMR can cause stale modules |
| Integrated with React Fast Refresh | Requires proper cleanup with `dispose()` for side effects |

---

## 🚨 Key Considerations
- **React Fast Refresh** is enabled by default in Vite’s React template — you rarely need manual HMR code.
- **Manual HMR (`import.meta.hot`)** is useful for libraries, plugins, or non‑React code.
- **Production builds** do not include HMR — it’s strictly a dev‑only feature.

---

✅ **Summary:**  
With Vite, HMR is automatic for React projects via Fast Refresh. You can also use `import.meta.hot` for fine‑grained control in custom modules. This keeps your dev workflow smooth, avoids full reloads, and preserves state while editing.  [v3.vitejs.dev](https://v3.vitejs.dev/guide/api-hmr.html)  [Github](https://github.com/vitejs/vite/blob/main/docs/guide/api-hmr.md)  [adhdecode.com](https://adhdecode.com/articles/vite/vite-hmr-hot-module-replacement/)

---

Would you like me to show you a **visual flow diagram** of how Vite’s HMR runtime communicates between the dev server and the browser, so you can see the “time‑travel” effect in action?

[backlink](../ProjectSetupNote.md)