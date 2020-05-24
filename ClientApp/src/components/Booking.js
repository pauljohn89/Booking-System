import React, { Component } from 'react';
import moment from 'moment';
import BookingService from './api-authorization/BookingService.js';
export class Booking extends Component {
    static displayName = Booking.name;
    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
            message: null
        };
        //this.deleteBookingClicked = this.deleteBookingClicked.bind(this);
        this.refreshBookings = this.refreshBookings.bind(this);
        //this.updateBookingClicked = this.updateBookingClicked.bind(this);
        //this.addBooingClicked = this.addBookingClicked.bind(this);
    }
    componentDidMount() {
        this.refreshBookings();

    }
    refreshBookings() {
        BookingService.retrieveAllBookings()
            .then(
                response => {
                    //console.log(response)
                    this.setState({ bookings: response.data })
                }
            )
    }
    //deleteBookingClicked(id) {
      
    //}
    //updateBookingClicked(id) {
    //    this.props.history.push(`/todos/${id}`);
    //}

    //addBookingClicked() {
    //    this.props.history.push(`/todos/-1`);
    //}
    render() {
        return (
            <div>
                <div className="container">
                    <h2>Bookings</h2>
                    <div className="div-right">
                        <button className="btn btn-primary btn-sm">Add New Booking</button>
                    </div>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Customer</th>
                                <th scope="col">Venue</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.bookings.map(bookings => <tr key={bookings.id}>
                                <td>{bookings.customerName}</td>
                                <td>{bookings.venue}</td>
                                <td>{moment(bookings.bookedDate).format('DD-MM-YYYY')}</td>
                                <td>{moment(bookings.bookedDate).format('h:mm:ss a')}</td>
                                <td><button className="btn btn-success btn-sm">Edit</button></td>
                                <td><button className="btn btn-warning btn-sm">Delete</button></td>
                            </tr>)}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}