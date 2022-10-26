import { PlusCircle } from "phosphor-react";

export function Post() {
    return(
        <article className="w-full flex justify-center gap-2">
            <form className="w-3/5 flex flex-row gap-2">
                <textarea
                    className="w-full border-0 p-1 rounded-lg" 
                    name="todo"
                    placeholder="Adicione uma nova tarefa"
                    required
                />
                <button className="bg-blueDark rounded-lg p-4">
                    Criar
                    <PlusCircle className="text-white" size={32}/>
                </button>
            </form>
        </article>
    )
}