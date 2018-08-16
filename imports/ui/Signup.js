import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: ''
      }
    }

    componentWillMount() {
      if (Meteor.userId())
          this.props.history.replace('/links');
    }

    onSubmit(e) {
      let email = this.refs.email.value.trim();
      let password = this.refs.password.value.trim();

      Accounts.createUser({email, password}, (err) => {
          console.log('Signup callback' + err);
      });

      e.preventDefault();
    }

    render() {
      return (
        <div>
          <h1>Join Short Link</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="email" ref="email" name="email" placeholder="Email"></input>
            <input type="password" ref="password" name="password" placeholder="Password"></input>
            <button>Create Account</button>
          </form>

          <Link to="/login">Already have an acconut?</Link>
        </div>
      )
    }
  }