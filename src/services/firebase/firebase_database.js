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

export const createSketch = async (data) => {
    let res = null

    const db_ref = db.ref('sketchs')

    await db_ref.push(data)
    .then(ref=>{
        res = true
        console.log(ref)
    })
    .catch(e=>{
        console.warn(e);
    })

    // data.id = key.key
    // data.ref = db_ref.child(data.id).ref

    // await db_ref.update({
    //     [data.id]:data
    // })
    // .then(()=>{
    //     res = true
    // })
    // .catch(e=>{
    //     console.warn(e);
    // })
    

    return res

}