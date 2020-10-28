import { useState, useEffect } from 'react';
import firebase from './firebase';

const useData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
       const unsubscribe = firebase
        .firestore()
        .collection("catmatch")
        .orderBy("score", "desc")
        .onSnapshot((snapshot) => {
            const newData = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setData(newData);
        })

        return () => unsubscribe()
    }, [])
    return data;
}

export default useData;