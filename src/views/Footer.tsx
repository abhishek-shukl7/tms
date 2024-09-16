import React from 'react';
import { Helmet } from 'react-helmet';

const Footer: React.FC = () => {

  return (
    <div>
    <footer className="iq-footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="../backend/privacy-policy.html">Privacy Policy</a></li>
                        <li className="list-inline-item"><a href="../backend/terms-of-service.html">Terms of Use</a></li>
                    </ul>
                </div>
                <div className="col-lg-6 text-right">
                    <span className="mr-1"><script>document.write(new Date().getFullYear())</script>©</span> <a href="#" className="">Webkit</a>.
                </div>
            </div>
        </div>
    </footer>
    <Helmet>
        {/* <script src="../assets/js/backend-bundle.min.js"></script>
        <script src="../assets/js/table-treeview.js"></script>
        <script src="../assets/js/customizer.js"></script>
        <script async src="../assets/js/chart-custom.js"></script>
        <script async src="../assets/js/slider.js"></script> */}
        {/* <script src="../assets/js/app.js"></script> */}
        {/* <script src="../assets/vendor/moment.min.js"></script> */}
    </Helmet>
    </div>
  );
};

export default Footer;