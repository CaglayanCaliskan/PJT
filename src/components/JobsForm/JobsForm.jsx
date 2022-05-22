import './JobsForm.scss';
import Button from '../shared/Button/Button';

const JobsForm = () => {
  return (
    <div className='jobs-form'>
      <section className='heading'>
        <h2>Create a new job</h2>
      </section>
      <section className='form'>
        <div>
          <label htmlFor='jobs-name'>Job Name</label>
          <input
            type='text'
            name='jobs-name'
            placeholder='Write a new job...'
            id='jobs-name'
          />
        </div>
        <div>
          <label htmlFor='jobs-priority'>Job Priority</label>
          <select name='jobs-priority' defaultValue='' id='jobs-priority'>
            <option value='' disabled>
              Choose
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
        </div>
        <div className='jobs-button'>
          <Button>+ Create</Button>
        </div>
      </section>
    </div>
  );
};

export default JobsForm;
