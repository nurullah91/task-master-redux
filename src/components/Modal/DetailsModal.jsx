import { useSelector } from "react-redux";
import Modal from "./Modal";

const DetailsModal = ({ isOpen, setIsOpen, taskId }) => {
    const {tasks} = useSelector((state) => state.tasksSlice);
    const task = tasks.find( (item)=> item.id === taskId);

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title} >
            <div>
                <p>{task?.description}</p>

                <h4 className="font-bold text-blue-600 mt-5">Assigned to:  {task?.assignedTo}</h4>
                <h4 className="font-bold text-green-600 my-2">Date: {task?.date}</h4>
            </div>
        </Modal>
    );
};

export default DetailsModal;