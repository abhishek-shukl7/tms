import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Dashboard from './views/Dashboard';

import Header from './views/Header';
import Sidebar from './views/Sidebar';
import Footer from './views/Footer';

import AuthConfirmMail from './views/AuthConfirmMail';
import AuthRecoverPWD from './views/AuthRecoverPWD';
import AuthSignIN from './views/AuthSignIN';
import AuthSignUP from './views/AuthSignUP';

import ProjectsList from './views/ProjectsList';
import Calender from './views/Calender';
import UserAccountSetting from './views/UserAccountSetting';
import UserAdd from './views/UserAdd';
import UsersList from './views/UsersList';
import PrivacySetting from './views/PrivacySetting';
import EditProfile from './views/EditProfile';
import UserProfile from './views/UserProfile';
import Desk from './views/Desk';
import Employee from './views/Employee';
import Tasks from './views/Tasks';

import Error404 from './views/Error404';
import Test from './components/Test';

import './assets/css/backend.css';
import './assets/vendor/remixicon/fonts/remixicon.css';
import './assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css';

const App: React.FC = () => {

  // const loadJS = (url: string, callback?: () => void) => {
  //   const script = document.createElement('script');
  //   script.src = url;
  //   script.async = true;
  //   if (callback) {
  //     script.onload = callback;
  //   }
  //   document.body.appendChild(script);
  // };
  // useEffect(() => {
  //   loadJS('./assets/js/app.js');
  // });

  return (
    <Router>
      <div className="modal-open">
        <Helmet>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <title>Webkit | Responsive Bootstrap 4 Admin Dashboard Template</title>

            <link rel="shortcut icon" href="../assets/images/favicon.ico" />
            <link rel="stylesheet" href="../assets/css/backend-plugin.min.css"/>
            <link rel="stylesheet" href="../assets/css/backend.css?v=1.0.0"/>
            <link rel="stylesheet" href="../assets/vendor/line-awesome/dist/line-awesome/css/line-awesome.min.css"/>
            <link rel="stylesheet" href="../assets/vendor/remixicon/fonts/remixicon.css"/>
            
            <link rel="stylesheet" href="../assets/vendor/tui-calendar/tui-calendar/dist/tui-calendar.css"/>
            <link rel="stylesheet" href="../assets/vendor/tui-calendar/tui-date-picker/dist/tui-date-picker.css"/>
            <link rel="stylesheet" href="../assets/vendor/tui-calendar/tui-time-picker/dist/tui-time-picker.css"/>  
            <link rel="stylesheet" href="https://unpkg.com/slider-pro-js/build/slider-pro.css"/>
            <script type="text/javascript" src="https://unpkg.com/slider-pro-js/build/slider-pro.js"></script>
        </Helmet>
        <body className="  ">
        {/* <div id="loading">
            <div id="loading-center">
            </div>
        </div> */}
          <div className="wrapper">
            <Sidebar />
            <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/projects" element={<ProjectsList />} />
                  <Route path="/tasks" element={<Tasks />} />
                  <Route path="/employee" element={<Employee />} />
                  <Route path="/desk" element={<Desk />} />
                  <Route path="/calender" element={<Calender />} />
                  <Route path="/user-profile" element={<UserProfile />} />
                  <Route path="/user-profile-edit" element={<EditProfile />} />
                  <Route path="/user-account-setting" element={<UserAccountSetting />} />
                  <Route path="/user-privacy-setting" element={<PrivacySetting />} />
                  <Route path="/user-add" element={<UserAdd />} />
                  <Route path="/user-list" element={<UsersList />} />
                  <Route path="/auth-sign-in" element={<AuthSignIN />} />
                  <Route path="/auth-sign-up" element={<AuthSignUP />} />
                  <Route path="/auth-recoverpw" element={<AuthRecoverPWD />} />
                  <Route path="/auth-confirm-mail" element={<AuthConfirmMail />} />
                  <Route path="/404" element={<Error404 />} />
                  <Route path="/test" element={<Test />} />
                </Routes>
              </main>
            <Footer />
          </div>
        </body>
      </div>
    </Router>
  );
};

export default App;
