import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ closeModal, modalIsOpen}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-brand text-center">Hello</h2>
                <form className="m-5 p-5" onSubmit={handleSubmit(onSubmit)}>
                    {/* <input defaultValue="test" {...register("example")} />                  
                    <input {...register("exampleRequired", { required: true })} />                 
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" /> */}
                    <form>
                        <div class="form-row">
                            <div className="mb-2" class="form-group col-md-6">
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Your Name" />
                            </div>
                            <div className="mb-2"  class="form-group col-md-6">
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="mb-2"  class="form-group">
                            <input type="text" class="form-control" id="inputAddress" placeholder="Email" />
                        </div>
                        <div class="form-row">
                            <div className="mb-2"  class="form-group col-md-4">
                                <select id="inputState" class="form-control">
                                    <option selected>male</option>
                                    <option>female</option>
                                </select>
                            </div>
                            <div className="mb-2"  class="form-group col-md-2">
                                <input type="text" class="form-control" id="inputZip" placeholder="your age" />
                            </div>
                            <div className="mb-2"  class="form-group col-md-2">
                                <input type="text" class="form-control" id="inputZip" placeholder="weight" />
                            </div>
                        </div>
                        <div class="form-group">
                        </div>
                        <button type="submit" class="btn btn-primary">Send</button>
                    </form>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;