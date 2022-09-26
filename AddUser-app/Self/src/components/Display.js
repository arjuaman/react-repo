import React from "react";
import DisplayItem from "./DisplayItem";

const Display = (props) => {
    // if(props.onShow.length===0){
    //     return <label>Empty data!</label>;
    // }
  return (
    <ul>
      {props.onShow.map((entry) => (
        <DisplayItem
          key={entry.id}
          name={entry.name}
          age={entry.age}
        />
      ))}
    </ul>
  );
};

export default Display;
