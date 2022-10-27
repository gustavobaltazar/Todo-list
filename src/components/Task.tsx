import { useState } from "react"
import { Trash, CheckCircle, Circle } from "phosphor-react"

interface TaskProps {
    content: string
    isActive?: boolean
}

export function Task({ content, isActive }: TaskProps) {
    const [isTaskCompleted, setIsTaskCompleted] = useState(false);

    return (
        <div className={`flex text-white ${isTaskCompleted ? "bg-gray5" : "bg-gray4 text-gray1"} w-full rounded-lg text-gray3 justify-between p-4 `}>
            <div className="flex justify-center items-center gap-2">
                <button onClick={() => setIsTaskCompleted(!isTaskCompleted)} className="text-blue">
                    {isTaskCompleted ? (
                        <CheckCircle className="text-transparent" color="#5e60ce" weight="fill" size={24} />

                    ) : <Circle size={24} />}</button>
                <div>
                    {isTaskCompleted ? (<div className="line-through text-gray3"> {content}</div>) : (<div> {content}</div>)}

                </div>
            </div>

            <button className="text-gray3"><Trash size={24} /></button>
        </div>
    )
}