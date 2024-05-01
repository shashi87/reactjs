import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form } from 'react-bootstrap';
import { BackArrowIcon, MasterCardIcon, VisaCardIcon } from '../../assets/Icons';
import './Payment.scss'
const Payment = () => {
    const navigate =useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const handleTimeChange = (time) => {
        setSelectedTime(time);

    };
    useEffect(() => {
        document.body.classList.add('remove-body-padding');
        return () => {
            document.body.classList.remove('remove-body-padding');
        };
    }, []);
    return (
        <>
            <div className='payment-wrapper-main'>
            <div className='btn-wrap back-btn'>
                            <Button variant='light' onClick={() => navigate(-1)}><BackArrowIcon /> Back</Button>
                        </div>
                <div className='payment-left'>
                    <div className='payment-left-content'>
                        <div className='btn-wrap'>
                            <Button variant='light' onClick={() => navigate(-1)}><BackArrowIcon /> Back</Button>
                        </div>
                        <div className='payment-title-wrap'>
                            <div className='payment-title'>Payment Method</div>
                            <div className='payment-description'>Enter your payment information</div>
                        </div>
                        <Form className='payment-form-wrap'>
                            <div className='form-row'>
                                <Form.Label>Card Information</Form.Label>
                                <div className='w-100 card-wrapper'>
                                <Form.Control type="text" placeholder="1234 1234 1234 1234" />
                                <div className='card-tag-wrap'>
                                    <div className='card-tag'><MasterCardIcon/></div>
                                    <div className='card-tag'><VisaCardIcon/></div>
                                </div>
                                </div>
                                <div className='row mt-0 mt-md-3 g-3 g-md-2'>
                                    <div className='col-md-6'><Form.Control type="text" placeholder="MM/YY" /></div>
                                    <div className='col-md-6'><Form.Control type="text" placeholder="CVC" /></div>
                                </div>
                            </div>
                            <hr />
                            <div className='installation-address-wrap'>
                                <div className='installation-title'>Installation Address</div>
                                <div className='form-row'>
                                    <Form.Label>Date and Time</Form.Label>
                                    <div className='row g-3 g-md-2'>
                                        <div className='col-md-6 date-wrapper'>
                                            <DatePicker className='form-control' selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                        <div className='col-md-6 time-wrapper'>
                                            <ReactDatePicker
                                                className='form-control'
                                                selected={selectedTime}
                                                onChange={handleTimeChange}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                dateFormat="h:mm aa"
                                                timeCaption="Time"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='form-row'>

                                    <div className='row g-3 g-md-2'>
                                        <div className='col-md-6'>
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Your First Name" /></div>
                                        <div className='col-md-6'>
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Your Last Name" /></div>
                                    </div>
                                </div>

                                <div className='form-row'>
                                    <Form.Label>Street Address</Form.Label>
                                    <Form.Control type="text" placeholder="House Number, street name" />
                                </div>
                                <div className='form-row'>
                                    <Form.Control type="text" placeholder="Flat, building, etc" />

                                </div>
                                <div className='form-row'>
                                    <Form.Label>Town/City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Town or City" />
                                </div>
                                <div className='form-row'>
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Phone Number" />
                                </div>
                                <div className='form-row'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Email Address" />
                                </div>
                                <div className='form-row'>
                                    <div className='row g-3 g-md-2'>
                                        <div className='col-md-6'>
                                            <Form.Label>Country/Region</Form.Label>
                                            <Form.Control type="text" placeholder="Choose" /></div>
                                        <div className='col-md-6'>
                                            <Form.Label>Postal Code</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Your Postal Code" /></div>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className='d-grid'><Button variant='primary'>Purchase</Button></div>

                                </div>
                            </div>
                        </Form>

                    </div>
                </div>
                <div className='payment-right'>
                    <div className='payment-right-content'>
                        <div className='payment-order-title'>Your Order</div>
                        <div className='order-box-wrapper'>
                            <div className='order-box active'>
                                <div className='order-box-top'>
                                    <div className='order-tag'>TT010</div>
        
                                </div>
                                <div className='order-description'>
                                    Self-Install OBDII Plug and Play tracker
                                </div>
                                <div className='order-footer'>
                                    <div className='order-price'>
                                        $1,000
                                    </div>
                                    <div className='learn-more'>Learn More</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment