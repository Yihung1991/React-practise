import React, { useState } from "react";

function Count() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <button onClick={() => {
        setTotal(0)
      }}>Reset</button>
      <h1
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        total : {total}
      </h1>
    </>
  );
}

export default Count;
