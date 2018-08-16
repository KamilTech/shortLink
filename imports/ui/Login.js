import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
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

      Meteor.loginWithPassword({email}, password, (err) => {
        if (err) {
          this.setState({error: 'Unable to login. Check email and password.'});
        } else {
          this.setState({error: ''});
        }
      });

      e.preventDefault();
    }

    render() {
      return (
        <div>
          <h1>Short Link</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="email" ref="email" name="email" placeholder="Email"></input>
            <input type="password" ref="password" name="password" placeholder="Password"></input>
            <button>Login</button>
          </form>

          <Link to="/signup">Have an account?</Link>
        </div>
      );
    }
  }