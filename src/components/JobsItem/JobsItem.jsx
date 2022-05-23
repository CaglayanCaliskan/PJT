import {FaEdit, FaTrashAlt} from 'react-icons/fa';
import Button from '../shared/Button/Button';
import {useContext} from 'react';
import JobsContext from '../../context/JobsContext';

const JobsItem = ({item}) => {
  const {handleOpenDeleteModal, handleOpenEditModal} = useContext(JobsContext);
  return (
    <ul className='new-job'>
      <li className='new-job-name'>{item.jobText}</li>
      <li className='new-job-priority'>
        <Button version={item.jobPriority}>{item.jobPriority}</Button>
      </li>
      <li className='new-job-action'>
        <Button version='default' onClick={() => handleOpenEditModal(item)}>
          <FaEdit />
        </Button>
        <Button>
          <FaTrashAlt onClick={() => handleOpenDeleteModal(item)} />
        </Button>
      </li>
    </ul>
  );
};

export default JobsItem;
