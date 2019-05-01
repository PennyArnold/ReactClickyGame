import React, { Component } from "react";
import "./CharacterCard.css";

class CharacterCard extends Component  {
    state = {
    clicked: false
  };

 // when you click on an image
    handleClickTrue = (event, clicked) => {
    if(clicked === true) {// game is now over
      // update the display
      this.props.changeDisplayLoser();
      // reset the score
      this.props.resetScore();
    } else { 
     // update the display
      this.props.changeDisplayCorrect();
      // update the status of "clicked" to true
      this.props.correctGuess(event);
      // shuffle the images around
      this.props.shuffle();
      // increase the score by one
      this.props.setScore();
     
    }
    }; 
    
    
    render() {
        return (
              <div className="card">
              <img alt={this.props.id} src={this.props.image} onClick={() => this.handleClickTrue(this.props.id, this.props.clicked)} />
    </div>
            
            );
    }
    
}

export default CharacterCard;