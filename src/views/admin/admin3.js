import React from 'react'
import { Button} from 'react-bootstrap';
import { Helmet } from 'react-helmet'

import './admin3.css'

const handleClick = () => {
  window.open('https://firebasestorage.googleapis.com/v0/b/localinfopoint.appspot.com/o/images%2FNote%20Licen%C8%9B%C4%83.pdf?alt=media&token=fcf91eaf-f460-4099-98e4-401d2617c6f8&_gl=1*1su00hf*_ga*NDE3MTY1MzQuMTY1NjUxNjkyOA..*_ga_CW55HF8NVT*MTY4NjA3NTg5My4zLjEuMTY4NjA3NTkzNy4wLjAuMA..', '_blank');
};

const Admin3 = (props) => {
  return (
    <div className="admin3-container">
      <Helmet>
        <title>Admin App</title>
      </Helmet>
      <div className="admin3-admin3">
        <div className="admin3-group1">
          <span className="admin3-text">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/admin1';
            }}>Coordonarea lucrării</Button>
          </span>
          <span className="admin3-text02">
            <span>Descărcare documente</span>
          </span>
          <span className="admin3-text04">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/admin2';
            }}>Stagiu practică</Button>
          </span>
        </div>
        <div className="admin3-header">
          <img
            src="/external/ubblogo1210-oxyg-200h.png"
            alt="ubblogo1210"
            className="admin3-ubblogo1"
          />
          <img
            src="/external/psihologo1211-dkl-200h.png"
            alt="psihologo1211"
            className="admin3-psihologo1"
          />
        </div>
        <div className="admin3-top-bar">
          <img
            src="/external/rectangle3213-i4k-200h.png"
            alt="Rectangle3213"
            className="admin3-rectangle3"
          />
          <img
            src="/external/logout1214-8cq2-200h.png"
            alt="logout1214"
            className="admin3-logout1"
          />
          <span className="admin3-text06">
            <span>Nume Admin</span>
          </span>

          <span className="admin3-text08">
            <Button  
          style={{ color: '#115597', cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/';
            }}>Log out</Button>
          </span>

        </div>
        <div className="admin3-section"></div>
        <div className="admin3-student-card">
          <div className="admin3-button">
            <span className="admin3-text10">
          <Button  
          style={{ color: 'white',cursor: 'pointer' }}
          onClick={handleClick}>Descarcă note</Button>
          </span>
          </div>
          <div className="admin3-button1">
            <span className="admin3-text12">
              <span>Descarcă documente</span>
            </span>
          </div>
          <span className="admin3-text14">
            <span>02/04/2023</span>
          </span>
          <span className="admin3-text16">
            <span>Nume student</span>
          </span>
        </div>
        <div className="admin3-student-card1">
          <div className="admin3-button2">
            <span className="admin3-text18">
          <Button  
          style={{ color: 'white',cursor: 'pointer' }}
          onClick={handleClick}>Descarcă note</Button>
          </span>
          </div>
          <div className="admin3-button3">
            <span className="admin3-text20">
              <span>Descarcă documente</span>
            </span>
          </div>
          <span className="admin3-text22">
            <span>02/04/2023</span>
          </span>
          <span className="admin3-text24">
            <span>Nume student</span>
          </span>
        </div>
        <div className="admin3-student-card2">
          <div className="admin3-button4">
          <span className="admin3-text26">
          <Button  
          style={{ color: 'white',cursor: 'pointer' }}
          onClick={handleClick}>Descarcă note</Button>
          </span>
          </div>
          <div className="admin3-button5">
            <span className="admin3-text28">
              <span>Descarcă documente</span>
            </span>
          </div>
          <span className="admin3-text30">
            <span>02/04/2023</span>
          </span>
          <span className="admin3-text32">
            <span>Nume student</span>
          </span>
        </div>
        <img
          src="/external/rectangle9268-2xmb-200h.png"
          alt="Rectangle9268"
          className="admin3-rectangle9"
        />
        <span className="admin3-text34">
          <span>Căutare student...</span>
        </span>
      </div>
    </div>
  )
}

export default Admin3
