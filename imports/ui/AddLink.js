import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class Addlink extends React.Component {

    onSubmit(e) {
        const url = this.refs.url.value.trim();
        e.preventDefault();
        if (url) {
          Meteor.call('links.insert', url); // Dodać obsługę błedów
          // Links.insert({ url: url, userId: Meteor.userId() });
          this.refs.url.value = '';
        }
    };

    render() {
        return (
            <div>
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref="url" placeholder="URL"></input>
                <button>Add link</button>
                </form>
            </div>
        )
    };
}