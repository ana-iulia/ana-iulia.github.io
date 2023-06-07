import React from 'react'
import { Button} from 'react-bootstrap';
import { Helmet } from 'react-helmet'

import './teacher4.css'

const Teacher4 = (props) => {
  return (
    <div className="teacher4-container">
      <Helmet>
        <title>Teacher App</title>
      </Helmet>
      <div className="teacher4-teacher4">
        <div className="teacher4-header">
          <img
            src="/external/ubblogo12159-mkuh-200h.png"
            alt="ubblogo12159"
            className="teacher4-ubblogo1"
          />
          <img
            src="/external/psihologo12160-5pjs-200h.png"
            alt="psihologo12160"
            className="teacher4-psihologo1"
          />
        </div>
        <div className="teacher4-top-bar">
          <img
            src="/external/rectangle32162-ja7r-200h.png"
            alt="Rectangle32162"
            className="teacher4-rectangle3"
          />
          <img
            src="/external/logout12163-weg-200h.png"
            alt="logout12163"
            className="teacher4-logout1"
          />
          <span className="teacher4-text">
            <span>Nume Profesor</span>
          </span>
          <span className="teacher4-text02">
            <Button  
          style={{ color: '#115597', cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/';
            }}>Log out</Button>
          </span>
        </div>
        <div className="teacher4-conversation-card">
          <span className="teacher4-text04">
            <span>02/04/2023</span>
          </span>
          <span className="teacher4-text06">
            <span>Nume Student: Ultimul mesaj al studentului</span>
          </span>
          <span className="teacher4-text08">
            <span>Nume Student</span>
          </span>
          <img
            src="/external/ellipse12171-d6pm-200h.png"
            alt="Ellipse12171"
            className="teacher4-ellipse1"
          />
        </div>
        <div className="teacher4-conversation-card1">
          <span className="teacher4-text10">
            <span>09/04/2023</span>
          </span>
          <span className="teacher4-text12">
            <span>Tu: Ultimul mesaj</span>
          </span>
          <span className="teacher4-text14">
            <span>Nume Student</span>
          </span>
          <img
            src="/external/ellipse12177-5wb-200h.png"
            alt="Ellipse12177"
            className="teacher4-ellipse11"
          />
        </div>
        <div className="teacher4-menu">
          <span className="teacher4-text16">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/teacher2';
            }}>Cereri</Button>
          </span>
          <span className="teacher4-text18">
            <span>Conversații</span>
          </span>
          <span className="teacher4-text20">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/teacher1';
            }}>Anunțuri</Button>
          </span>
          <span className="teacher4-text22">
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

export default Teacher4
