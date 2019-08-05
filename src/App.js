import React from 'react';
import Character from "./components/Character";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import characters from "./characters.json";
import './App.css';

class App extends React.Component {

  state = {
    characters
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Place Holder</h1>

        {this.state.characters.map(character => (
          <Character
            id={character.id}
            key={character.id}
            image={character.image}
            selected={character.selected}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
