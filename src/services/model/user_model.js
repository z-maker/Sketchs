import { FirebaseAuth, FirebaseDatabase } from "../firebase"

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

export const createUser = async (user) => {

}


export const updateUser = async (data) => {

}