import * as firebase from 'firebase'

const db = firebase.database()

export const createSketch = async (data) => {
    let res = null

    const db_ref = db.ref('sketchs')

    const key = await db_ref.push()

    data.id = key.key
    data.ref = db_ref.child(data.id).ref

    await db_ref.update({
        [data.id]:data
    })
    .then(()=>{
        res = true
    })
    .catch(e=>{
        console.warn(e);
    })
    

    return res

}