import React from 'react';
import Contact from './Contact';
import {useSelector} from 'react-redux';
import {contactSelectors} from '../redux/contactSlice';

const Contacts = () => {
    const contacts = useSelector(contactSelectors.selectAll);

    return (
        <div className="p-4 flex flex-col gap-5">
            {contacts && contacts.map(item => (
                <Contact key={item.id} props={{...item}}/>
            ))}
        </div>
    );
};

export default Contacts;
