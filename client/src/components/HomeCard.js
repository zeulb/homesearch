import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';
import './HomeCard.css';

const currencyFormatter = require('currency-formatter');

class HomeCard extends Component {
  renderAnchor() {
    return (
      <Anchor
        href={this.props.url}
        primary={true}
        label='View Details'
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

  renderInfoItem(key, value) {
    return (
      <ListItem
        justify='between'
        separator='horizontal'>
        <span>{key}</span>
        <span className='HomeCard-infoItemValue'>{value || '-'}</span>
      </ListItem>
    );
  }

  renderInformation() {
    return (
      <List className='HomeCard-infoBlock'>
        {this.renderInfoItem('Beds', this.props.bed_count)}
        {this.renderInfoItem('Baths', this.props.bath_count)}
        {this.renderInfoItem('Square Feet', this.props.square_feet)}
      </List>
    );
  }

  getThumbnailUrl() {
    if (this.props.metadata.images.length) {
      return this.props.metadata.images[0].url;
    } else {
      return null;
    }
  }

  render() {
    return (
      <Card
        className="HomeCard"
        contentPad={'small'}
        label={this.renderPrice()}
        heading={this.renderAddress()}
        description={this.renderInformation()}
        thumbnail={this.getThumbnailUrl()}
        link={this.renderAnchor()}
      />
    );
  }
}

export default HomeCard;
