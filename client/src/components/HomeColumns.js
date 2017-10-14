import React, { Component } from 'react';
import Columns from 'grommet/components/Columns';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import InfiniteScroll from 'react-infinite-scroller';
import HomeCard from './HomeCard';

class HomeColumns extends Component {
  ENTRIES_PER_PAGE = 6;

  state = {
    currentPage: 0,
  }

  componentDidUpdate(prevProps, prevState) {
    // Reset current page when filter changes.
    if (this.props.homes !== prevProps.homes) {
      this.setState({
        currentPage: 0
      });
    }
  }

  renderNoResult() {
    return (
      <Section>
        <Heading tag="h2" align="center">
          No matching homes found.
        </Heading>
      </Section>
    );
  }

  onLoadMorePage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }

  maximumHomesToLoad() {
    return (this.state.currentPage + 1) * this.ENTRIES_PER_PAGE;
  }

  hasMorePage() {
    return this.maximumHomesToLoad() < this.props.homes.length;
  }

  homesToRender() {
    return this.props.homes.slice(0, this.maximumHomesToLoad());
  }

  render() {
    if (this.props.homes.length === 0) {
      return this.renderNoResult();
    }

    return (
      <Section>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.onLoadMorePage}
          hasMore={this.hasMorePage()}
        >
          <Columns maxCount={3} masonry={true}>
          {
            this.homesToRender().map(
              home => <HomeCard key={home.mls_id} {...home}/>)
          }
          </Columns>
        </InfiniteScroll>
      </Section>
    );
  }
}

export default HomeColumns;
