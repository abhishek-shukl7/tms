/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useEffect, useState } from 'react';
import axios from 'axios'; 
import Header from '../components/ProjectsList/Header';
import Grid from '../components/ProjectsList/Grid';
import List from '../components/ProjectsList/List';

const ProjectsList: React.FC = () => {

 const [activeIndex, setActiveIndex] = useState<number>(0);

  // Handler to toggle active button and content
  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  const [selectedItem, setSelectedItem] = useState('In Progress');
  const handleStatusChange = (item) => {
    setSelectedItem(item);
  };

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProjects = async (selectedItem) => {
        try {
          const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjZkMTY4MWE1YzA5YTA2NDYxMjVhNTRjIiwiaWF0IjoxNzI2NDczNzgwLCJleHAiOjE3MjY0NzczODB9.4KI72FSDR9KscrSZ4W2vDjk3oiqFn1PgRLzL6rTm2GM"; 
          
          
          const response = await axios.get('http://localhost:3001/api/project/getAll?status='+selectedItem, {
            headers: {
              Authorization: `Bearer ${token}` 
            }
          });
  
          setProjects(response.data); 
          setLoading(false); 
        } catch (error) {
          console.error('Error fetching project list:', error);
          setError(' Failed to fetch projects. Please try again.'); 
          setLoading(false);
        }
      };

    useEffect(() => {
        fetchProjects(selectedItem); 
      }, [selectedItem]);

return (
    <div>
        <div className="wrapper">   
            <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-body">
                                   <Header activeIndex={activeIndex} onButtonClick={handleButtonClick} selectedItem={selectedItem} onStatusChange={handleStatusChange}/> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <div>
                        <Grid activeIndex={activeIndex} projects={projects} selectedItem={selectedItem} />
                        <List activeIndex={activeIndex} projects={projects} selectedItem={selectedItem} />
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);
};

export default ProjectsList;