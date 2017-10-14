import React, { Component } from 'react';
import App from 'grommet/components/App';
import SearchHeader from './SearchHeader';
import HomeColumns from './HomeColumns';

class Root extends Component {
  state = {
    isLoading: true,
    homes: []
  }

  componentDidMount() {
    fetch('/api/homes')
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          homes: data.results
        })
      });
  }

  renderContent() {
    if (this.state.isLoading) {
      return null;
    } else {
      return <HomeColumns homes={this.state.homes}/>;
    }
  }

  render() {
    return (
      <App>
        <SearchHeader />
        {this.renderContent()}
      </App>
    );
  }
}

export default Root;
