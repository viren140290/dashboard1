import React from 'react'


const sayHello = () => {
  alert("hello")
}
function Hello() {
  return(
    <div>
      <button onClick={sayHello}>say hello</button>
    </div>
  )
}

export default Hello;
