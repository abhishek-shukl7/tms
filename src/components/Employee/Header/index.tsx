/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import NewEmployee from './NewEmployee.tsx';
import NewUserModal from '../../Common/NewUserModal';

interface ButtonGroupProps {
    activeIndex: number;
    onButtonClick: (index: number) => void;
}

const Header: React.FC<ButtonGroupProps> = ({ activeIndex, onButtonClick },{ onClick }) => {
    const [modalActive, setModalActive] = useState(false);

    const handleOpenModal = () => {
      setModalActive(true);
    };
  
    const handleCloseModal = () => {
      setModalActive(false);
    };
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between breadcrumb-content">
      <h5>Your Projects</h5>
      <div className="d-flex align-items-center">
        <div className="list-grid-toggle d-flex align-items-center mr-3">
          <div
            data-toggle-extra="tab"
            data-target-extra="#grid"
            className={activeIndex === 0 ? 'active' : ''}
            onClick={() => onButtonClick(0)}
          >
            <div className="grid-icon mr-3">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
          </div>
          <div data-toggle-extra="tab" data-target-extra="#list"
           className={activeIndex === 1 ? 'active' : ''}
           onClick={() => onButtonClick(1)}
           >
            <div className="grid-icon">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="21" y1="10" x2="3" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="3" y2="14"></line>
                <line x1="21" y1="18" x2="3" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
        <NewEmployee onClick={handleOpenModal} />
        <NewUserModal active={modalActive} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default Header;
