import React, { useRef }  from 'react';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';

import './teacher2.css';

const handleClick = () => {
  window.open('https://firebasestorage.googleapis.com/v0/b/localinfopoint.appspot.com/o/images%2Fscrisoare-de-intentie.pdf?alt=media&token=d1e40649-d6e2-441b-a5cd-e014b8db6ca3&_gl=1*1bxe482*_ga*NDE3MTY1MzQuMTY1NjUxNjkyOA..*_ga_CW55HF8NVT*MTY4NTk2NDY5MC4xLjEuMTY4NTk2NTIyNC4wLjAuMA..', '_blank');
};


const Teacher2 = (props) => {

const [isButtonClicked4, setButtonClicked4] = useState(localStorage.getItem('buttonClicked4') === 'true');
const [isButtonClicked5, setButtonClicked5] = useState(localStorage.getItem('buttonClicked5') === 'true');
const [isButtonClicked6, setButtonClicked6] = useState(localStorage.getItem('buttonClicked6') === 'true');

//when start set on false and then set on true 
// const [isButtonClicked4, setButtonClicked4] = useState(localStorage.getItem('buttonClicked4') === 'false');
// const [isButtonClicked5, setButtonClicked5] = useState(localStorage.getItem('buttonClicked5') === 'false');
// const [isButtonClicked6, setButtonClicked6] = useState(localStorage.getItem('buttonClicked6') === 'false');

const handleButtonClick4 = () => {
  setButtonClicked4(true);
};

const handleButtonClick5 = () => {
  setButtonClicked5(true);
};

const handleButtonClick6 = () => {
  setButtonClicked6(true);
};

useEffect(() => {
  localStorage.setItem('buttonClicked4', isButtonClicked4);
}, [isButtonClicked4]);

useEffect(() => {
  localStorage.setItem('buttonClicked5', isButtonClicked5);
}, [isButtonClicked5]);

useEffect(() => {
  localStorage.setItem('buttonClicked6', isButtonClicked6);
}, [isButtonClicked6]);


  return (
    <div className="teacher2-container">
      <Helmet>
        <title>Teacher App</title>
      </Helmet>
      <div className="teacher2-teacher2">
        <div className="teacher2-header">
          <img
            src="/external/ubblogo12250-h1o8-200h.png"
            alt="ubblogo12250"
            className="teacher2-ubblogo1"
          />
          <img
            src="/external/psihologo12251-5bgr-200h.png"
            alt="psihologo12251"
            className="teacher2-psihologo1"
          />
        </div>
        <div className="teacher2-students-requests">
          <div className="teacher2-student-card">
            {/* <div className="teacher2-button">
              <span className="teacher2-text">
                <span>Acceptă</span>
              </span>
            </div> */}
            {isButtonClicked4 ? (
            <div className="teacher2-button" style={{ backgroundColor: 'green' }}>
              <span className="teacher2-text">
                <span>Acceptat</span>
              </span>
            </div>
          ) : (
            <div className="teacher2-button" onClick={handleButtonClick4}>
              <span className="teacher2-text">
                <span style={{ cursor: 'pointer' }}>Acceptă</span>
              </span>
            </div>
          )}
            <span className="teacher2-text02">
              <span>nume.student@stud.ubbcluj.ro</span>
            </span>
            <span className="teacher2-text04">
              <span>Nume Student</span>
            </span>
            <img
              src="/external/download2260-mbi7-200w.png"
              alt="download2260"
              className="teacher2-download"
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="teacher2-student-card1">
            {/* <div className="teacher2-button1">
              <span className="teacher2-text06">
                <span>Acceptă</span>
              </span>
            </div> */}
            {isButtonClicked5 ? (
            <div className="teacher2-button1" style={{ backgroundColor: 'green' }}>
              <span className="teacher2-text06">
                <span>Acceptat</span>
              </span>
            </div>
          ) : (
            <div className="teacher2-button1" onClick={handleButtonClick5}>
              <span className="teacher2-text06">
                <span style={{ cursor: 'pointer' }}>Acceptă</span>
              </span>
            </div>
          )}
            <span className="teacher2-text08">
              <span>nume.student@stud.ubbcluj.ro</span>
            </span>
            <span className="teacher2-text10">
              <span>Nume Student</span>
            </span>
            <img
              src="/external/download2267-ceer-200w.png"
              alt="download2267"
              className="teacher2-download1"
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            />
           
          </div>
          <div className="teacher2-student-card2">
            {/* <div className="teacher2-button2">
              <span className="teacher2-text12">
                <span>Acceptă</span>
              </span>
            </div> */}
               {isButtonClicked6 ? (
            <div className="teacher2-button2" style={{ backgroundColor: 'green' }}>
              <span className="teacher2-text12">
                <span>Acceptat</span>
              </span>
            </div>
          ) : (
            <div className="teacher2-button2" onClick={handleButtonClick6}>
              <span className="teacher2-text12">
                <span style={{ cursor: 'pointer' }}>Acceptă</span>
              </span>
            </div>
          )}
            <span className="teacher2-text14">
              <span>nume.student@stud.ubbcluj.ro</span>
            </span>
            <span className="teacher2-text16">
              <span>Nume Student</span>
            </span>
            <img
              src="/external/download2274-c9b-200w.png"
              alt="download2274"
              className="teacher2-download2"
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <img
            src="/external/rectangle52275-6nok-200h.png"
            alt="Rectangle52275"
            className="teacher2-rectangle5"
          />
          <img
            src="/external/line22276-3zg6.svg"
            alt="Line22276"
            className="teacher2-line2"
          />
          <img
            src="/external/line32277-brsn.svg"
            alt="Line32277"
            className="teacher2-line3"
          />
          <span className="teacher2-text18">
            <span>Adresă de e-mail</span>
          </span>
          <img
            src="/external/line12279-t0vt.svg"
            alt="Line12279"
            className="teacher2-line1"
          />
          <span className="teacher2-text20">
            <span>Nume</span>
          </span>
          <span className="teacher2-text22">
            <span>Descarcă descriere</span>
          </span>
        </div>
        <div className="teacher2-top-bar">
          <img
            src="/external/rectangle32283-749-200h.png"
            alt="Rectangle32283"
            className="teacher2-rectangle3"
          />
          <img
            src="/external/logout12284-q8fb-200h.png"
            alt="logout12284"
            className="teacher2-logout1"
          />
          <span className="teacher2-text24">
            <span>Nume Profesor</span>
          </span>
          <span className="teacher2-text26">
            <Button  
          style={{ color: '#115597', cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/';
            }}>Log out</Button>
          </span>
        </div>
        <div className="teacher2-menu">
          <span className="teacher2-text28">
            <span>Cereri</span>
          </span>
          <span className="teacher2-text30">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/teacher4';
            }}>Conversații</Button>
          </span>
          <span className="teacher2-text32">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/teacher1';
            }}>Anunțuri</Button>
          </span>
          <span className="teacher2-text34">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/teacher3';
            }}>Note studenți</Button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Teacher2
