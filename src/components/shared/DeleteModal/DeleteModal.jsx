import './DeleteModal.scss';
import {CgDanger} from 'react-icons/cg';
import Button from '../Button/Button';
import JobsContext from '../../../context/JobsContext';
import {useContext} from 'react';

const DeleteModal = () => {
  const {handleOpenDeleteModal, handleDelete, selectedItem} =
    useContext(JobsContext);
  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='modal-title'>
          <CgDanger size={70} />
        </div>
        <div className='modal-body'>
          <h1>Are you sure you want to delete ?</h1>
        </div>
        <div className='modal-footer'>
          <Button version='urgent' onClick={() => handleDelete(selectedItem)}>
            Approve
          </Button>
          <Button version='primary' onClick={handleOpenDeleteModal}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
