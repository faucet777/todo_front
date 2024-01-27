import axios from "axios";
import React, {useState} from "react";
import {IDeed, IPosts} from "../models";


const my_url = 'http://127.0.0.1:8000/api/v1/deedlist/'

export function newDeedForm(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inpTitle, setInpValue] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inpDescr, setInpDescr] = useState('')

    const submitDeed = async (event: React.FormEvent) => {
        event.preventDefault();
        const resp = await axios.post<IDeed>(my_url, {
            "title": inpTitle,
            "description": inpDescr,
        })
        window.location.reload()

    };
    return (
        <div>
            <form onSubmit={submitDeed}>
                <input type="text"
                       className="border-2 px-2 py-2 mb-2 rounded-lg"
                       placeholder="enter tittle"
                       value={inpTitle}
                       onChange = {event => setInpValue(event.target.value)}
                />
                <input type="text"
                       className="border-2 px-2 py-2 mb-2 rounded-lg"
                       placeholder="enter description"
                       value = {inpDescr}
                       onChange={event => setInpDescr(event.target.value)}

                />
                <button type="submit" className="px-2 py-1 border rounded font-extrabold bg-blue-300 outline-0 hover:bg-opacity-50">
                    ADD
                </button>
            </form>
        </div>
    );
};