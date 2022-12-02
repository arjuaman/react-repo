import React,{useState} from 'react';

const Sender = (props: any) => {
    // const dummyData = [{
    //     name: "Arju",
    //     age: 24
    // },{
    //     name: "Ayush",
    //     age: 19
    // }];
    // const aloe = "aloevera";
    // const [arr, setArr] = useState(aloe);
    const plantHandler = (e:any) => {
        let text = e.target.value;
        props.dataFromSender(text);
    };

    return (
        <div>
            <label>Best plant boi: </label>
            <input type="text" onChange={plantHandler} />
        </div>
    );
};

export default Sender;