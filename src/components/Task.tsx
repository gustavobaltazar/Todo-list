import { useState } from "react"
import { Trash, CheckCircle, Circle } from "phosphor-react"

interface TaskProps {
    content: string
}

export function Task({ content }: TaskProps) {
    const [isTaskCompleted, setIsTaskCompleted] = useState(false);

    return (
        <div className="flex text-white bg-gray4 w-full rounded-lg justify-between p-4 ">
            <div className="flex justify-center items-center gap-2">
                <button onClick={() => setIsTaskCompleted(!isTaskCompleted)} className="text-blue">
                    {isTaskCompleted ? (
                        <CheckCircle className="text-transparent" color="#5e60ce" weight="fill" size={24} />

                    ) : <Circle size={24} />}</button>
                {content}
            </div>

            <button className="text-gray3"><Trash size={24} /></button>
        </div>
    )
}