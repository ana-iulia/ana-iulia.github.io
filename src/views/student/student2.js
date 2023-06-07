import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './student2.css';

const Student2 = (props) => {
  const fileInputRef = useRef(null);

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);
    // Perform further actions with the selected file
  };

  const [isButtonClicked1, setButtonClicked1] = useState(localStorage.getItem('buttonClicked1') === 'true');
  const [isButtonClicked2, setButtonClicked2] = useState(localStorage.getItem('buttonClicked2') === 'true');
  const [isButtonClicked3, setButtonClicked3] = useState(localStorage.getItem('buttonClicked3') === 'true');

  //when start set on false and then set on true 

  const handleButtonClick1 = () => {
    setButtonClicked1(true);
  };

  const handleButtonClick2 = () => {
    setButtonClicked2(true);
  };

  const handleButtonClick3 = () => {
    setButtonClicked3(true);
  };

  useEffect(() => {
    localStorage.setItem('buttonClicked1', isButtonClicked1);
  }, [isButtonClicked1]);

  useEffect(() => {
    localStorage.setItem('buttonClicked2', isButtonClicked2);
  }, [isButtonClicked2]);

  useEffect(() => {
    localStorage.setItem('buttonClicked3', isButtonClicked3);
  }, [isButtonClicked3]);

  return (
    <div className="student2-container">
      <Helmet>
        <title>Student App</title>
      </Helmet>
      <div className="student2-student2">
        <div className="student2-header">
          <img
            src="/external/ubblogo12409-28qy-200h.png"
            alt="ubblogo12409"
            className="student2-ubblogo1"
          />
          <img
            src="/external/psihologo12410-oe9-200h.png"
            alt="psihologo12410"
            className="student2-psihologo1"
          />
        </div>
        <div className="student2-top-bar">
          <img
            src="/external/rectangle32412-nstp-200h.png"
            alt="Rectangle32412"
            className="student2-rectangle3"
          />
          <img
            src="/external/logout12413-gni-200h.png"
            alt="logout12413"
            className="student2-logout1"
          />
          <span className="student2-text">
            <span>Nume Student</span>
          </span>
          <span className="student2-text02">
            <Button
              style={{ color: '#115597', cursor: 'pointer'}}
              onClick={() => {
                window.location.href = '/';
              }}
              
            >
              Log out
            </Button>
          </span>
        </div>
        <div className="student2-coordinators-list">
          <div className="student2-coordinator-card">
            {/* <div className="student2-buttonbutton">
              <span className="student2-text04">
                <span>Aplică</span>
              </span>
            </div> */}
          {isButtonClicked1 ? (
            <div className="student2-buttonbutton2">
              <span className="student2-text20">
                <span>În așteptare</span>
              </span>
            </div>
          ) : (
            <div className="student2-buttonbutton1" onClick={handleButtonClick1}>
              <span className="student2-text12">
                <span>Aplică</span>
              </span>
            </div>
          )}


            <span className="student2-text06">
              <span>1/12</span>
            </span>
            <span className="student2-text08">
              <span>nume.profesor@ubbcluj.ro</span>
            </span>
            <span className="student2-text10">
              <span>Nume profesor</span>
            </span>
            {/* <img
              src="/external/uploadbutton2425-c09a-200w.png"
              alt="uploadbutton2425"
              className="student2-uploadbutton"
            /> */}

              <div className="student2-upload-button-container">
              <label htmlFor="file-upload" className="upload-button">
                <img
                  src="/external/uploadbutton2441-lct-200w.png"
                  alt="uploadbutton2441"
                  className="student2-uploadbutton2"
                  onClick={handleImageUpload}
                  style={{ cursor: 'pointer' }}
                />
              </label>
              <input
                id="file-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                ref={fileInputRef}
              />
            </div>
          </div>
          <div className="student2-coordinator-card1">
          {isButtonClicked2 ? (
            <div className="student2-buttonbutton2">
              <span className="student2-text20">
                <span>În așteptare</span>
              </span>
            </div>
          ) : (
            <div className="student2-buttonbutton1" onClick={handleButtonClick2}>
              <span className="student2-text12">
                <span>Aplică</span>
              </span>
            </div>
          )}
            {/* <div className="student2-buttonbutton1">
              <span className="student2-text12">
              <span>{isButtonClicked ? 'Button Clicked' : 'Aplică'}</span>
              </span>
            </div> */}
            <span className="student2-text14">
              <span>1/12</span>
            </span>
            <span className="student2-text16">
              <span>nume.profesor@ubbcluj.ro</span>
            </span>
            <span className="student2-text18">
              <span>Nume profesor</span>
            </span>
            {/* <img
              src="/external/uploadbutton2433-4kz5-200w.png"
              alt="uploadbutton2433"
              className="student2-uploadbutton1"
            /> */}

              <div className="student2-upload-button-container">
              <label htmlFor="file-upload" className="upload-button">
                <img
                  src="/external/uploadbutton2441-lct-200w.png"
                  alt="uploadbutton2441"
                  className="student2-uploadbutton2"
                  onClick={handleImageUpload}
                  style={{ cursor: 'pointer' }}
                />
              </label>
              <input
                id="file-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                ref={fileInputRef}
              />
            </div>

          </div>
          <div className="student2-coordinator-card2">
          {isButtonClicked3 ? (
            <div className="student2-buttonbutton2">
              <span className="student2-text20">
                <span>În așteptare</span>
              </span>
            </div>
          ) : (
            <div className="student2-buttonbutton1" onClick={handleButtonClick3}>
              <span className="student2-text12">
                <span>Aplică</span>
              </span>
            </div>
          )}
            {/* <div className="student2-buttonbutton2">
              <span className="student2-text20">
                <span>În așteptare</span>
              </span>
            </div> */}
            <span className="student2-text22">
              <span>1/12</span>
            </span>
            <span className="student2-text24">
              <span>nume.profesor@ubbcluj.ro</span>
            </span>
            <span className="student2-text26">
              <span>Nume profesor</span>
            </span>
            <div className="student2-upload-button-container">
              <label htmlFor="file-upload" className="upload-button">
                <img
                  src="/external/uploadbutton2441-lct-200w.png"
                  alt="uploadbutton2441"
                  className="student2-uploadbutton2"
                  onClick={handleImageUpload}
                  style={{ cursor: 'pointer' }}
                />
              </label>
              <input
                id="file-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                ref={fileInputRef}
              />
            </div>
          </div>
          <img
            src="/external/rectangle52442-v40j-200h.png"
            alt="Rectangle52442"
            className="student2-rectangle5"
          />
          <span className="student2-text28">
            <span>Locuri disponibile</span>
          </span>
          <span className="student2-text30">
            <span>Încarcă descriere</span>
          </span>
          <img
            src="/external/line22445-7k5p.svg"
            alt="Line22445"
            className="student2-line2"
          />
          <span className="student2-text32">
            <span>Adresă de e-mail</span>
          </span>
          <img
            src="/external/line12447-fzsc.svg"
            alt="Line12447"
            className="student2-line1"
          />
          <img
            src="/external/line32448-4c7p.svg"
            alt="Line32448"
            className="student2-line3"
          />
          <img
            src="/external/line42449-yi95.svg"
            alt="Line42449"
            className="student2-line4"
          />
          <span className="student2-text34">
            <span>Nume</span>
          </span>
        </div>
        <div className="student2-sidebar-menu">
          <span className="student2-text36">
            <span>Coordonatori</span>
          </span>
          <span className="student2-text38">
            <Button
              style={{ color: 'grey',cursor: 'pointer'  }}
              onClick={() => {
                window.location.href = '/student4';
              }}
            >
              Conversații
            </Button>
          </span>
          <span className="student2-text40">
            <Button
              style={{ color: 'grey',cursor: 'pointer'  }}
              onClick={() => {
                window.location.href = '/student3';
              }}
            >
              Note
            </Button>
          </span>
          <span className="student2-text42">
            <Button
              style={{ color: 'grey',cursor: 'pointer' }}
              onClick={() => {
                window.location.href = '/student1';
              }}
            >
              Anunțuri
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Student2;
