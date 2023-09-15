export const getCommentsByPost = async(req, res) =>{
    res.send("Esta funcion obtiene todos los comentarios de una sola publicacion")
}

export const getUniqueCommentsByPost = async(req, res) => {
    res.send("Esta funcion obtiene un solo comentatio de una sola publicacion")
}

export const deleteUniqueCommentByPost = async(req, res) => {
    res.send("Esta funcion elimina un solo comentaro de una sola publicacion")
}

export const submitUniqueCommentByPost = async(req, res) => {
    // el comment ID es generado aqui
    res.send("Esta funcion añade un comentario por publicacion. parametros: userID, postID, commentID")
}