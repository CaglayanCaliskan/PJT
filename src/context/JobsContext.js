import {v4 as uuidv4} from 'uuid';
import {createContext, useState} from 'react';
const JobsContext = createContext();

export const JobsProvider = ({children}) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const [jobs, setJobs] = useState([
    {
      id: 1,
      jobPriority: 'urgent',
      jobText:
        'Merhaba bu proje Rise Technology & Consulting assessment çalışması için oluşturulmuştur.',
    },
    {
      id: 2,
      jobPriority: 'urgent',
      jobText: 'Verilen task maddelerinin tamamı uygulanmıştır.',
    },
    {
      id: 3,
      jobPriority: 'trivial',
      jobText: 'Frontend Dev-Çağlayan Çalışkan',
    },
    {
      id: 4,
      jobPriority: 'regular',
      jobText: 'Frontend Dev-Çağlayan Çalışkan',
    },
    {
      id: 5,
      jobPriority: 'urgent',
      jobText: 'Frontend Dev-Çağlayan Çalışkan',
    },
  ]);
  // delete func
  const handleDelete = (selectedItem) => {
    setJobs(jobs.filter((item) => item.id !== selectedItem.id));
    setOpenDeleteModal(!openDeleteModal);
  };

  //add func
  const handleAdd = (newJob) => {
    newJob.id = uuidv4();
    setJobs([newJob, ...jobs]);
  };

  //Modal delete open func
  const handleOpenDeleteModal = (item) => {
    setSelectedItem(item);
    setOpenDeleteModal(!openDeleteModal);
  };

  //Modal Edit open func
  const handleOpenEditModal = (item) => {
    setOpenEditModal(!openEditModal);
    setSelectedItem(item);
  };

  //Edit selection func
  const handleEdit = (e) => {
    setSelectedItem({
      ...selectedItem,
      newPrio: e.target.value,
    });
  };

  //edit done
  const handleEditSave = () => {
    setSelectedItem({...selectedItem, jobPriority: selectedItem.newPrio});
    handleOpenEditModal();
    setJobs(
      ...jobs,
      jobs.map(function (item) {
        if (item.id === selectedItem.id) {
          item.jobPriority = selectedItem.newPrio;
          //PS!!! Solve this problem
          return [...item, ...jobs];
        }
        return [...jobs];
      })
    );
  };

  return (
    <JobsContext.Provider
      value={{
        jobs,
        handleDelete,
        handleAdd,
        openDeleteModal,
        handleOpenDeleteModal,
        selectedItem,
        setSelectedItem,
        handleOpenEditModal,
        openEditModal,
        handleEdit,
        handleEditSave,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export default JobsContext;
