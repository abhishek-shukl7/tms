/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';

import Header from '../components/Employee/Header';
import Grid from '../components/Employee/Grid';
import List from '../components/Employee/List';

const Employee: React.FC = () => {

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
                    <div className="card-body">
                        <Header  activeIndex={activeIndex} onButtonClick={handleButtonClick} />
                    </div>
                </div>
            </div>
        </div>
        <Grid activeIndex={activeIndex} />
        <List activeIndex={activeIndex} />
        
    </div>
      </div>
    </div>
</div>
);
};

export default Employee;