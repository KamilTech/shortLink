import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class Link extends React.Component {
    onLogout() {
      Meteor.logout();
    }

    render() {
      return (
        <div>
           <p>Link Component</p>
           <button onClick={this.onLogout.bind(this)}>Click</button>
        </div>
      )
    }
  }