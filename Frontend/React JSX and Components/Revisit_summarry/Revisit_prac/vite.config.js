import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // selected project is React, so we need to add the react plugin to the Vite config. What we selected during the project creation process is stored in the package.json file. If you open the package.json file, you will see that the "type" field is set to "module". This means that we can use ES modules in our project. The "type" field is set to "module" by default in Vite projects. If you want to use CommonJS modules, you can set the "type" field to "commonjs". However, we will stick with ES modules for this project.
})
