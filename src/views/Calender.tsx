import NewProjectModal from '../components/Common/NewProjectModal/index.tsx';
import NewTaskModal from '../components/Common/NewTaskModal';
import NewUserModal from '../components/Common/NewUserModal';
import NewCreateModal from '../components/Common/NewCreateModal';

import Header from '../components/Calender/Header';
import ShowCalender from '../components/Calender/ShowCalender';
import RightSideBar from '../components/Calender/RightSideBar';

const Calender: React.FC = () => {
    return (
    <div>
        <div className="wrapper">  
        <div className="content-page">
        <div className="container-fluid">
            <div className="row">
                <Header />
                <div className="col-xl-8">
                    <div className="card card-block card-stretch card-height">
                        <ShowCalender />
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card card-block card-stretch card-height">
                        <RightSideBar />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <NewProjectModal />
        <NewTaskModal />  
        <NewUserModal />   
        <NewCreateModal />
    </div>
    );
};

export default Calender;