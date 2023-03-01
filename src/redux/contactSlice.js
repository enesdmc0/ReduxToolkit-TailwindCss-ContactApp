import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';


const contactAdapter = createEntityAdapter();
export const contactSelectors = contactAdapter.getSelectors(state => state.contacts)
export const contactSlice = createSlice({
    name: "contacts",
    initialState: contactAdapter.getInitialState(),
    reducers: {
        addContact: contactAdapter.addOne,
        removeContact: contactAdapter.removeOne,
        allRemoveContact: contactAdapter.removeAll,
        updateContact: contactAdapter.updateOne,
    }
});

export const {addContact, removeContact, allRemoveContact, updateContact} = contactSlice.actions;
export default contactSlice.reducer;