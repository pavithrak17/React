import React from "react";

const Event = () => {
  function greet() {
    console.log("Welcome");
  }

  return (
    <div>
      <button onClick={greet}>
        <h1>Click ME</h1>
      </button>
    </div>
  );
};

export default Event;
