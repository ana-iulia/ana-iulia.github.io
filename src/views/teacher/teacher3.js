import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import './teacher3.css';

const Teacher3 = (props) => {

  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleAdaugaNota1 = () => {
    const newNota1 = inputValue1;
    console.log('Nota:', newNota1);
  };

  const handleAdaugaNota2 = () => {
    const newNota2 = inputValue2;
    console.log('Nota:', newNota2);
  };

  const handleAdaugaNota3 = () => {
    const newNota3 = inputValue3;
    console.log('Nota:', newNota3);
  };

  useEffect(() => {
    const storedValue1 = localStorage.getItem('inputNota1');
    if (storedValue1) {
      setInputValue1(storedValue1);
    }
  }, []);

  useEffect(() => {
    const storedValue2 = localStorage.getItem('inputNota2');
    if (storedValue2) {
      setInputValue2(storedValue2);
    }
  }, []);

  useEffect(() => {
    const storedValue3 = localStorage.getItem('inputNota3');
    if (storedValue3) {
      setInputValue3(storedValue3);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('inputNota1', inputValue1);
  }, [inputValue1]);

  useEffect(() => {
    localStorage.setItem('inputNota2', inputValue2);
  }, [inputValue2]);

  useEffect(() => {
    localStorage.setItem('inputNota3', inputValue3);
  }, [inputValue3]);


  return (
    <div className="teacher3-container">
      <Helmet>
        <title>Teacher App</title>
      </Helmet>
      <div className="teacher3-teacher3">
        <div className="teacher3-menu">
          <span className="teacher3-text">
            <Button
              style={{ color: 'grey', cursor: 'pointer' }}
              onClick={() => {
                window.location.href = '/teacher2';
              }}
            >
              Cereri
            </Button>
          </span>
          <span className="teacher3-text02">
            <Button
              style={{ color: 'grey', cursor: 'pointer' }}
              onClick={() => {
                window.location.href = '/teacher4';
              }}
            >
              Conversații
            </Button>
          </span>
          <span className="teacher3-text04">
            <Button
              style={{ color: 'grey', cursor: 'pointer' }}
              onClick={() => {
                window.location.href = '/teacher1';
              }}
            >
              Anunțuri
            </Button>
          </span>
          <span className="teacher3-text06">
            <span>Note studenți</span>
          </span>
        </div>
        <div className="teacher3-header">
          <img
            src="/external/ubblogo12193-xmxh-200h.png"
            alt="ubblogo12193"
            className="teacher3-ubblogo1"
          />
          <img
            src="/external/psihologo12194-cyz-200h.png"
            alt="psihologo12194"
            className="teacher3-psihologo1"
          />
        </div>
        <div className="teacher3-top-bar">
          <img
            src="/external/rectangle32196-szfg-200h.png"
            alt="Rectangle32196"
            className="teacher3-rectangle3"
          />
          <img
            src="/external/logout12197-rr9b-200h.png"
            alt="logout12197"
            className="teacher3-logout1"
          />
          <span className="teacher3-text08">
            <span>Nume Admin</span>
          </span>
          <span className="teacher3-text10">
            <Button
              style={{ color: '#115597', cursor: 'pointer' }}
              onClick={() => {
                window.location.href = '/';
              }}
            >
              Log out
            </Button>
          </span>
        </div>
        <div className="teacher3-student-card">
          <img
            src="/external/rectangle112202-oql-200h.png"
            alt="Rectangle112202"
            className="teacher3-rectangle11"
          />
          <span className="teacher3-text12">
            <span>practică</span>
          </span>
          <span className="teacher3-text14">
            <span>Nume student</span>
          </span>
          <span className="teacher3-text16">
            <span>Notă</span>
          </span>
          <div className="teacher3-group10">
            {/* <div className="teacher3-button">
              <span className="teacher3-text18">
                <span>Acordă notă</span>
              </span>
            </div> */}
            <Button className="teacher3-button" onClick={handleAdaugaNota3} style={{cursor: 'pointer' }}>
            <span className="teacher3-text18">
              <span>Acordă notă</span>
            </span>
          </Button>
            <span className="teacher3-text20">
              <span>practică</span>
            </span>
            <span className="teacher3-text22">
              <span>Nume student</span>
            </span>
            <img
              src="/external/rectangle112215-4y9i-200h.png"
              alt="Rectangle112215"
              className="teacher3-rectangle111"
            />
            <img
              src="/external/rectangle122216-evdi-200h.png"
              alt="Rectangle122216"
              className="teacher3-rectangle12"
            />
            <span className="teacher3-text24">
              <span>Notă</span>
            </span>
            <input
            type="text"
            className="teacher3-text1043"
            value={inputValue3}
            onChange={(e) => setInputValue3(e.target.value)}
          />
          </div>Acordă notă
        </div>
        <div className="teacher3-group11">
          <img
            src="/external/rectangle122220-4r4b-200h.png"
            alt="Rectangle122220"
            className="teacher3-rectangle121"
          />
          {/* <div className="teacher3-button1">
            <span className="teacher3-text26">
              <span>Acordă notă</span>
            </span>
          </div> */}
          <Button className="teacher3-button1" onClick={handleAdaugaNota2} style={{cursor: 'pointer' }}>
            <span className="teacher3-text26">
              <span>Acordă notă</span>
            </span>
          </Button>
          <span className="teacher3-text28">
            <span>licență</span>
          </span>
          <span className="teacher3-text30">
            <span>Nume student</span>
          </span>
          <img
            src="/external/rectangle112226-601o-200h.png"
            alt="Rectangle112226"
            className="teacher3-rectangle112"
          />
          <span className="teacher3-text32">
            <span>Notă</span>
          </span>
          <input
            type="text"
            className="teacher3-text1042"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
          />
        </div>
        <div className="teacher3-group12">
          <img
            src="/external/rectangle122230-teyh-200h.png"
            alt="Rectangle122230"
            className="teacher3-rectangle122"
          />
          <Button className="teacher3-button2" onClick={handleAdaugaNota1} style={{cursor: 'pointer' }}>
            <span className="teacher3-text34">
              <span>Acordă notă</span>
            </span>
          </Button>
          <span className="teacher3-text36">
            <span>practică</span>
          </span>
          <span className="teacher3-text38">
            <span>Nume student</span>
          </span>
          <img
            src="/external/rectangle112236-a9j6-200h.png"
            alt="Rectangle112236"
            className="teacher3-rectangle113"
          />
          <span className="teacher3-text40">
            <span>Notă</span>
          </span>
          <input
            type="text"
            className="teacher3-text42"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
          />
        </div>
        <div className="teacher3-group7">
          <span className="teacher3-text43">
            <span>practică</span>
          </span>
        </div>
        <div className="teacher3-group8">
          <span className="teacher3-text45">
            <span>licență</span>
          </span>
        </div>
        {/* <div className="teacher3-group9"> */}
          {/* <span className="teacher3-text47">
            <span>Nume student</span>
          </span> */}
          {/* <input
            type="text"
            className="teacher3-text1042"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
          /> */}
        {/* </div> */}
          
      </div>
    </div>
  );
};

export default Teacher3;
