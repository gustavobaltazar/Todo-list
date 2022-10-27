import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { Task } from "./Task";
import Clipboard from "../assets/Clipboard.png";

export function Post() {
    const [toDo, setToDo] = useState([]);
    const [newToDo, setNewToDo] = useState('');

    return (
        <article className="w-full flex flex-col items-center justify-center gap-2 p-0 absolute">
            <form className="w-2/6 flex flex-row gap-2">
                <input
                    className="w-full p-4 rounded-lg h-14 box-border grow-0 bg-gray5 resize-none text-gray3 placeholder:text-gray3 border border-solid shadow-md border-gray7 relative bottom-[15px]"
                    name="todo"
                    placeholder="Adicione uma nova tarefa"
                    required
                />
                <button className="bg-blueDark rounded-lg p-4 h-14 w-24 flex flex-row gap-1 items-center text-white relative bottom-[15px] font-bold">
                    Criar
                    <PlusCircle className="text-white w-8 h-8" size={32} />
                </button>
            </form>
            <div className="w-full flex justify-center items-end mt-12">
                <div className="w-3/6 flex flex-row justify-between pr-24 pl-24">
                    <div className="flex gap-2 ">
                        <p className="text-blue">Tarefas criadas</p>
                        <span className="bg-gray4 rounded-full text-white pr-3 pl-3 font-bold">{toDo.length}</span>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-blue">Tarefas concluídas</p>
                        <span className="bg-gray4 rounded-full text-white pr-3 pl-3 font-bold">{toDo.length}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 border-t-[2px] border-solid rounded-md">
                <img className="h-14 w-14" src={Clipboard} alt="" />
                <div>
                    <p className="text-gray3 font-bold">Você ainda não tem tarefas cadastradas</p>
                    <p className="text-gray3">Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </article>
    )
}