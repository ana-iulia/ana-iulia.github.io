import React from 'react'
import { Button} from 'react-bootstrap';
import { Helmet } from 'react-helmet'

import './student1.css'

const Student1 = (props) => {
  return (
    <div className="student1-container">
      <Helmet>
        <title>Student App</title>
      </Helmet>
      <div className="student1-student1">
        <div className="student1-header">
          <img
            src="/external/ubblogo12460-3ssn-200h.png"
            alt="ubblogo12460"
            className="student1-ubblogo1"
          />
          <img
            src="/external/psihologo12461-2upo-200h.png"
            alt="psihologo12461"
            className="student1-psihologo1"
          />
        </div>
        <div className="student1-top-bar">
          <img
            src="/external/rectangle32463-phff-200h.png"
            alt="Rectangle32463"
            className="student1-rectangle3"
          />
          <img
            src="/external/logout1button2464-6uul-200h.png"
            alt="logout1button2464"
            className="student1-logout1button"
          />
          <span className="student1-text">
            <span>Nume Student</span>
          </span>
          <span className="student1-text02">
            <Button  
          style={{ color: '#115597', cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/';
            }}>Log out</Button>
          </span>
        </div>
        <div className="student1-article-card">
          <span className="student1-text04">
            <span>09/04/2023</span>
          </span>
          <span className="student1-text06">
            <span>
              Short description of the article which should display up to 100
              words
            </span>
          </span>
          <span className="student1-text08">
            <span>Title</span>
          </span>
        </div>
        <div className="student1-article-card1">
          <span className="student1-text10">
            <span>09/04/2023</span>
          </span>
          <span className="student1-text12">
            <span>
              Short description of the article which should display up to 100
              words
            </span>
          </span>
          <span className="student1-text14">
            <span>Title</span>
          </span>
        </div>
        <div className="student1-article-card2">
          <span className="student1-text16">
            <span>09/04/2023</span>
          </span>
          <span className="student1-text18">
            <span>
              Short description of the article which should display up to 100
              words
            </span>
          </span>
          <span className="student1-text20">
            <span>Title</span>
          </span>
        </div>
        <div className="student1-sidebar-menu">
      
          <span className="student1-text22">
          <Button  
          style={{ color: 'grey', cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/student2';
            }}>Coordonatori</Button>
          </span>

          <span className="student1-text24">
          <Button  
          style={{ color: 'grey', cursor: 'pointer'  }}
          onClick={() => {
             window.location.href = '/student4';
            }}>Conversații</Button>
          </span>
        
          <span className="student1-text26">
          <Button  
          style={{ color: 'grey',cursor: 'pointer'  }}
          onClick={() => {
             window.location.href = '/student3';
            }}>Note</Button>
          </span>


          <span className="student1-text28">
          <span>Anunțuri</span>
          </span>

        </div>
      </div>
    </div>
  )
}

export default Student1
