/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from './firebase';

const db = firebase.firestore();

const formListRef = db.collection('form-list');

export const addData = async (data) => {
  let id;
  await formListRef
    .add({
      firstName: data.firstName,
      lastName: data.lastName,
      yearOfBirth: data.yearOfBirth,
      address: data.address,
      planetOfBirth: data.planetOfBirth,
      status: 'Pending',
      subject: 'Citizenship Application',
      createdDate: firebase.firestore.Timestamp.now(),
    })
    .then((docs) => {
      id = docs.id;
    });

  return id;
};

// eslint-disable-next-line no-unused-vars
export const getData = async (formId) => {
  let formData;
  await formListRef
    .doc(formId)
    .get()
    .then((doc) => {
      if (doc.exists) {
        formData = doc.data();
      } else {
        formData = '';
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
  return formData;
};

export const getUser = async (email, password) => {
  let userInfo;

  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      console.log('user', user);
      userInfo = user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log('errorMessage', errorMessage);
    });

  return userInfo;
};

export const getForms = () => {
  const formsRef = db.collection('form-list');
  const [forms] = useCollectionData(formsRef, { idField: 'id' });
  return forms;
};

export const updateForm = async (formId, data) => {
  await formListRef.doc(formId).update({
    status: data.status,
    adminNoted: data.response,
  });
};
