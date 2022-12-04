import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props: any) => {
    return <div></div>;
};

const Overlay = (props: any) => {
    return <div>THIS THE ERROR BOX MAH HOMIE</div>;
};

const ErrorBox = () => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root")!)}
        {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay-root")!)}
    </React.Fragment>
  );
};

export default ErrorBox;
