import firebase from 'firebase/app';
 import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDDc48MjfGCG1suSy2MYBuWMmkahYG56D8",
    authDomain: "myshop-cf446.firebaseapp.com",
    databaseURL: "https://myshop-cf446.firebaseio.com",
    projectId: "myshop-cf446",
    storageBucket: "myshop-cf446.appspot.com",
    messagingSenderId: "917227995166",
    appId: "1:917227995166:web:8558ab0245271fa1506e0f"
};

firebase.initializeApp(config);
export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`user/${userAuth.uid}`);
    const snapshot= await userRef.get();
    if(! snapshot.exists){
        const { displayName,email}=userAuth;
        const createAt=new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        }catch(error){console.log('error creating data',error.message)}
        

    }
    return userRef;
    
}

 export const addCollectionAndDocments=async(collectionKey,objectToAdd)=>{
const collectionRef=firestore.collection(collectionKey);
const batch=firestore.batch();
objectToAdd.forEach(obj => {
   const newDocRef=collectionRef.doc();
   console.log(newDocRef)
   batch.set(newDocRef,obj) 
});
return await batch.commit();
}
export const converSanpshotToMap=(collection)=>{
    const transfomedCollection=collection.docs.map(doc=>{
        const {title,items}=doc.data();
        return{
            routname:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    })
    console.log(transfomedCollection)
    return transfomedCollection.reduce((acumulator,collection)=>{
        acumulator[collection.title.toLowerCase()]=collection;
    return acumulator},{})
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
 

export default firebase;