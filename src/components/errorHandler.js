import React from 'react';
import './error.css';

export default class ErrorHandler extends React.Component {
  checkForMessage() {
    if (this.props.error.message && this.props.error.detail) {
      return (
        <h2>{this.props.error.message} {this.props.error.detail}</h2>
      )
    } else if (this.props.error.message) {
      return (
        <h2>{this.props.error.message}</h2>
      )
    }
    return;
  }

  render() {
    return (
      <div className='error-container'>
        <h1>Oooops! <span>Something went wrong...</span></h1>
        {this.checkForMessage()}
      </div>
    );
  }
}