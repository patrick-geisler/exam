import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class Search extends Component {
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
        <input type='textbox' style={box} />
        <br />
        <button style={box} >Search</button>
        <hr/>
      </div>
    );
  }
}

const Details = (props) => {
  return(
          <div>
            RepoDetails
          </div>
  )
}

const TableRow = (props) => {
  return(
          <td>
            <Router>
              <div>
                <Link to="/repos:id">RepoName</Link>
                <Route path="/repos:id" component={Details}/>
              </div>
            </Router>
          </td>
  )
}

const RepoTable = (props) => {
  return(
    <div>
      <table className='table'>
        <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
        <tbody>
        <tr>
          <TableRow />
        </tr>
      </tbody>
      </table>
    </div>
  )
}

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
        <RepoTable />
      </div>
    );
  }
}

const Home = () => {
  return(
          <div>
            <Search />
            <RepoList />
          </div>
  )
}


class App extends Component {
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

        <Router>
          <Switch>
            <Route path="/" component={Home}/>
            <Route path="/home" component={Details}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
    <Router>
      <div>
        <Route path="/" component={App}/>
      </div>
    </Router>,document.getElementById('root')
);
