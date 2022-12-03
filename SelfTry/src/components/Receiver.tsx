import React from 'react';

const Receiver = (props: any) => {
    return (
        <div>
            Name is: {props.name} and age is: {props.age}
        </div>
    );
};

export default Receiver;