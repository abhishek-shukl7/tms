import AccountSetting from "../components/UserAccountSetting/AccountSetting";
import SocialSetting from "../components/UserAccountSetting/SocialSetting";

const UserAccountSetting: React.FC = () => {
    return (

    <div>
        <div className="wrapper">     
        <div className="content-page">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Account Setting</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <AccountSetting />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Social Media</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <SocialSetting />
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

export default UserAccountSetting;