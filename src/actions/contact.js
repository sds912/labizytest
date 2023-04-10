import {
 LIST_CONTACT,
 CREATE_CONTACT,
 UPDATE_CONTACT,
 DELETE_CONTACT
} from './type';

import { addDoc, collection,deleteDoc,doc,onSnapshot, query, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const createContact = (data) => async (dispatch) => {
    try {
      const res = await addDoc(collection(db, 'contacts'), data)
      
      console.log(res.id)
      dispatch({
        type: CREATE_CONTACT,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const getContacts = () => async (dispatch) => {
    try {
        let data;
        const contactColRef = query(collection(db, 'contacts'));
        onSnapshot(contactColRef, (snapshot) => {
          data = snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }));
          console.log(data)
        })
      dispatch({
        type: LIST_CONTACT,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  export const updateContact = (id, data) => async (dispatch) => {
    try {
    
      const contactRef = doc(db, 'contacts', id);
      const res = await updateDoc(contactRef, data);
  
      dispatch({
        type: UPDATE_CONTACT,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };


export const deleteContact = (id) => async (dispatch) => {
  try {    
    
    const contactRef = doc(db, 'contacts', id)

    await deleteDoc(contactRef);

    dispatch({
      type: DELETE_CONTACT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
