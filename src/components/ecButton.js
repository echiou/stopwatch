import * as React from 'react';

// Defining the <EcButton> component
const EcButton = (props) => {
  return (
    <div className="btn btn-large btn-dark outline" onClick={props.fn}>
      {props.text}
    </div>
  );
};

export default EcButton;
