import React from 'react'

import { Helmet } from 'react-helmet'
import { Button} from 'react-bootstrap';

import './student4.css'

const Student4 = (props) => {
  return (
    <div className="student4-container">
      <Helmet>
        <title>Student App</title>
      </Helmet>
      <div className="student4-student4">
        <div className="student4-header">
          <img
            src="/external/ubblogo12327-trbe-200h.png"
            alt="ubblogo12327"
            className="student4-ubblogo1"
          />
          <img
            src="/external/psihologo12328-apsl-200h.png"
            alt="psihologo12328"
            className="student4-psihologo1"
          />
        </div>
        <div className="student4-top-bar">
          <img
            src="/external/rectangle32330-3l2v-200h.png"
            alt="Rectangle32330"
            className="student4-rectangle3"
          />
          <img
            src="/external/logout12331-8via-200h.png"
            alt="logout12331"
            className="student4-logout1"
          />
          <span className="student4-text">
            <span>Nume Student</span>
          </span>
          <span className="student4-text02">
          <Button  
          style={{ color: '#115597', cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/';
            }}>Log out</Button>
          </span>
        </div>
        <div className="student4-conversation-cardbutton">
          <span className="student4-text04">
            <span>02/04/2023</span>
          </span>
          <span className="student4-text06">
            <span>Nume Profesor: Ultimul mesaj al profesorului</span>
          </span>
          <span className="student4-text08">
            <span>Nume Profesor - practică</span>
          </span>
          <img
            src="/external/ellipse12339-wxqa-200h.png"
            alt="Ellipse12339"
            className="student4-ellipse1"
          />
        </div>
        <div className="student4-conversation-cardbutton1">
          <span className="student4-text10">
            <span>09/04/2023</span>
          </span>
          <span className="student4-text12">
            <span>Tu: Ultimul mesaj</span>
          </span>
          <span className="student4-text14">
            <span>Nume Profesor - licență</span>
          </span>
          <img
            src="/external/ellipse12345-go8-200h.png"
            alt="Ellipse12345"
            className="student4-ellipse11"
          />
        </div>
        <div className="student4-sidebar-menu">
          
          <span className="student4-text16">
          <Button  
          style={{ color: 'grey',cursor: 'pointer'  }}
          onClick={() => {
             window.location.href = '/student2';
            }}>Coordonatori</Button>
          </span>

          <span className="student4-text18">
            <span>Conversații</span>
          </span>

         
          <span className="student4-text20">
          <Button  
          style={{ color: 'grey',cursor: 'pointer'  }}
          onClick={() => {
             window.location.href = '/student3';
            }}>Note</Button>
          </span>

          <span className="student4-text22">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/student1';
            }}>Anunțuri</Button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Student4
