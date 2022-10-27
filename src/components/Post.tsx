import { PlusCircle } from "phosphor-react";
import { Task } from "./Task";

export function Post() {
    return (
        <article className="w-full flex flex-col items-center justify-center gap-2 p-0 absolute">
            <form className="w-2/6 flex flex-row gap-2">
                <input
                    className="w-full p-1 rounded h-14 box-border grow-0 bg-gray5 resize-none text-gray3 border border-solid shadow-current border-gray7"
                    name="todo"
                    placeholder="Adicione uma nova tarefa"
                    required
                />
                <button className="bg-blueDark rounded-lg p-4 h-14 w-24 flex flex-row gap-1 justify-center items-center text-white">
                    Criar
                    <PlusCircle className="text-white w-4 h-4" size={32} />
                </button>
            </form>

            <Task />
        </article>
    )
}