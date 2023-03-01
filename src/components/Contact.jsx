import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {removeContact} from '../redux/contactSlice';

const Contact = ({props}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/contacts/${id}`)
    }
    const handleDelete = (id) => {
        dispatch(removeContact(id))
    }
    return (
        <div className="border-b border-b-gray-400 flex items-center px-3 py-2">
            <span className="flex-1 font-bold">{props.name}</span>
            <span className="flex-1 flex justify-center font-bold">{props.number}</span>
            <span className="flex-1 flex justify-end gap-5">
                <button onClick={() => handleClick(props.id)} className="sm:w-auto px-5 py-2 text-center font-bold rounded-lg text-sm w-full focus:ring-4 focus:outline-none focus:ring-green-300 text-white bg-green-700 hover:bg-green-800">Edit</button>
                <button onClick={() => handleDelete(props.id)} className="sm:w-auto px-5 py-2 text-center font-bold rounded-lg text-sm w-full focus:ring-4 focus:outline-none focus:ring-red-300 text-white bg-red-700 hover:bg-red-800">X</button>
            </span>
        </div>
    );
};

export default Contact;
