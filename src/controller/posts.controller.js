//export const getUsers = async (req , res )=> {}
import { Post } from "../models/Post"
export const createPost = async (req , res ) => {
    res.send("Creando las publicaciones")
}
export const updatePost = async (req, res) => {
    res.send("Actualizando la publicacion")
}

export const deletePost = async (req, res) => {
    res.send("Eliminando la publicacion")
}

export const getUniquePost = async (req, res) => {
    const {id} = req.params
}