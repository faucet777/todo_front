import {IDeed} from '../models'
import React, {useState} from "react";
import axios from "axios";

const my_url = 'http://127.0.0.1:8000/api/v1/deedlist/'
interface DeedProps{
    deed: IDeed,
}

export function Deed({deed}: DeedProps){
    const [details, setDetails] = useState(false)
    const [done, setDone] = useState(deed.is_done)
    const doneBtnClass = done ? "bg-opacity-100" : "bg-opacity-10"

    const changeDone = async (event: React.MouseEvent) => {
        setDone(prev => !prev)
        const resp = await axios.put<IDeed>(my_url, {
            "_id": deed._id,
            "is_done": !done,
        }
        )
        window.location.reload()
    }

    const delDeed = async (event: React.MouseEvent) => {
        const deed_del = {"_id": deed._id,};
        const resp = await axios.delete(my_url, {data:deed_del})
        window.location.reload()
    }

    return(
        <div className="border-2 px-2 py-1 rounded-lg mb-2 flex flex-nowrap flex-col w-3/6">
            <div className="py-5 inline-flex justify-between items-center w-full">
                <p className="w-2/3 inline-flex items-center justify-center">{deed.title} </p>
                <div className="btn-container w-1/3 inline-flex justify-evenly">
                    <button
                        className={["px-2 py-1 border rounded bg-green-400", doneBtnClass].join(' ')}
                        onClick={changeDone}
                    >
                        &#10003;
                    </button>
                    <button
                        className="px-2 py-1 border rounded bg-red-500"
                        onClick={delDeed}
                    >
                        &#10007;
                    </button>
                    <button
                        className="px-2 py-1 border rounded bg-blue-300"
                        onClick={() => setDetails(prev => !prev)}
                    >
                        {details ? '∧' : '∨'}
                    </button>
                </div>
            </div>
            {details &&
                <div>
                    <p>
                        {deed.description}
                    </p>
                </div>
            }
            {done &&
                <div>
                    <p>
                            done!!!!
                    </p>
                </div>
            }
        </div>
    )
}