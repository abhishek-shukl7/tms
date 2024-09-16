/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import user01 from '../../../assets/images/profile/service/01.png';
import user02 from '../../../assets/images/profile/service/02.png';
import user03 from '../../../assets/images/profile/service/03.png';
import user04 from '../../../assets/images/profile/service/04.png';
import user05 from '../../../assets/images/profile/service/05.png';
import user06 from '../../../assets/images/profile/service/06.png';

interface ContentGroupProps {
  activeIndex: number;
}

const Skills: React.FC<ContentGroupProps> = ({ activeIndex }) => {
  return (
    <div id="profile1" className={activeIndex === 0 ? 'tab-pane fade active show' : 'tab-pane fade'}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis viverra
        viverra mollis sed vitae fames nunc sollicitudin viverra. Curabitur
        massa, ultrices diam ipsum faucibus risus. Hendrerit justo, quis massa a
        elementum. At elementum.
      </p>
      <div className="row">
        <div className="col-lg-6">
          <ul className="list-inline p-0 m-0">
            <li className="mb-4">
              <div className="d-flex align-items-center pt-2">
                <img src={user01} className="img-fluid" alt="image" />
                <div className="ml-3 w-100">
                  <div className="media align-items-center justify-content-between">
                    <p className="mb-0">Adobe Photoshop</p>
                    <h6>85%</h6>
                  </div>
                  <div className="iq-progress-bar mt-3">
                    <span
                      className="bg-primary iq-progress progress-1"
                      data-percent="85"
                    ></span>
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="d-flex align-items-center pt-2">
                <img src={user02} className="img-fluid mr-3" alt="image" />
                <div className="ml-3 w-100">
                  <div className="media align-items-center justify-content-between">
                    <p className="mb-0">Figma</p>
                    <h6>85%</h6>
                  </div>
                  <div className="iq-progress-bar mt-3">
                    <span
                      className="iq-progress iq-progress-danger progress-1"
                      data-percent="85"
                    ></span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center pt-2">
                <img src={user03} className="img-fluid" alt="image" />
                <div className="ml-3 w-100">
                  <div className="media align-items-center justify-content-between">
                    <p className="mb-0">Adobe Photoshop</p>
                    <h6>85%</h6>
                  </div>
                  <div className="iq-progress-bar mt-3">
                    <span
                      className="iq-progress iq-progress-warning progress-1"
                      data-percent="85"
                    ></span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul className="list-inline p-0 m-0">
            <li className="mb-4">
              <div className="d-flex align-items-center pt-2">
                <img src={user04} className="img-fluid" alt="image" />
                <div className="ml-3 w-100">
                  <div className="media align-items-center justify-content-between">
                    <p className="mb-0">Adobe Photoshop</p>
                    <h6>85%</h6>
                  </div>
                  <div className="iq-progress-bar mt-3">
                    <span
                      className="iq-progress iq-progress-success progress-1"
                      data-percent="85"
                    ></span>
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="d-flex align-items-center pt-2">
                <img src={user05} className="img-fluid" alt="image" />
                <div className="ml-3 w-100">
                  <div className="media align-items-center justify-content-between">
                    <p className="mb-0">Figma</p>
                    <h6>85%</h6>
                  </div>
                  <div className="iq-progress-bar mt-3">
                    <span
                      className="iq-progress iq-progress-info progress-1"
                      data-percent="85"
                    ></span>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex align-items-center pt-2">
                <img src={user06} className="img-fluid" alt="image" />
                <div className="ml-3 w-100">
                  <div className="media align-items-center justify-content-between">
                    <p className="mb-0">Adobe Photoshop</p>
                    <h6>85%</h6>
                  </div>
                  <div className="iq-progress-bar mt-3">
                    <span
                      className="bg-secondary iq-progress progress-1"
                      data-percent="85"
                    ></span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
