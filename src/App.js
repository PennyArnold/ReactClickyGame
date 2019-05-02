
import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import Container from "./components/Container"
import "./App.css";



class App extends Component {

  state = {
      score: 0,
      topScore: 0,
      characters: characters,
      display: "Click A Tile To Start",
      clickedCharacters: []
  };
  
    // display this if they got it right
    changeDisplayCorrect = () => {
      // update the display 
      this.setState({display: "Correct!"});
        }
        
        
     // display this if they lost  
    changeDisplayLoser = () => {
     // update the display 
     this.setState({display: "Game Over! Try Again!"});
    }
        
    
   
   setScore = () => {  // increase the score by one
    this.setState({ score: this.state.score + 1 });
    // return this.state.score;
    console.log(this.state.score);
  };
  
  resetScore = () => { // update the topScore if the score is > topScore
   if (this.state.score > this.state.topScore) {
       this.setState({ topScore: this.state.score});
       //  eslint-disable-next-line
       this.setState({ score: this.state.score = 0});// then reset score to 0
       this.resetCharacters() 
    }else {// reset the score
          //  eslint-disable-next-line 
      this.setState({ score: this.state.score = 0});
        // reset the clicked value of all the cards
       this.setState({clickedCharacters: []});
       this.resetCharacters()
       
  }
}
 
  resetCharacters = () => {
    const sorted = [...this.state.characters]
  
    for (var i = 0; i < sorted.length; i += 1) {
      delete sorted[i].clicked
      sorted[i].clicked = false
    }
    console.log("+++++++++++++++++++++++++++++" + typeof sorted)

    this.setState({characters: sorted}, function() {
      console.log(this.state.characters)
      console.log("--------------------------------------------------------" + JSON.stringify(this.state))
    })
  }  

  handleShuffle = () => { // copy all the values from this.state.characters... 
    // and puts them into this array
      const sorted = [...this.state.characters]
          
        // shuffle the images around
      sorted.sort(function(a, b){return 0.5 - Math.random()});
      this.setState({ // replace the characters array with the sorted array 
          characters: sorted
      }) 
      }
  correctGuess = (event) => {
    const sorted = {...this.state.characters}
    console.log(sorted[0])
    console.log("guessed ID " + event)
    
    for (var i = 0; i < this.state.characters.length; i += 1) {

      if (sorted[i].id === event) {
        delete sorted[i].clicked
        console.log("Found")
        sorted[i].clicked = true
        console.log("clicked " + sorted[i].clicked)
      }   else {
        console.log("not working")
      }
    }
    this.setState({characters: sorted}, function() {
      console.log(this.state.characters)
    })
  
    
  }

  
    // return a card for each character that we have in the json
    render() {
    return (
        <Container>
            <Title 
            score={this.state.score}
            topScore={this.state.topScore}
            display={this.state.display}
            />
        <Wrapper> 
            {this.state.characters.map(character => (// map over the characters array...
            // and make a card for each one
            <CharacterCard // then assign these attributes
            resetScore={this.resetScore}
            changeDisplayCorrect={this.changeDisplayCorrect}
            changeDisplayLoser={this.changeDisplayLoser}
            handleClickTrue={this.handleClickTrue}
            setScore={this.setScore}
            id={character.id}
            key={character.id}
            image={character.image}
            shuffle={this.handleShuffle}
            clicked={character.clicked}
            correctGuess={this.correctGuess}
            />
      )
      )
      }
      </Wrapper>
      </Container>
  )
  }

}
export default App;

