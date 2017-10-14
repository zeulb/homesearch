import React, { Component } from 'react';
import Columns from 'grommet/components/Columns';
import Section from 'grommet/components/Section';

class HomeColumns extends Component {
  render() {
    return (
      <Section>
        <Columns maxCount={3}>
          {this.props.homes.map(home => <span>{home.address}</span>)}
        </Columns>
      </Section>
    );
  }
}

export default HomeColumns;
