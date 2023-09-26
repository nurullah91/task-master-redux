import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../../redux/features/tasks/tasksSlice';
import { useState } from 'react';
import DetailsModal from '../Modal/DetailsModal';

const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {tasks} = useSelector((state)=> state.tasksSlice);
  const dispatch = useDispatch();

 
  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
     
      <div className=" h-[750px] overflow-auto space-y-3">
       {tasks.map(item => <div
          key={item.id}
          className="bg-secondary/10 rounded-md p-3 flex justify-between"
        >
          <h1>{item.title}</h1>
          <div className="flex gap-3">
            <button onClick={()=>setIsOpen(!isOpen)} className="grid place-content-center" title="Details">
              <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
            </button>
            {/* modal */}
            <DetailsModal isOpen={isOpen} setIsOpen={setIsOpen} title={item.title} task={item}></DetailsModal>

            <button onClick={()=> dispatch(updateTask({id:item.id, status: "done"}))} className="grid place-content-center" title="Done">
              <CheckIcon className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default MyTasks;
