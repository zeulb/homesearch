import React, { Component } from 'react';
import App from 'grommet/components/App';
import SearchHeader from './SearchHeader';

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

  render() {
    return (
      <App>
        <SearchHeader />
        {this.state.homes.map(home => <span>{home.address}</span>)}
      </App>
    );
  }
}

export default Root;
