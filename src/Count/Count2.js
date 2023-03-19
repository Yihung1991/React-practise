import React, { useState } from "react";

function Count2() {
  const [total, setTotal] = useState(0);

//   const handleMinus = () => {
//     if(total < 1){
//         setTotal(0);
//     }else{
//         setTotal(total - 1)
//     }
    
//   };
//   const handlePlus = () => {
//     if(total < 10){
//         setTotal(total + 1);
//     }
    
//   };

  const handleMinus = () => {
    setTotal(Math.max(total - 1, 0));
  };
  
  const handlePlus = () => {
    setTotal(Math.min(total + 1, 10));
  };

  return (
    <>
    <h1>計步器</h1>
      <button onClick={handleMinus}> - </button>
      <label>目前步數 : {total}</label>
      <button onClick={handlePlus}> + </button>
    </>
  );
}

export default Count2;
