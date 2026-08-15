let Test = ({ width, name, age,children })=>{
  console.log(width, name, age);

  return (<div>It's a test component 10"
    {children}
  </div>);
}

export default Test;