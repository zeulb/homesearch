import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import HomeIcon from 'grommet/components/icons/base/Home';
import Search from 'grommet/components/Search';

class SearchHeader extends Component {
  render() {
    return (
      <Header fixed={true} size='large'>
        <Title>Homesearch</Title>
        <HomeIcon />
        <Search
          placeHolder='Search address...'
          fill={true}
          responsive={true}
          inline={true}
          onDOMChange={this.props.onSearchTextChange}
        />
      </Header>
    );
  }
}

export default SearchHeader;
