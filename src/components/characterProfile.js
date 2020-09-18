import React from 'react';
import './profile.css';

export default class CharacterProfile extends React.Component {
  // Specific component responsible for displaying the information
  render() {
    let character = this.props.character;
    return (
      <div className='profile-container'>
        <h2 id='characterName'>{character.name}</h2>
        <div className='card-container'>
          <div className='information-card'>
            <li><span>Year Born:</span> {character.birth_year}</li>
            <li><span>Gender:</span> {character.gender}</li>
            <li><span>Height:</span> {character.height}</li>
            <li><span>Hair Color:</span> {character.hair_color}</li>
            <li><span>Eye Color:</span> {character.eye_color}</li>
          </div>
          <div className='information-card'>
            <li><span>Home World:</span> {character.homeWorld}</li>
            <li><span>Weight:</span> {character.mass}</li>
            <li><span>Skin Color:</span> {character.skin_color}</li>
          </div>
        </div>
      </div>
    );
  }
}