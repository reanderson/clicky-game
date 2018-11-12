import React from 'react';

const PageHeader = props => (
  <div className="jumbotron jumbotron-fluid text-center">
    <h1>Clicky Game!</h1>
    <h5>Click each character... but no repeats!</h5>
    {props.children}
  </div>
);

export default PageHeader;