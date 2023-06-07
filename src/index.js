import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Student4 from './views/student/student4'
import Student3 from './views/student/student3'
import Student2 from './views/student/student2'
import Student1 from './views/student/student1'
import Teacher1 from './views/teacher/teacher1'
import Teacher2 from './views/teacher/teacher2'
import Teacher3 from './views/teacher/teacher3'
import Teacher4 from './views/teacher/teacher4'
import Admin1 from './views/admin/admin1'
import Admin2 from './views/admin/admin2'
import Admin3 from './views/admin/admin3'
import Login from './views/login/login'

const App = () => {
  return (
    // <BrowserRouter>
      // <Sidebar>
        <Router>
          <div>
        <Route component={Login} exact path="/" />
        <Route component={Student3} exact path="/student3" />
        <Route component={Student2} exact path="/student2" />
        <Route component={Student1} exact path="/student1" />
        <Route component={Student4} exact path="/student4" />
        <Route component={Teacher1} exact path="/teacher1" />
        <Route component={Teacher2} exact path="/teacher2" />
        <Route component={Teacher3} exact path="/teacher3" />
        <Route component={Teacher4} exact path="/teacher4" />
        <Route component={Admin1} exact path="/admin1" />
        <Route component={Admin2} exact path="/admin2" />
        <Route component={Admin3} exact path="/admin3" />
          </div>
        </Router>
      // </Sidebar>
    // </BrowserRouter>
  

    //     <div className="content-div">  
    // <Router>
    //   <div>
    //     <Route component={Login} exact path="/" />
    //     <Route component={Student3} exact path="/student3" />
    //     <Route component={Student2} exact path="/student2" />
    //     <Route component={Student1} exact path="/student1" />
    //     <Route component={Student4} exact path="/student4" />
    //   </div>
    // </Router>
    // </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
