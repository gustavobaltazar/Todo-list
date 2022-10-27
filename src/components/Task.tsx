import { useState } from "react"

export function Task() {
    const [toDo, setToDo] = useState([]);
    const [newToDo, setNewToDo] = useState('');
    const [toDoComplete, setToDoComplete] = useState(0);

    return (
        <div className="w-full flex justify-center items-end mt-12">
            <div className="w-3/6 flex flex-row justify-between pr-24 pl-24">
                <p className="text-blue">Tarefas criadas { toDoComplete }</p>
                <p className="text-blue">Tarefas concluídas { toDoComplete}</p>
            </div>
        </div>
    )
}