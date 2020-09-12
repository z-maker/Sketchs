import * as firebase from 'firebase'

export const AVATARS_BASE_DIR = "avatar"
    /**
     * @param  {URL} filePath
     * @param  {String} reference
     * @param  {String} name
     */
    export const uploadFile = async (filePath,reference,name) => {

        const response = await fetch(filePath)
        const blob = await response.blob()
    
        var date = new Date()
        var date_order = `${date.getFullYear()}/${date.getMonth()+1}`
    
        var ref_name = `${reference}/${date_order}/${name}`;

        var ref = firebase.storage().ref().child(ref_name)
    
        var download_link = null
    
        await ref.put(blob)
                .then(async (result) => {
                    await firebase.storage()
                        .ref(`${reference}/${date_order}/${result.metadata.name}`)
                        .getDownloadURL()
                        .then((photoUrl) => {
                            download_link = photoUrl                        
                        })
                })
                .catch((e) => {
                    console.log("error",e)
                })
    
        return download_link
    }