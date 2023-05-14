import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";

function ContactForm() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  //const [formatOption, setFormatOption] = useState(null); not needed.

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    let radioValue = event.target.elements.radioGroup.value;

    if (radioValue) {
      switch (radioValue) {
        case "PDF Format":
      }
    }
  };

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Download Resume!
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop='static'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Enter Email</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type='email'
                placeholder='Enter email to download CV'
              />
              <Form.Control.Feedback>Thanks!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>
                Please input an Email!
              </Form.Control.Feedback>
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
              <div key={"inline-radio"} className='mb-3'>
                <Form.Check
                  inline
                  label='PDF Format'
                  name='radioGroup'
                  type='radio'
                  feedback='You must pick an option before submitting!'
                  feedbackType='invalid'
                  id='inline-radio-1'
                />
                <Form.Check
                  inline
                  label='JSON Format'
                  name='radioGroup'
                  type='radio'
                  id='inline-radio-2'
                />
              </div>
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
          <Button></Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ContactForm;
