import React from 'react';

class ScoreTracker extends React.Component {

  render = () => (
    <p>Current Score: {this.props.currentScore} || Best Score: {this.props.bestScore}<br/>
    {this.props.activeMessage}</p>
  )
}

export default ScoreTracker;
