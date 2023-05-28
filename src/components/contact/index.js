import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import "../../styles/resume/resume.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import axios from "axios";
import fileDownload from "js-file-download";

function ContactForm() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [visibility, setVisibility] = useState("hidden");

  const radios = [
    { name: "PDF", value: "1" },
    { name: "JSON", value: "2" },
  ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setVisibility("hidden");
      // setDisabled(false);
    }
    setValidated(true);
    setVisibility("visibile");
  };

  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  const handleRadio = (event) => {
    const choice = event.currentTarget;
    switch (choice) {
      case "1":
        handleDownload(env.pdf, "jklinger-CV.pdf");
        break;
      case "2":
        handleDownload(env.json, "jklinger-CV.json");
        break;
      default:
        break;
    }
  };

  // this.validated ? setDisabled(true) : setDisabled(false);

  ///let radioValue = event.target.elements.radioGroup.value;

  // if (radioValue) {
  //   switch (radioValue) {
  //     case "PDF Format":
  //     default:
  //       null;
  //   }
  // }

  return (
    <>
      <div className='container'>
        <Button className='btn-dark' onClick={handleShow}>
          Download Resume
        </Button>
      </div>

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
            </Form.Group>
            {/* <Form.Group>
              <div key={"inline-radio"} className='mb-3'>
                <Form.Check
                  required
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
            </Form.Group> */}

            <Button className='btn-dark' type='submit'>
              Submit
            </Button>

            <ButtonGroup className='mb-2'>
              {radios.map((radio, idx) => (
                <ToggleButton
                  style={{ visibility: { visibility } }}
                  key={idx}
                  id={`radio-${idx}`}
                  type='radio'
                  variant='secondary'
                  name='radio'
                  value={radio.value}
                  onChange={(e) => handleRadio(e)}>
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>

            <Button style={{ visibility: "hidden" }} className='btn-dark'>
              Download
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ContactForm;
