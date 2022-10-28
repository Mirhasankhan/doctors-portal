import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({book, date}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 text-center">
            <div class="card m-4">
                <div class="card-body">
                    <h5 className="text-brand" class="card-title">{book.treatment}</h5>
                    <h6 className="ms-3" class="card-text">{book.time}</h6>
                    <p className="ms-2" class="card-text">{book.capacity}</p>
                    <button onClick={openModal} className="btn-brand">BOOK Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen}  closeModal={closeModal}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;