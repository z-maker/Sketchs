import * as firebase from 'firebase'

const db = firebase.database()

export const registerUser = async (data) =>{
    let res = false

    const ref = db.ref("users")

    const user = {
        [data.uid]:{
            ...data
        }
    }
    await ref.update(user).then(()=>{
        res = true
    })
    .catch(e=>{
        console.warn(e)
    })

    return res
}