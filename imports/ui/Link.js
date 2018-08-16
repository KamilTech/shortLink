import React from 'react';

export default class Link extends React.Component {
    onLogout() {
      this.props.history.push('/');
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