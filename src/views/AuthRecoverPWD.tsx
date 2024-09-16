import React from 'react';
import login01 from '../assets/images/login/01.png';

const AuthRecoverPWD: React.FC = () => {
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
                                 <h2 className="mb-2 text-white">Reset Password</h2>
                                 <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
                                 <form>
                                    <div className="row">
                                       <div className="col-lg-12">
                                          <div className="floating-label form-group">
                                             <input className="floating-input form-control" type="email" placeholder=" " />
                                             <label>Email</label>
                                          </div>
                                       </div>
                                    </div>
                                    <button type="submit" className="btn btn-white">Reset</button>
                                 </form>
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

export default AuthRecoverPWD;