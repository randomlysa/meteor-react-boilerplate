import React from 'react';
import onEnterPrivatePage from '../utils/onEnterPrivatePage';

import PrivateHeader from './PrivateHeader'

export default class Dashboard extends React.Component {
  componentWillMount() {
    onEnterPrivatePage()
  }

  render() {
    return (
      <div>
        <PrivateHeader title="Dashboard" />
        <div className="page-content">
          Dashboard page content.
        </div>
      </div>
    )
  } // render
} // export default class Dashboard
