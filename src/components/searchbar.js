import React from 'react';
import RequestHelper from '../functions/requestHelper';
import './search.css';

class SearchBar extends React.Component {

  updateCharacterInfo = characterInfo => {
    this.props.character(characterInfo);
  }

  handleError = error => {
    this.props.error(error);
  }

  // Give user a means of searching their favorite Character
  render() {
    const search = async () => {
      let searchField = document.getElementById('searchBar').value;
      RequestHelper(searchField)
        .then(result => {
          this.updateCharacterInfo(result);
        })
        .catch(error => {
          console.log(error);
          this.handleError(error);
        })
      // try {
      //   let request = await RequestHelper(searchField);
      //   this.updateCharacterInfo(request);
      // } catch (error) {
      //   console.log(error);
      //   this.handleError(error);
      // }
    };

    return (
      <div className='search-container'>
        <input type="search" id="searchBar" className='search-input' placeholder='Search Ex: Luke Skywalker'></input>
        <button onClick={search} className='search-button'> Search </button>
      </div>
    );
  }
}

export default SearchBar;