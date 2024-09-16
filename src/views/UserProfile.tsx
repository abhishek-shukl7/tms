import React,{useState} from 'react';

import profile from '../assets/images/page-img/profile.png';

import UserProfileNav from '../components/UserProfile/UserProfileNav';
import Skills from '../components/UserProfile/Skills';
import PersonalInformation from '../components/UserProfile/PersonalInformation';
import Education from '../components/UserProfile/Education';
import Experience from '../components/UserProfile/Experience';
import About from '../components/UserProfile/About';
import UserProfileInfo from '../components/UserProfile/UserProfileInfo';

const UserProfile: React.FC = () => {

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
                     <div className="card car-transparent">
                        <div className="card-body p-0">
                           <div className="profile-image position-relative">
                              <img src={profile} className="img-fluid rounded w-100" alt="profile-image" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row m-sm-0 px-3">            
                  <UserProfileInfo />
                  <div className="col-lg-8 card-profile">
                     <div className="card card-block card-stretch card-height">
                        <div className="card-body">
                           <UserProfileNav activeIndex={activeIndex} onButtonClick={handleButtonClick} />
                           <div className="profile-content tab-content">
                              
                              <Skills activeIndex={activeIndex} />
                              <PersonalInformation activeIndex={activeIndex} />
                              <Education activeIndex={activeIndex} />
                              <Experience activeIndex={activeIndex} />
                              <About activeIndex={activeIndex} />
                           </div>
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

export default UserProfile;