import React from 'react';

const Receiver = (props: any) => {
    return (
        <div>
            Best plant is: {props.children}
        </div>
    );
};

export default Receiver;