# Debug Log

## Problem
Tailwind classes were not applying in the browser because the project was not wired for Tailwind during Vite development. The test page was also pointing at a generated file in `dist/output.css`, while the source stylesheet was `src/style.css`.

## Root Cause
- `src/style.css` contained `@import "tailwindcss";`, but Vite was not configured with the Tailwind plugin.
- `src/test1.html` was loading `../dist/output.css`, which is a build output file and not the correct source file for the dev workflow.
- Because of that, the Tailwind utilities were not being compiled and served consistently during `npm run dev`.

## Fix
- Added the official Tailwind Vite plugin in `vite.config.js`.
- Changed `src/test1.html` to load `./style.css` instead of `../dist/output.css`.
- Verified the setup with `npm run build`, which completed successfully and generated the Tailwind CSS bundle.

## Result
Tailwind utilities now apply correctly in development and production builds.