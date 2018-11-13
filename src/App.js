import React, { Component } from 'react';
import './App.css';
import characters from './components/characters';
import Wrapper from './components/Wrapper'
import PageHeader from './components/PageHeader.js';
import ScoreTracker from './components/ScoreTracker.js';
import CharImg from './components/CharImg';

console.log(characters)

class App extends Component {
  state = {
    currentScore: 0,
    bestScore: 0,
    activeMessage: "Click a Character to begin!",
    characters: characters
  }

  componentDidMount() {
    this.shuffleChars()
  }

  shuffleChars = () => {
    const newCharOrder = characters.sort(function (a, b) { return 0.5 - Math.random() });

    this.setState({
      characters: newCharOrder
    })
  }

  handleImgClick = (id) => {
    const newScore = this.state.currentScore + 1
    this.setState({
      currentScore: newScore,
      activeMessage: "You clicked a new character!"
    })
    if (newScore > this.state.bestScore) {
      this.setState({
        bestScore: newScore
      })
    }
    const thisId = this.state.characters.findIndex((char) => (char.id === id));
    if (this.state.characters[thisId].clicked) {
      this.handleNewGame()
    } else {
      const newState = [...this.state.characters]
      newState[thisId].clicked = true;

      this.setState({
        characters: newState
      })

      const newScore = this.state.currentScore + 1
      this.setState({
        currentScore: newScore,
        activeMessage: "You clicked a new character!"
      })
      if (newScore > this.state.bestScore) {
        this.setState({
          bestScore: newScore
        })
      }
    }

    this.shuffleChars()
  }

  handleNewGame = () => {
    const charsUpdater = [...this.state.characters];
    charsUpdater.forEach(char => {
      char.clicked = false
    })

    this.setState({
      currentScore: 0,
      activeMessage: "Oops! You've clicked this character before! Game over!",
      characters: charsUpdater
    })
  }

  render() {
    return (
      <div>
        <PageHeader>
          <ScoreTracker
            currentScore={this.state.currentScore}
            bestScore={this.state.bestScore}
            activeMessage={this.state.activeMessage} />
        </PageHeader>
        <Wrapper>
          {
            characters.map((character) => (
              <CharImg
                info={character}
                key={character.id}
                click={() => this.handleImgClick(character.id)} />
            ))
          }

        </Wrapper>
      </div>
    );
  }
}

export default App;
