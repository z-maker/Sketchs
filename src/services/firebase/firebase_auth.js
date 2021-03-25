import * as firebase from 'firebase'

export const getCurrentUser = () => {

    return firebase.auth().currentUser

}

export const signAsAnonimusUser = async () =>{
    const user = await firebase.auth().signInAnonymously()
    return user
}

/**
 * @param  {String} email
 * @param  {String} password
 */
export const createUser = async (email, password) => {
    let user = null
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(result=>{
        user = result
    })
    .catch(e=>{
        console.warn(e)
    })

    return user
}


export const loginUser = async (email, password) => {

    let user = null

    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
        user = result
    })
    .catch( e => {
        console.warn(e);
    })

    return user

}


/**
 * @param  {JSON} data
 */
export const updateUser = async (data) => {

    let res = null
    await firebase.auth().currentUser.updateProfile(data).then(()=>{
        res = true
    })

    return res
}