import React from 'react';
import "./CharImg.css";

class CharImg extends React.Component {
  state = {
    clicked: false
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.info.clicked !== this.props.info.clicked){
        this.setState({clicked:nextProps.clicked});
    }
}

  // handleClick = () => {
  //   if (this.state.clicked) {
  //     // if you've clicked the character before, game over
  //     this.props.gameOver()
  //   } else {
  //     // if you haven't, your score goes up!
  //     this.setState({
  //       clicked: true
  //     });
  //     this.props.scoreUp()
  //   }
  //   // In both cases, the images have to reshuffle.
  //   this.props.shuffle()
  // }

  render = () => (
    <div className = "card">
      <img 
        className="card-img-top" 
        src={this.props.info.image} 
        alt={this.props.info.name}
        onClick={this.props.click}/>
    </div>
  )
}

export default CharImg;
