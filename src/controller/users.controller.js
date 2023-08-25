import {User} from '../models/User.js'
export const getUsers = async (req , res )=> {
    try {
        //Test error: throw new Error("Error")
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        res.status(500).json({message: "Ocurrio un error al obtener los usuarios"})
    }
}
export const createUser = async (req , res ) => {
    const {username, firstName, lastName, email} = req.body
    try {
        //throw new Error("Error")
        const newUser = await User.create({username, firstName, lastName, email})
        //console.log(newUser)
        res.json({message: "Usuario creado con exito", status: "OK"})
    } catch (error) {
        res.status(500).json({message: "Error interno", content: error})
    }    

}
export const updateUser = async (req, res) => {
    const {id} = req.params // respetar el orden de los parametros dados en la URL
    const {username, firstName, lastName} = req.body
    try {
        const dataUser = await User.findByPk(id) // lo saca de la base de datos si existe lo guarda y sino da un error
        dataUser.username = username
        dataUser.firstName = firstName
        dataUser.lastName = lastName
        await dataUser.save()
        res.json(dataUser)
    } catch (error) {
        //console.log(error)
        res.status(500).json({message: "Error interno", content: error})
    }
}

export const deleteUser = async (req, res) => {
    const {username} = req.params // respetar el orden de los parametros dados en la URL
    try {
        await User.destroy({
            where: {
              username
            }
          });
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error interno", content: error})
    }
}

export const getUniqueUser = async (req, res) => {
    const {username} = req.params // obtiene todos los datos por el `username`
    try {
        const dataUser = await User.findOne({
            where: {
                username
            }
        })
        res.json(dataUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Error interno", content: error})
    }
}