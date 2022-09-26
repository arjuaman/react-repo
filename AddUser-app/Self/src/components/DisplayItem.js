import React from 'react';

const DisplayItem = (props) =>{
    return (
        <li>
            <div>
                <label>Name is: {props.name} and age is: {props.age}</label>
            </div>
        </li>
    );
}

export default DisplayItem;












