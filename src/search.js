import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Search extends Component {
  state = {
    searchText: "",
    badCall: false
  }
  handleChange = event => {
    this.setState({
      searchText: event.target.value
    });
  };
  render() {
    const searchStyle ={
      height: '200px',
      width:'300px',
      margin: "auto"
    };
    const box ={
      height: '40px',
      width:'300px',
      marginTop: '5px'
    };
    return (
      <div style={searchStyle}>
        <hr/>
        <p>Search repositories by username</p>
        <input type='textbox' style={box} value={this.state.searchText} onChange={this.handleChange} />
        <br />
        <button style={box} disabled={!this.state.searchText}
          onClick={() =>{this.props.handleClick(this.state.searchText)}}>
          Search
        </button>
        <hr/>
      </div>
    );
  }
}

export default Search
