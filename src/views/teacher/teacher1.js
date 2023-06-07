import React from 'react'
import { Button} from 'react-bootstrap';
import { Helmet } from 'react-helmet'

import './teacher1.css'

const Teacher1 = (props) => {
  return (
    <div className="teacher1-container">
      <Helmet>
        <title>Teacher App</title>
      </Helmet>
      <div className="teacher1-teacher1">
        <div className="teacher1-header">
          <img
            src="/external/ubblogo12296-dlvb-200h.png"
            alt="ubblogo12296"
            className="teacher1-ubblogo1"
          />
          <img
            src="/external/psihologo12297-hto-200h.png"
            alt="psihologo12297"
            className="teacher1-psihologo1"
          />
        </div>
        <div className="teacher1-top-bar">
          <img
            src="/external/rectangle32299-5io-200h.png"
            alt="Rectangle32299"
            className="teacher1-rectangle3"
          />
          <img
            src="/external/logout12300-jfld-200h.png"
            alt="logout12300"
            className="teacher1-logout1"
          />
          <span className="teacher1-text">
            <span>Nume Profesor</span>
          </span>
          <span className="teacher1-text02">
            <Button  
          style={{ color: '#115597', cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/';
            }}>Log out</Button>
          </span>
        </div>
        <div className="teacher1-article-card">
          <span className="teacher1-text04">
            <span>09/04/2023</span>
          </span>
          <span className="teacher1-text06">
            <span>
              Short description of the article which should display up to 100
              words
            </span>
          </span>
          <span className="teacher1-text08">
            <span>Title</span>
          </span>
        </div>
        <div className="teacher1-article-card1">
          <span className="teacher1-text10">
            <span>09/04/2023</span>
          </span>
          <span className="teacher1-text12">
            <span>
              Short description of the article which should display up to 100
              words
            </span>
          </span>
          <span className="teacher1-text14">
            <span>Title</span>
          </span>
        </div>
        <div className="teacher1-article-card2">
          <span className="teacher1-text16">
            <span>09/04/2023</span>
          </span>
          <span className="teacher1-text18">
            <span>
              Short description of the article which should display up to 100
              words
            </span>
          </span>
          <span className="teacher1-text20">
            <span>Title</span>
          </span>
        </div>
        <div className="teacher1-menu">
          <span className="teacher1-text22">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/teacher2';
            }}>Cereri</Button>
          </span>
          <span className="teacher1-text24">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/teacher4';
            }}>Conversații</Button>
          </span>
          <span className="teacher1-text26">
            <span>Anunțuri</span>
          </span>
          <span className="teacher1-text28">
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

export default Teacher1
