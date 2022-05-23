import React from 'react';
import './EditModal.scss';
import {FaRegEdit} from 'react-icons/fa';
import Button from '../Button/Button';
import JobsContext from '../../../context/JobsContext';
import {useContext} from 'react';

const EditModal = () => {
  const {handleOpenEditModal, handleEdit, selectedItem, handleEditSave} =
    useContext(JobsContext);
  return (
    <div className='modal-background'>
      <div className='modal-container'>
        <div className='modal-title'>
          <FaRegEdit size={70} />
        </div>
        <div className='modal-body'>
          <h1>Job Edit</h1>
          <div className='modal-edit-item'>
            <label>Job Name</label>
            <textarea
              className='text-area'
              rows='3'
              type='text'
              value={selectedItem.jobText}
              disabled
            />
            <label>Job Priority</label>
            <select
              name='jobs-priority'
              defaultValue={selectedItem.jobPriority}
              id='jobs-priority'
              onChange={(e) => handleEdit(e)}
            >
              <option id='urgent' value='urgent'>
                Urgent
              </option>
              <option id='regular' value='regular'>
                Regular
              </option>
              <option id='trivial' value='trivial'>
                Trivial
              </option>
            </select>
          </div>
        </div>
        <div className='modal-footer'>
          <Button version='accept' onClick={() => handleEditSave()}>
            Save
          </Button>
          <Button version='primary' onClick={handleOpenEditModal}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
