import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import { Links } from '../api/links';

export default class Link extends React.Component {
    onLogout() {
      Accounts.logout();
    }

    componentWillMount() {
      if (!Meteor.userId())
          this.props.history.replace('/login');
    }

    onSubmit(e) {
      const url = this.refs.url.value.trim();
      if (url) {
        Links.insert({ url });
        this.refs.url.value = '';
      }
      e.preventDefault();
    }

    render() {
      return (
        <div>
           <p>Your Links</p>
           <button onClick={this.onLogout.bind(this)}>Logout</button>
           <p>Add Link</p>
           <form onSubmit={this.onSubmit.bind(this)}>
             <input type="text" ref="url" placeholder="URL"></input>
             <button>Add link</button>
           </form>
        </div>
      )
    }
  }