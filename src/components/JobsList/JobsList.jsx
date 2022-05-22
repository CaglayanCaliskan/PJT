import React from 'react';
import JobsSearch from '../JobsSearch/JobsSearch';
import Button from '../shared/Button/Button';
import './JobsList.scss';
import {FaEdit, FaTrashAlt} from 'react-icons/fa';

const JobsList = () => {
  return (
    <div className='jobs-list'>
      <section className='heading'>
        <h2>Job List</h2>
        {/* burası static olacak */}
        <span> (3/3)</span>
      </section>
      <section className='jobs-search'>
        <JobsSearch />
      </section>
      <section className='jobs-items'>
        <ul className='titles'>
          <li>Name</li>
          <li className='new-job-priority'>Priority</li>
          <li className='new-job-action'>Action</li>
        </ul>
        <ul>
          <li className='new-job-name'>biseyler gelecek buraya</li>
          <li className='new-job-priority'>
            <Button version='urgent'>urgent</Button>
          </li>
          <li className='new-job-action'>
            <Button version='default'>
              <FaEdit />
            </Button>
            <Button>
              <FaTrashAlt />
            </Button>
          </li>
        </ul>
        <ul>
          <li className='new-job-name'>biseyler gelecek buraya</li>
          <li className='new-job-priority'>
            <Button version='urgent'>urgent</Button>
          </li>
          <li className='new-job-action'>
            <Button version='default'>
              <FaEdit />
            </Button>
            <Button>
              <FaTrashAlt />
            </Button>
          </li>
        </ul>
        <ul>
          <li className='new-job-name'>biseyler gelecek buraya</li>
          <li className='new-job-priority'>
            <Button version='urgent'>urgent</Button>
          </li>
          <li className='new-job-action'>
            <Button version='default'>
              <FaEdit />
            </Button>
            <Button>
              <FaTrashAlt />
            </Button>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default JobsList;
