export const getAllGroupsList = async(req, res) => {
    res.send("Esta funcion obtiene la lista de todos los grupos creados")
}
export const getUniqueGroupById = async(req, res) => {
    res.send("Esta funcion obtiene UN solo grupo por su URL ID")
}
export const createUniqueGroup = async(req, res) => {
    res.send("Esta funcion crea un solo grupo con su nuevo ID")
}
export const renameUniqueGroupById = async(req, res) => {
    res.send("Esta funcion cambia el nombre del grupo por su ID ")
}
export const deleteGroupById = async(req, res) => {
    res.send("Esta funcion elimina un solo grupo por el ID")
}