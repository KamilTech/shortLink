import React from 'react';
import Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';

export default class Addlink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            isOpen: false,
            error: ''
        };
    }

    componentWillMount() {
        Modal.setAppElement('body');
    }
    
    onSubmit(e) {
        const { url } = this.state;
        
        e.preventDefault();

        if (url) {
          Meteor.call('links.insert', url, (err, res) => {
              if (!err) {
                  this.setState({ isOpen: false, url: '', error: '' });
              } else {
                  this.setState({ error: err.reason });
              }
          });
        }
    };

    onChange(e) {
        this.setState({
            url: e.target.value
        });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({isOpen: true})}>+ Add link</button>
                <Modal 
                    isOpen={this.state.isOpen} 
                    contentLabel="Add link"
                    onAfterOpen={() => this.refs.url.focus()}
                    onRequestClose={() => this.setState({ isOpen: false, url: '', error: '' })}>
                    <h1>Add Link</h1>
                    {this.state.error ? <p>{this.state.error}</p> : undefined}
                    <form onSubmit={this.onSubmit.bind(this)}>
                    <input 
                        type="text"
                        placeholder="URL"
                        ref="url"
                        value={this.state.url}
                        onChange={this.onChange.bind(this)}
                    ></input>
                    <button>Add link</button>
                    </form>
                    <button onClick={() => this.setState({isOpen: false, url: '', error: ''})}>Cancel</button>
                </Modal>
            </div>
        )
    };
}