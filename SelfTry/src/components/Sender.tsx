import React,{useState} from 'react';

const Sender = (props: any) => {
    const dummyData = [{
        name: "Arju",
        age: 24
    },{
        name: "Ayush",
        age: 19
    }];
    // const aloe = "aloevera";
    const [arr, setArr] = useState(dummyData);
    const plantHandler = (e:any) => {
        props.dataFromSender(arr);
    };

    return (
        <div>
            {/* <label>Best plant boi: </label>
            <input type="text" onChange={plantHandler} /> */}
            <button onClick={plantHandler}>SEND TO RECEIVER</button>
        </div>
    );
};

export default Sender;