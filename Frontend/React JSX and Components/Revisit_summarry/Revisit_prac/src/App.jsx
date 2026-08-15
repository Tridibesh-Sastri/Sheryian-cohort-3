import './App.css';
import Test from './Test.jsx';

let App = ()=>{
  return <div>
    <h3>Hello guys {Test("300","gopal",26)} normal function</h3>
    <div>{<Test width="200" name="papu" age={27}/>} component</div>
  </div>;
};

export default App;