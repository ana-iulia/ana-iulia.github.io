import React from 'react'

import { Helmet } from 'react-helmet'
import { Button} from 'react-bootstrap';

import './student3.css'

const Student3 = (props) => {
  return (
    <div className="student3-container">
      <Helmet>
        <title>Student App</title>
      </Helmet>
      <div className="student3-student3">
        <div className="student3-sidebar-menu">
         
          <span className="student3-text">
          <Button  
          style={{ color: 'grey',cursor: 'pointer'  }}
          onClick={() => {
             window.location.href = '/student2';
            }}>Coordonatori</Button>
          </span>

          <span className="student3-text02">
          <Button  
          style={{ color: 'grey',cursor: 'pointer'  }}
          onClick={() => {
             window.location.href = '/student4';
            }}>Conversații</Button>
          </span>

          <span className="student3-text04">
            <span>Note</span>
          </span>
         

          <span className="student3-text06">
          <Button  
          style={{ color: 'grey',cursor: 'pointer'  }}
          onClick={() => {
             window.location.href = '/student1';
            }}>Anunțuri</Button>
          </span>

        </div>
        <div className="student3-grade-card">
          <span className="student3-text08">
            <span>sesiune normală</span>
          </span>
          <span className="student3-text10">
            <span>sesiune restanță</span>
          </span>
          <span className="student3-text12">
            <span>Licență</span>
          </span>
          <div className="student3-group10">
            <img
              src="/external/rectangle112368-602-200h.png"
              alt="Rectangle112368"
              className="student3-rectangle11"
            />
            <img
              src="/external/rectangle122369-5vso-200h.png"
              alt="Rectangle122369"
              className="student3-rectangle12"
            />
            <span className="student3-text14">
              <span>Notă</span>
            </span>
          </div>
          <div className="student3-group11">
            <img
              src="/external/rectangle112375-li9b-200h.png"
              alt="Rectangle112375"
              className="student3-rectangle111"
            />
            <img
              src="/external/rectangle122376-v68s-200h.png"
              alt="Rectangle122376"
              className="student3-rectangle121"
            />
            <span className="student3-text16">
              <span>Notă</span>
            </span>
          </div>
        </div>
        <div className="student3-grade-card1">
          <span className="student3-text18">
            <span>sesiune normală</span>
          </span>
          <span className="student3-text20">
            <span>sesiune restanță</span>
          </span>
          <span className="student3-text22">
            <span>Practică</span>
          </span>
          <div className="student3-group101">
            <img
              src="/external/rectangle112387-5s1f-200h.png"
              alt="Rectangle112387"
              className="student3-rectangle112"
            />
            <img
              src="/external/rectangle122388-egsa-200h.png"
              alt="Rectangle122388"
              className="student3-rectangle122"
            />
            <span className="student3-text24">
              <span>Notă</span>
            </span>
          </div>
          <div className="student3-group111">
            <img
              src="/external/rectangle112394-5f8k-200h.png"
              alt="Rectangle112394"
              className="student3-rectangle113"
            />
            <img
              src="/external/rectangle122395-ydt-200h.png"
              alt="Rectangle122395"
              className="student3-rectangle123"
            />
            <span className="student3-text26">
              <span>Notă</span>
            </span>
          </div>
        </div>
        <div className="student3-header">
          <img
            src="/external/ubblogo12399-9zc-200h.png"
            alt="ubblogo12399"
            className="student3-ubblogo1"
          />
          <img
            src="/external/psihologo12400-un1-200h.png"
            alt="psihologo12400"
            className="student3-psihologo1"
          />
        </div>
        <div className="student3-top-bar">
          <img
            src="/external/rectangle32402-hkdm-200h.png"
            alt="Rectangle32402"
            className="student3-rectangle3"
          />
          <img
            src="/external/logout12403-iuh7-200h.png"
            alt="logout12403"
            className="student3-logout1"
          />
          <span className="student3-text28">
            <span>Nume Student</span>
          </span>
          <span className="student3-text30">
          <Button  
          style={{ color: '#115597', cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/';
            }}>Log out</Button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Student3
