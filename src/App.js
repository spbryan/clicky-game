import React from 'react';
import Character from "./components/Character";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import characters from "./characters.json";
import './App.css';

class App extends React.Component {

  state = {
    characters,
    selectedCharacterIds: [],
    score: 0,
    goal: 12,
    status: ""
  }

  shuffleCharacters = id => {
    let selectedCharacterIds = this.state.selectedCharacterIds;

    if (selectedCharacterIds.includes(id)) {
      this.setState({ selectedCharacterIds: [], score: 0, status: "Game Over! Loser!!. Click to play again!" });
      return;
    } else {
      selectedCharacterIds.push(id)

      if (selectedCharacterIds.length === 12) {
        this.setState({ score: 12, status: "You Have Chosen Wisely! Click to play again!", selectedCharacterIds: [] });
        return;
      }

      this.setState({ characters, selectedCharacterIds, score: selectedCharacterIds.length, status: " " });

      for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
    }
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Skyrim Click Game</h1>
          <p className="App-intro">
            Do Not click on the same NPC Twice!
          </p>
        </header>
        <Score total={this.state.score}
          goal={12}
          status={this.state.status}
        />
        <Wrapper>
          {this.state.characters.map(character => (
            <Character
              shuffleCharacters={this.shuffleCharacters}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
      </div>
      // <Wrapper>
      //   <h1 className="title">Place Holder</h1>

      //   {this.state.characters.map(character => (
      //     <Character
      //       id={character.id}
      //       key={character.id}
      //       image={character.image}
      //       selected={character.selected}
      //     />
      //   ))}
      // </Wrapper>
    );
  }
}

export default App;
