import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { taskPerUser, updateTask } from '../../redux/features/tasks/tasksSlice';
import { useEffect, useState } from 'react';
import DetailsModal from '../Modal/DetailsModal';

const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState('');
  const { tasks, userSpecificTask } = useSelector((state) => state.tasksSlice);
  const { name: displayName } = useSelector((state) => state.userSlice)
  const dispatch = useDispatch();

  const handleModal = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen)
  }

// getting user specific task
  useEffect(() => {
    dispatch(taskPerUser(displayName))

  }, [displayName, dispatch, tasks])



  return (
    <div>
      {/* modal */}
      <DetailsModal isOpen={isOpen} setIsOpen={setIsOpen} taskId={taskId}></DetailsModal>

      <h1 className="text-xl my-3">My Tasks</h1>

      <div className=" h-[750px] overflow-auto space-y-3">
        {userSpecificTask.map(item => <div
          key={item.id}
          className="bg-secondary/10 rounded-md p-3 flex justify-between"
        >
          <h1>{item.title}</h1>
          <div className="flex gap-3">
            <button onClick={() => handleModal(item.id)} className="grid place-content-center" title="Details">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
            </button>

            <button onClick={() => dispatch(updateTask({ id: item.id, status: "done" }))} className="grid place-content-center" title="Done">
              <CheckIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default MyTasks;
