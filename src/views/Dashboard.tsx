/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Investment from '../components/Dashboard/Investment';
import Sales from '../components/Dashboard/Sales';
import Cost from '../components/Dashboard/Cost';
import Profit from '../components/Dashboard/Profit';
import OverviewProgress from '../components/Dashboard/OverviewProgress/index.tsx';
import ProjectProgress from '../components/Dashboard/ProjectProgress';
import RightSideBar from '../components/Dashboard/RightSideBar';
import CurrentProjects from '../components/Dashboard/CurrentProjects';
    
// import NewProjectModal from '../components/Common/NewProjectModal';
// import NewTaskModal from '../components/Common/NewTaskModal';
// import NewUserModal from '../components/Common/NewUserModal';
// import NewCreateModal from '../components/Common/NewCreateModal';

const Dashboard: React.FC = () => {

  return (
    <div>
        <div className="wrapper">   
            <div className="content-page">
            <div className="container-fluid">
                <div className="row">
                    <Investment />
                    <Sales />
                    <Cost />
                    <Profit />
                    <div className="col-xl-8">
                        <div className="card-transparent card-block card-stretch card-height">
                            <div className="card-body p-0">
                                <OverviewProgress />
                                <ProjectProgress />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <RightSideBar />
                    </div>
                    <div className="col-lg-12">
                        <CurrentProjects />
                    </div>
                </div>
            </div>
            </div>
        </div>
        {/* <NewProjectModal />
        <NewTaskModal />  
        <NewUserModal />   
        <NewCreateModal /> */}
        
    </div>
    
  );
};

export default Dashboard;
