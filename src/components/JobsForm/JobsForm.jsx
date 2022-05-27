import './JobsForm.scss';
import Button from '../shared/Button/Button';
import JobsContext from '../../context/JobsContext';
import {useContext, useState} from 'react';

const JobsForm = () => {
  const [jobText, setJobText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [jobPriority, setJobPriority] = useState('');
  const {handleAdd} = useContext(JobsContext);
  const [row, setRow] = useState(1);

  const handleNewJobText = ({target: {value}}) => {
    const textRegex = /[^a-zA-Z0-9 ]/;
    if (value === '' || jobPriority === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length > 255) {
      setBtnDisabled(true);
      setMessage('Job must be a max 255 characters');
    } else if (textRegex.test(value)) {
      setBtnDisabled(true);
      setMessage('Job must be alphanumeric characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setJobText(value);
  };
  const UıRow = (e) => {
    if (e.key === 'Enter') {
      setRow(row + 1);
    }
  };

  const handleNewJobPriority = ({target: {value}}) => {
    if (value === '') {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
    setJobPriority(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (jobText === '') {
      setMessage('Please write a new Job...');
      setBtnDisabled(true);
    } else {
      const newJob = {
        jobText,
        jobPriority,
      };
      handleAdd(newJob);

      setJobText('');
      setRow(1);
      setJobPriority('');
    }
  };

  return (
    <div className='jobs-form'>
      <section className='heading'>
        <h2>Create a new job</h2>
      </section>
      <section className='section-form'>
        <form className='form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='jobs-name'>Job Name</label>
            <textarea
              rows={row}
              type='text'
              required
              name='jobs-name'
              placeholder='Write a new job...'
              id='jobs-name'
              onChange={handleNewJobText}
              onKeyDown={UıRow}
              value={jobText}
            />
          </div>
          <div>
            <label htmlFor='jobs-priority'>Job Priority</label>
            <select
              name='jobs-priority'
              defaultValue=''
              id='jobs-priority'
              onChange={handleNewJobPriority}
              select={jobPriority}
              required
            >
              <option value=''>Choose</option>
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
          <div className='jobs-button'>
            <label htmlFor='jobs-priority' style={{opacity: 0}}>
              invis
            </label>
            <Button type='submit' isDisabled={btnDisabled}>
              + Create
            </Button>
          </div>
        </form>
      </section>

      {message && <section className='message'> {message} </section>}
    </div>
  );
};

export default JobsForm;
