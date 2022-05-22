import './JobsSearch.scss';
const JobsSearch = () => {
  return (
    <>
      <input type='text' id='jobs-search' placeholder='Search a Job...' />
      <select name='jobs-priority' id='jobs-priority'>
        <option id='all' value='all'>
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
    </>
  );
};

export default JobsSearch;
