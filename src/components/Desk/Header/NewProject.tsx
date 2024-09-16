/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface OpenModalButtonProps {
    onClick: () => void;
  }

const NewProject: React.FC<OpenModalButtonProps> = ({ onClick }) => {

  return (

        <div className="pl-3 border-left btn-new">
          <a
            href="#"
            className="btn btn-primary"
            data-target="#new-project-modal"
            data-toggle="modal"
            onClick={onClick}
          >
            New Project
          </a>
        </div>
  );
};

export default NewProject;
