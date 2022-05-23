import './JobsList.scss';
import {useContext, useState} from 'react';
import JobsContext from '../../context/JobsContext';
import JobsItem from '../JobsItem/JobsItem';
import {motion, AnimatePresence} from 'framer-motion';
import DeleteModal from '../shared/DeleteModal/DeleteModal';
import EditModal from '../shared/EditModal/EditModal';

const JobsList = () => {
  const {jobs, openDeleteModal, openEditModal} = useContext(JobsContext);
  const [searchJob, setSearchJob] = useState('');
  const [searchPriority, setSearchPriority] = useState('');

  const variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
    exit: {opacity: 0},
  };
  const shortedJobs = jobs.sort(function (a, b) {
    const sa = a.jobPriority.split('').reverse().join('');
    const sb = b.jobPriority.split('').reverse().join('');

    if (sa < sb) return 1;
    if (sa > sb) return -1;
    return 0;
  });
  const searchedJobs = shortedJobs.filter((item) => {
    if (
      item.jobText.toLowerCase().includes(searchJob) &&
      item.jobPriority.includes(searchPriority)
    ) {
      return item;
    } else {
      return '';
    }
  });

  if (!jobs || jobs.lenght === 0) {
    return <h1>No Job Yet</h1>;
  }
  return (
    <div className='jobs-list'>
      <section className='heading'>
        <h2>Job List</h2>
        <h4>{searchedJobs.length + '/' + jobs.length} Jobs</h4>
      </section>
      {/* JOBS SEARCH */}
      <section className='jobs-search'>
        <input
          type='text'
          id='jobs-search'
          placeholder='Search a Job...'
          value={searchJob}
          onChange={(e) => setSearchJob(e.target.value)}
        />
        <select
          name='jobs-priority'
          id='jobs-priority'
          onChange={(e) => setSearchPriority(e.target.value)}
        >
          <option id='all' value=''>
            Priority (all)
          </option>
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
      </section>
      {/* JOBS ITEM LİST */}
      <section className='jobs-items'>
        <ul className='titles'>
          <li>Name</li>
          <li className='new-job-priority'>Priority</li>
          <li className='new-job-action'>Action</li>
        </ul>
        {openDeleteModal && <DeleteModal />}
        {openEditModal && <EditModal />}

        <AnimatePresence>
          {searchedJobs.map((item) => (
            <motion.div
              key={item.id}
              initial='hidden'
              animate='visible'
              exit='exit'
              variants={variants}
            >
              <JobsItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default JobsList;
