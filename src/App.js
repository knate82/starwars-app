import React from 'react';
import './App.css';
import MainBackground from './mainBackground.jpg';
import SearchBar from './components/searchbar';
import CharacterProfile from './components/characterProfile';
import ErrorHandler from './components/errorHandler';

// Modified app.js to work in class architecture
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {},
      showProfile: false,
      error: {},
      showError: false
    }
  }
  // Callback function as a quick and easy means to update character info from child SearchBar
  updateData = characterInfo => {
    if (characterInfo && characterInfo.hasOwnProperty('name')) {
      this.setState({
        character: characterInfo,
        showProfile: true,
        showError: false
      });
    } else {
      // for some reason it doesn't throw errors for my catch blocks if the character 404's
      let error = {
        message: 'Charcter Not Found',
        detail: 'SWAPI is a vast, but limited Star Wars database.'
      };
      this.setState({
        character: {},
        showProfile: false
      });
      this.handleError(error);
    }
  }

  // Callback to handle some errors
  handleError = error => {
    if (this.state.showProfile) {
      this.setState({
        showProfile: false,
        error: error,
        showError: true
      });
    } else {
      this.setState({
        error: error,
        showError: true
      });
    }
  }

  render() {
    const background = {
      backgroundImage: `url(${MainBackground})`
    };

    return (
      <section style={background} className='App-container'>
        <div className='App-content'>
          <SearchBar character={this.updateData.bind(this)} error={this.handleError.bind(this)} />
          {this.state.showProfile &&
            <CharacterProfile character={this.state.character} />
          }
          {this.state.showError &&
            <ErrorHandler error={this.state.error} />
          }
        </div>
      </section>
    );
  }
}

export default App;