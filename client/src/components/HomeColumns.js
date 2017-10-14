import React, { Component } from 'react';
import Columns from 'grommet/components/Columns';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import HomeCard from './HomeCard';

class HomeColumns extends Component {
  renderNoResult() {
    return (
      <Section>
        <Heading tag="h2" align="center">
          No matching homes found.
        </Heading>
      </Section>
    );
  }

  render() {
    if (this.props.homes.length === 0) {
      return this.renderNoResult();
    }

    return (
      <Section>
        <Columns maxCount={3}>
          {
            this.props.homes.map(
              home => <HomeCard key={home.mls_id} {...home}/>)
          }
        </Columns>
      </Section>
    );
  }
}

export default HomeColumns;
