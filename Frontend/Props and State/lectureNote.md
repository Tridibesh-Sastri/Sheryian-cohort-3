## Constructive Distraction
### System thinking

### Other project
### Ongoing Task

## Specials / Extra (revise tagging)
- install extension by search es7 (ES7 React/Redux/GraphQL/React-Native snippets)

## General Discussion

## Core Content 
### What happens at strat 
Okay, so as `npm run dev` command is pushed in the terminal:
1. package.json file is set.
2. From this, we came to index.html.
3. From this file, we came to src.main.jsx.
4. From this, the virtual DOM is created.
5. Reconciliation happens.
6. jsx module replacement

### What we learned
1. JSX
2. Components
3. Props
    - [props vs arguments withexample](Notes/props%20vs%20arguments%20withexample.md)
    props came from 
    ```javaScript
    React.CreateElement(Tag,{props},children)
    ```
    Props -> object
    no props -> blank object
    that's why we can do destructuring on props

    - 
    ```jsx
    <App a = {12}, name = "Raghab">
    Hie this is a component
    </App>
    ```
    bable converts this it to 

    ```javaScript
    React.CreateElement(
        App,
        {a:12, name:"Raghab"},
        "Hie this is a component"
    )
    ```
    <App a = {12}, name = "Raghab"> ---babel--> {a:12,  name:"Raghab"}

    - Children is also comes under props

5. export vs export default (as we know in js we have global scope, function scope, block scope, scope chain, shadowing)
    - example jsx file with multiple export function and one default export

6. inline events 
7. reload vs rerender
8. React hooks (useState) on click
    - [state, setState] = useState()// setState is a callbck function 
        - Works of setState function with example update counter 
            1. update state
            2. Rerender the the page from it's parrent 
        - Rules of setState funciton example - update flag onclick
            1. if previous and current state values are same then no rerender no update
            2. 
        - Batching