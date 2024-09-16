import React,{useState} from 'react';

import PersonalInformation from '../components/EditProfile/PersonalInformation';
import ChangePassword from '../components/EditProfile/ChangePassword';
import EmailSMS from '../components/EditProfile/EmailSMS';
import Contact from '../components/EditProfile/Contact';
import EditNav from '../components/EditProfile/EditNav';

const EditProfile: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    // Handler to toggle active button and content
    const handleButtonClick = (index: number) => {
      setActiveIndex(index);
    };

    return (
        <div>
            <div className="wrapper">    
            <div className="content-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="iq-edit-list usr-edit">
                                <EditNav activeIndex={activeIndex} onButtonClick={handleButtonClick} />
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-12">
                    <div className="iq-edit-list-data">
                        <div className="tab-content">
                            <PersonalInformation activeIndex={activeIndex} />
                            <ChangePassword activeIndex={activeIndex} />
                            <EmailSMS activeIndex={activeIndex} />
                            <Contact activeIndex={activeIndex} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default EditProfile;