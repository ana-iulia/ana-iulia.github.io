import React from 'react'
import { Button} from 'react-bootstrap';
import { Helmet } from 'react-helmet'

import './admin1.css'

const Admin1 = (props) => {
  return (
    <div className="admin1-container">
      <Helmet>
        <title>Admin App</title>
      </Helmet>
      <div className="admin1-admin1">
        <div className="admin1-group1">
          <span className="admin1-text">
            <span>Coordonarea lucrării</span>
          </span>
          <span className="admin1-text002">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/admin2';
            }}>Stagiu practică</Button>
          </span>
        </div>
        <div className="admin1-header">
          <img
            src="/external/ubblogo12120-vg0l-200h.png"
            alt="ubblogo12120"
            className="admin1-ubblogo1"
          />
          <img
            src="/external/psihologo12121-dm4-200h.png"
            alt="psihologo12121"
            className="admin1-psihologo1"
          />
        </div>
        <div className="admin1-top-bar">
          <img
            src="/external/rectangle32123-2a2q-200h.png"
            alt="Rectangle32123"
            className="admin1-rectangle3"
          />
          <img
            src="/external/logout12124-ogxb-200h.png"
            alt="logout12124"
            className="admin1-logout1"
          />
          <span className="admin1-text004">
            <span>Nume Admin</span>
          </span>
          <span className="admin1-text006">
            <Button  
          style={{ color: '#115597', cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/';
            }}>Log out</Button>
          </span>
        </div>
        <div className="admin1-section">
          <div className="admin1-group5">
            <div className="admin1-button">
              <span className="admin1-text008">
                <span>Actualizează</span>
              </span>
            </div>
          </div>
          <span className="admin1-text010">
            <span>Adăugare candidat</span>
          </span>
          <span className="admin1-text012">
            <span>
              <span>
                Informatii legate de licenta Informatii legate de licenta
                Informatii legate
              </span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
            </span>
          </span>
        </div>
        <div className="admin1-section1">
          <div className="admin1-group51">
            <div className="admin1-button1">
              <span className="admin1-text037">
                <span>Actualizează</span>
              </span>
            </div>
          </div>
          <span className="admin1-text039">
            <span>Documente necesare</span>
          </span>
          <span className="admin1-text041">
            <span>
              <span>
                Informatii legate de licenta Informatii legate de licenta
                Informatii legate
              </span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
            </span>
          </span>
        </div>
        <div className="admin1-section2">
          <div className="admin1-group52">
            <div className="admin1-button2">
              <span className="admin1-text066">
                <span>Actualizează</span>
              </span>
            </div>
          </div>
          <span className="admin1-text068">
            <span>Criterii licență</span>
          </span>
          <span className="admin1-text070">
            <span>
              <span>
                Informatii legate de licenta Informatii legate de licenta
                Informatii legate
              </span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
              <br></br>
              <span>Informatii legate de licenta</span>
            </span>
          </span>
        </div>
        <div className="admin1-section3">
          <div className="admin1-group53">
            <div className="admin1-button3">
              <span className="admin1-text095">
                <span>Actualizează</span>
              </span>
            </div>
          </div>
          <span className="admin1-text097">
            <span>Informații licență</span>
          </span>
        </div>
        <span className="admin1-text099">
          <Button  
          style={{ color: 'grey',cursor: 'pointer' }}
          onClick={() => {
             window.location.href = '/admin3';
            }}>Descărcare documente</Button>
          </span>
        <span className="admin1-text101">
          <span>
            <span>
              Informatii legate de licenta Informatii legate de licenta
              Informatii legate
            </span>
            <br></br>
            <span>Informatii legate de licenta</span>
            <br></br>
            <span>Informatii legate de licenta</span>
            <br></br>
            <span>Informatii legate de licenta</span>
            <br></br>
            <span>Informatii legate de licenta</span>
            <br></br>
            <span>Informatii legate de licenta</span>
            <br></br>
            <span>Informatii legate de licenta</span>
            <br></br>
            <span>Informatii legate de licenta</span>
            <br></br>
            <span>Informatii legate de licenta</span>
            <br></br>
            <span>Informatii legate de licenta</span>
            <br></br>
            <span>Informatii legate de licenta</span>
            <br></br>
            <span>Informatii legate de licenta</span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default Admin1
