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