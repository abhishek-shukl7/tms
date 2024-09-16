
import error from '../assets/images/error/404.png';

const Error404: React.FC = () => {
   return (
      <div>
         <div className="wrapper">
            <div className="container">
               <div className="row no-gutters height-self-center">
                  <div className="col-sm-12 text-center align-self-center">
                     <div className="iq-error position-relative">
                           <img src={error} className="img-fluid iq-error-img" alt="" />
                           <h2 className="mb-0 mt-4">Oops! This Page is Not Found.</h2>
                           <p>The requested page dose not exist.</p>
                           <a className="btn btn-primary d-inline-flex align-items-center mt-3" href="index.html"><i className="ri-home-4-line"></i>Back to Home</a>
                     </div>
                  </div>
               </div>
         </div>
         </div>
      </div>
   );
};

export default Error404;