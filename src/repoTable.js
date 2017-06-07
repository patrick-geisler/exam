import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const RenderTableRow = (props) => {
  return(
          <td>
            Repo
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
          <RenderTableRow />
        </tr>
      </tbody>
      </table>
    </div>
  )
}
