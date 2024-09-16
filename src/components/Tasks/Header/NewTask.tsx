/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface OpenModalButtonProps {
    onClick: () => void;
  }

const NewTask: React.FC<OpenModalButtonProps> = ({ onClick }) => {

  return (
    <a
          href="#"
          className="btn btn-primary"
          data-target="#new-task-modal"
          data-toggle="modal"
          onClick={onClick}
        >
          New Task
        </a>
  );
};

export default NewTask;
