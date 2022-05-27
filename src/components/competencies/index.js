import React from "react";
import "../../styles/competencies/style.css";
import ReactLogo from "../img/React-icon.svg";
import CreoLogo from "../img/creo.svg";
import CodeLogo from "../img/VSCode-Icon.svg";

const Competencies = () => {
  return (
    <>
      <div className='dark'>
        <div className='center brand'>
          <h1>Competencies</h1>
        </div>
        <div className='container'>
          <img className='item' src={ReactLogo} alt='React Logo' />
          <img className='item' src={CreoLogo} alt='Creo Logo' />
          <img className='item' src={CodeLogo} alt='VSCode Logo' />
        </div>
      </div>
    </>
  );
};

export default Competencies;
