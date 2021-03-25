import { FirebaseStorage, FirebaseDatabase } from "../firebase"

export function Sketch(data) {

    const {
        id,
        ref,
        name,
        description,
        thumb,
        rank,
        share_link,
        price,
        sale_price,
        owner,
        filePath,
        filename
    } = data

    this.id = id?id:""
    this.ref = ref?ref:""
    this.name = name?name:""
    this.description = description?description:""
    this.thumb = thumb?thumb:""
    this.rank = rank?rank:""
    this.share_link = share_link?share_link:""
    this.price = price?price:""
    this.sale_price = sale_price?id:""
    this.owner = owner?owner:""
    this.owner_id = this.owner?this.owner.uid:""
    this.filePath = filePath?filePath:""
    this.filename = filename?filename:""
    
}

export const create = async (data) => {

    let sketch = new Sketch(data)

    const file_uri = await FirebaseStorage.uploadFile(sketch.filePath,`sketchs/${sketch.owner_id}`,sketch.filename)

    if(!file_uri)return null
    
    sketch.thumb = file_uri
    const res = FirebaseDatabase.createSketch(sketch)

    return res
}

export const listSketch = async () => {
    let list = null

    const res = FirebaseDatabase.listSketch()

    return res
}