import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './login.css';
import '../App.css';

const Login = (props) => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.includes('stud')) {
      window.location.href = '/student1';
    } else if (email.includes('admin')) {
      window.location.href = '/admin1';
    } else {
      window.location.href = '/teacher1';
    }
  };

  return (
    <div className="login-container">
      <div className="login-login">
        <div className="login-group4">
          <div className="login-login-form">
            <div>
              <form onSubmit={handleSubmit}>
                <p>
                  <input type="email" name="email" value={email} onChange={handleInputChange} required placeholder="Adresă de e-mail" />
                </p>
                <br />
                <br />
                <p>
                  <input type="password" name="password" required placeholder="Parolă" />
                </p>
                <p>
                  <div className="login-buttonbutton">
                    <button id="sub_btn" type="submit" style={{ cursor: 'pointer' }}>Autentificare</button>
                  </div>
                </p>
              </form>
            </div>
            <img
              src="/external/padlock12501-ic1-200w.png"
              alt="padlock12501"
              className="login-padlock1"              
            />
          </div>
        </div>
        <div className="login-header">
          <img
            src="/external/ubblogo12504-1li-200h.png"
            alt="ubblogo12504"
            className="login-ubblogo1"
          />
          <img
            src="/external/psihologo12505-qbu4-200h.png"
            alt="psihologo12505"
            className="login-psihologo1"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
