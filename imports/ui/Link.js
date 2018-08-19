import React from 'react';
import { Meteor } from 'meteor/meteor';

import LinkList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';
import LinksListFilters from './LinksListFilters';

export default class Link extends React.Component {
    componentWillMount() {
      if (!Meteor.userId())
          this.props.history.replace('/login');
    }

    render() {
      return (
        <div>
          <PrivateHeader title="Your Links"/>
          <div className="page-content">
            <LinksListFilters/>
            <AddLink/>
            <LinkList/>
          </div>
        </div>
      )
    }
  }