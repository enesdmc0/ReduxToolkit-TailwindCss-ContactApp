import {useState} from 'react';
import Contacts from '../components/Contacts';
import {useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import {addContact, allRemoveContact} from '../redux/contactSlice';

const Home = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact({
            id: nanoid(),
            name,
            number
        }));
        setName("");
        setNumber("");
    }
    const handleRemove = () => {
        dispatch(allRemoveContact())
    }
    return (
            <div className="flex flex-col min-h-[calc(100vh_-_65px)]">
                <form onSubmit={handleSubmit} className="border-b border-b-black w-full h-64 flex items-center justify-center flex-col p-6">
                    <div className="relative z-0 w-full mb-6 group">
                            <input value={name} onChange={e => setName(e.target.value)} type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                            <input value={number} onChange={e => setNumber(e.target.value)} type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" name="number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required/>
                            <label htmlFor="number" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-78-90)</label>
                    </div>
                   <div className="gap-10 flex">
                       <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                           Submit
                       </button>
                       <button onClick={handleRemove} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                           All Delete
                       </button>
                   </div>
                </form>
                <Contacts/>
            </div>

    );
};

export default Home;
