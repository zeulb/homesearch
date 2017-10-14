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

  render() {
    return (
      <App>
        <SearchHeader />
        <HomeColumns homes={this.state.homes}/>
      </App>
    );
  }
}

export default Root;
