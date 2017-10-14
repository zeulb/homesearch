import React, { Component } from 'react';
import App from 'grommet/components/App';
import SearchHeader from './SearchHeader';
import HomeColumns from './HomeColumns';

class Root extends Component {
  state = {
    filterText: '',
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

  onSearchTextChange = (event) => {
    this.setState({
      filterText: event.target.value
    });
  }

  getMatchingHomes() {
    return this.state.homes
      .filter(home => home.address.includes(this.state.filterText));
  }

  renderContent() {
    if (this.state.isLoading) {
      return null;
    } else {
      return <HomeColumns homes={this.getMatchingHomes()}/>;
    }
  }

  render() {
    return (
      <App>
        <SearchHeader onSearchTextChange={this.onSearchTextChange} />
        {this.renderContent()}
      </App>
    );
  }
}

export default Root;
