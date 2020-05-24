import React, { Component } from 'react';
import { Booking } from './Booking.js';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <Booking/>
      </div>
    );
  }
}
