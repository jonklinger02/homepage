import React from "react";
import { Container, ToastContainer } from "react-bootstrap";

const MainLayout = (props) => {
  return (
    <Container /*className='mt-5 mb-5'*/>
      {props.children}
      <ToastContainer />
    </Container>
  );
};
export default MainLayout;
