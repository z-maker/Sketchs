import { FirebaseAuth, FirebaseDatabase, FirebaseStorage } from "../firebase"

export function UserModel(data) {

    if (data) {
        const { user, displayName, photoURL, phoneNumber, email, uid } = data

        this.username = displayName
        this.email = email
        this.uid = uid
        this.avatar = photoURL
        this.phoneNumber = phoneNumber
        this.lastLoginAt = new Date()
    }


}

export const registerUser = async (email, password) => {
    let result = null

    const data = await FirebaseAuth.createUser(email, password)

    if (!data) {
        return null
    }

    result = new UserModel(data.user)

    await FirebaseDatabase.registerUser(result)

    return result
}

export const loginUser = async (email,password) => {
    let result = null

    result = await FirebaseAuth.loginUser(email, password)

    if(!data){
        return null
    }

    return result
}

export const createUser = async (user) => {

}


export const updateUser = async (data) => {

}
/**
 * @param  {String} filepath
 * @param  {String} name
 */
export const updateAvatar = async (filepath,name) =>{

    const uri = await FirebaseStorage.uploadFile(filepath,FirebaseStorage.AVATARS_BASE_DIR,name)

    const updateres = await FirebaseAuth.updateUser({photoURL:uri})

    return uri
    
}