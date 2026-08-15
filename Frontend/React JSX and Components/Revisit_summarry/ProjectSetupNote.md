## Step 1
npm create vite@7 or @latest
give name, package, 
select framwork, language (React, JavaScript)

* and We get ->
    * public
        - vite.svg
    * src
        * assets
            - react.svg
        - App.css
        - App.jsx
        - index.css
        - main.jsx
            * [Understanidng](notes/objectDestructuring.md)
    - .gitignore
    - esling.config.js
    - index.html
    - package.json
    - README.md
    - vite.config.js

* after run npm install we get two things
    * node_modules (folder)
    - package-lock.json (file)

* npm run dev (make the project live and ready for edit)
    - vite compile the project
    - make bundle of the project using ->**ESbuild/Rollup** 
    - Transpile the project using -> **Babel**
    - Execute
    - Update RealDOM Tree



## Step 2
- Go to src/App.jsx and clear it
- Go to src/main.jsx and remove the import strict mode
- Delete __App.css__
### Theory 
- [Understand the CreateRoot funciton](notes/createRootand%20VDOMRDOM.md)
- [function calling vs jsx functional component calling]() funciton calling is render ones but component calling live updates in runtime

- [hmr (Hot Module Replacement) with fiver](notes/hmr.md)

- React Rendering Engine fiber 
- babel conver jsx html tags into js file in background
- What is JSX? It is an extension for a file which allows using XML and JavaScript in a single file. 

- Components -> functions
    - first letter of the file name Should be capital (best practices)
    - function ka first letter should be capital
    - inhe element jaise call kiya jata hai (component calling happens as elements)
    - 

