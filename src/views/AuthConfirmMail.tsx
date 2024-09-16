import React from 'react';
import login01 from '../assets/images/login/01.png';
import mail from '../assets/images/login/mail.png';

const AuthConfirmMail: React.FC = () => {
   return (
<div>
      <div className="wrapper">
      <section className="login-content">
         <div className="container">
            <div className="row align-items-center justify-content-center height-self-center">
               <div className="col-lg-8">
                  <div className="card auth-card">
                     <div className="card-body p-0">
                        <div className="d-flex align-items-center auth-content">
                           <div className="col-lg-6 bg-primary content-left">
                              <div className="p-3">
                                 <img src={mail} className="img-fluid" width="80" alt="" />
                                 <h2 className="mt-3 mb-0 text-white">Success !</h2>
                                 <p className="cnf-mail mb-1">A email has been send to youremail@domain.com. Please check for an
                                    email from company and click
                                    on the included link to reset your password.</p>
                                 <div className="d-inline-block w-100">
                                    <a href="../backend/index.html" className="btn btn-white mt-3">Back to Home</a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6 content-right">
                              <img src={login01} className="img-fluid image-right" alt="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      </div>
</div>
);
};

export default AuthConfirmMail;