import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookData = [
    {
        treatment: 'Teeth Orthodontics',
        time: '8:00 AM-9:00AM',
        capacity: '10 Spaces Available',
    },
    {
        treatment: 'Cosmetic Dentistry',
        time: '8:00 AM-9:00AM',
        capacity: '10 Spaces Available',
    },
    {
        treatment: 'Teeth Cleaning',
        time: '8:00 AM-9:00AM',
        capacity: '10 Spaces Available',
    },
    {
        treatment: 'Cavity Protection',
        time: '8:00 AM-9:00AM',
        capacity: '10 Spaces Available',
    },
    {
        treatment: 'Teeth Orthodontics',
        time: '8:00 AM-9:00AM',
        capacity: '10 Spaces Available',
    },
    {
        treatment: 'Teeth Orthodontics',
        time: '8:00 AM-9:00AM',
        capacity: '10 Spaces Available',
    }
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className="text-center text-brand">Available Appointments on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookData.map(book => <BookingCard book={book} date={date}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;