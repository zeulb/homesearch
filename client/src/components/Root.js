import React, { Component } from 'react';

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
      <div>
        {this.state.homes.map(home => <span>{home.address}</span>)}
      </div>
    );
  }
}

export default Root;
