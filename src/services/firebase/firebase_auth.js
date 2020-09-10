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
export const createUserWihEmail = async (email, password) => {
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