import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';

const currencyFormatter = require('currency-formatter');

class HomeCard extends Component {
  renderAnchor() {
    return (
      <Anchor
        href={this.props.url}
        primary={true}
        label='Open'
        target='_blank'
      />
    );
  }

  renderAddress() {
    return (
      <Heading
        tag='h3'
        strong={true}>
        {this.props.address}
      </Heading>
    );
  }

  renderPrice() {
    return currencyFormatter.format(this.props.price, { code: 'USD', precision: 0 });
  }

  render() {
    return (
      <Card
        label={this.renderPrice()}
        heading={this.renderAddress()}
        link={this.renderAnchor()}
      />
    );
  }
}

export default HomeCard;
