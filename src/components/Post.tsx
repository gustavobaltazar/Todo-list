import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { Task } from "./Task";
import Clipboard from "../assets/Clipboard.png";


export function Post() {
    const [toDo, setToDo] = useState(['']);
    const [newToDo, setNewToDo] = useState('');

    function handleNewToDo() {
        event?.preventDefault()
        setToDo([...toDo, newToDo])
    }

    function handleNewToDoTextChange(event: ChangeEvent<HTMLInputElement>) {
        setNewToDo(event.target.value);
    }

    return (
        <article className="w-1/2 flex flex-col items-center justify-center gap-2 p-0 absolute">
            <form onSubmit={handleNewToDo} className="w-full flex flex-row items-center justify-center gap-2">
                <input
                    className="w-[736px] p-4 rounded-lg h-14 box-border grow-0 bg-gray5 resize-none text-gray3 placeholder:text-gray3 border border-solid shadow-md border-gray7 relative bottom-[15px]"
                    name="todo"
                    placeholder="Adicione uma nova tarefa"
                    value={newToDo}
                    onChange={handleNewToDoTextChange}
                    required
                />
                <button className="bg-blueDark rounded-lg p-4 h-14 w-24 flex flex-row gap-1 items-center text-white relative bottom-[15px] font-bold">
                    Criar
                    <PlusCircle className="text-white w-8 h-8" size={32} />
                </button>
            </form>
            <div className="w-full flex justify-center items-end mt-12 mb-4">
                <div className="w-full flex flex-row justify-between">
                    <div className="flex gap-2 ">
                        <p className="text-blue">Tarefas criadas</p>
                        <span className="bg-gray4 rounded-full text-white pr-3 pl-3 font-bold">{toDo.length - 1}</span>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-blue">Tarefas concluídas</p>
                        <span className="bg-gray4 rounded-full text-white pr-3 pl-3 font-bold">{toDo.length - 1}</span>
                    </div>
                </div>
            </div>

            {toDo.length - 1 < 1 &&
                <div className="w-full flex flex-col justify-center items-center gap-4 border-t-[1px] border-solid rounded-md border-gray4 p-16">
                    <img className="h-14 w-14" src={Clipboard} alt="" />
                    <div>
                        <p className="text-gray3 font-bold">Você ainda não tem tarefas cadastradas</p>
                        <p className="text-gray3">Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div>
            }

            {
                toDo.map((item) => {
                    return (
                        <div key={item} className="text-white">{item}</div>
                    )
                })
            }

        </article>
    )
}