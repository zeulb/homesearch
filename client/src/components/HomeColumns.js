import React, { Component } from 'react';
import Columns from 'grommet/components/Columns';
import Section from 'grommet/components/Section';
import HomeCard from './HomeCard';

class HomeColumns extends Component {
  render() {
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
