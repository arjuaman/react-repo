import React from 'react';

const GetGameSpec = (props:any) => {
    const txtChangeHandler = (e:any) => {
        props.getGameName(e.target.value);
    };

    return (
        <React.Fragment>
            <label>New input is: </label>
            <input type="text" onChange={txtChangeHandler} />
        </React.Fragment>
    );
};

export default GetGameSpec;