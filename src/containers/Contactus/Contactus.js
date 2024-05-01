import React, { useEffect } from 'react'
import './Contactus.scss'
import Form from 'react-bootstrap/Form';
import { CallIcon, EmailIcon, LocationIcon } from '../../assets/Icons';
import Button from 'react-bootstrap/Button';
import { useTranslation } from "react-i18next";
const ContactUs = () => {
  const { t } = useTranslation();
  const contact = t("contact", { returnObjects: true });
  useEffect(() => {
    document.body.classList.add('remove-body-padding');
    document.getElementById('header').classList.add('header-bg-blue')
    return () => {
      document.body.classList.remove('remove-body-padding');
      document.getElementById('header').classList.remove('header-bg-blue')
    };
  }, []);
  return (
    <>
      <div className='contact-wrapper-main'>
        <div className='container'>
          <div className='contact-wrapper'>
            <div className='contact-left'>
              <div className='contact-title-wrapper'>
                <div className='contact-title'>
                  {contact.text1}
                </div>
                <div className='contact-description'>  {contact.text2}</div>
              </div>
              <div className='our-contact-wrap'>
                <div className='our-contact-title'> {contact.ourcontact}</div>
                <div className='our-contacts'>
                  <div className='contact-tag'><LocationIcon />   {contact.address}</div>
                  <div className='contact-tag'><CallIcon />   {contact.phoneNumber}</div>
                  <div className='contact-tag'><EmailIcon />   {contact.email}</div>
                </div>
              </div>
            </div>
            <div className='contact-right'>
              <Form className='contact-form-wrap'>
                <div className="form-row" >
                  <Form.Label>{contact.name}</Form.Label>
                  <Form.Control type="text" placeholder={contact.placeholder1} />
                </div>
                <div className="form-row" >
                  <Form.Label>{contact.email}</Form.Label>
                  <Form.Control type="text" placeholder={contact.placeholder2} />
                </div>
                <div className="form-row">
                  <Form.Label>{contact.message}</Form.Label>
                  <Form.Control as="textarea" placeholder={contact.placeholder3} />
                </div>
                <div className="form-row">
                <Button variant="primary">{contact.submit}</Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs