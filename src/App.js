import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getReposByUsername } from "./apiCall";
import Search from './search';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const DetailList = (props) => {
  return(
    <div>
      App Details
    </div>
  )
}


const RepoTable = (props) => {
  const arr = props.list.repolist
  function newarr(array){
    let newish = []
    for (var i = 0; i < array.length; i++) {
      // newish.push(<li>{array[i]}</li>)
      newish.push(<li><Link to='/reponame'>{array[i]}</Link></li>)
    }
    return newish
  }
  newarr(arr)
  return (
    <Router>
    <div>
      <ul>
        {newarr(arr)}
      </ul>
      <Route exact path="/reponame" component={DetailList}/>
    </div>
    </Router>
  );
};

RepoTable.propTypes = {
  list: PropTypes.object
};

class RepoList extends Component {
  render() {
    const resultsBox ={
      marginLeft: '20px',
      textAlign: 'center'
    };

    return (
      <div style={resultsBox}>
        <h2>Usernames Repos</h2>
        <p>Filter Repos by primary language</p>
        <select name="langList">
          <option value="HTML">HTML</option>
          <option value="Javascript">Javascript</option>
          <option value="Ruby">Ruby</option>
        </select>

        <RepoTable list={this.props.state}/>
      </div>
    );
  }
}


class App extends Component{
  state = {
    repolist: []
  }

  handleResponse = list => {
    this.setState({
      repolist: list
    })

  }

  handleClick = url => {
    getReposByUsername(url)
      .then(list =>{
        function namelist(arr){
          const results = arr.reduce((accum, personObj) => {
            let name = personObj.name
            accum[name] = true
            return accum
          }, {})
        return Object.keys(results)
        }
        this.handleResponse(namelist(list))
      })
  }

  render() {
    const appStyle ={
      height: '1000px',
      width:'500px',
      margin: "auto"
    };
    return (
      <div className="App" style={appStyle}>
        <h1>GitHub Veiwer</h1>
        <hr />
        <Search handleClick={this.handleClick}/>
        <RepoList state={this.state}/>
      </div>
    );
  }
}

export default App
