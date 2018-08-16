import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: ''
      }
    }

    onSubmit(e) {
      this.setState({
        error: 'Something went wrong.'
      });
      
      e.preventDefault();
    }

    render() {
      return (
        <div>
          <h1>Join Short Link</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="email" name="email" placeholder="Email"></input>
            <input type="password" name="password" placeholder="Password"></input>
            <button>Create Account</button>
          </form>

          <Link to="/login">Already have an acconut?</Link>
        </div>
      )
    }
  }