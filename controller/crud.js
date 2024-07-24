const db = require("../config/db");


// Controller 1 : Get user all data 
let getUser = async (req, res) => {

    try {
        const result = await db.query("select * from user_data")
        res.status(200).json(result.rows)
    } catch (error) {
        res.status(500).json(error.message)

    }
}

// Controller 2 : Get user data by ID 
let getUserByID = async (req, res) => {
    const id = req.params.id
    try {
        const result = await db.query(`select * from user_data where id=${id}`)
        res.status(200).json(result.rows)
    } catch (error) {
        res.status(500).json(error.message)

    }
}


// Controller 3 : Post new user
let addUser = async (req, res) => {
    const { name,user_name, password } = req.body
    try {
        const checkUser = await db.query(`select * from user_data where user_name ='${user_name}'`)
        if (checkUser.rowCount >= 1) {
            res.status(500).json({ success: false, message: "User already exist" })
        }
        else {
            const result = await db.query(`insert into user_data (user_name,password,name) values ('${user_name}',${password}, '${name}')`)
            res.status(200).json({ success: true, message: "User insert successfully", result })
        }

    } catch (error) {
        res.status(500).json(error.message)

    }
}


// Controller 4: Edit user

let editUser = async (req, res) => {
    const id = req.params.id
    const { name, user_name, password } = req.body
    try {
        const checkUser = await db.query(`select * from user_data where id=${id}`)
        if (checkUser.rowCount >= 1) {
            const result = await db.query(`UPDATE user_data SET name='${name}', user_name='${user_name}', password='${password}' WHERE id=${id}`);
            res.status(200).json({ success: true, message: "User update successfullty", result })
        }
        else {
            res.status(200).json({ success: false, message: "User not found" })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

// Controller 5 : Delete user

let deleteUser = async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const result = await db.query(`delete from user_data where id=${id}`)
        if (result.rowCount >= 1) {
            res.status(500).json({ success: true, message: 'User delete successfully' })
        }
        else {
            res.status(200).json({ success: false, message: 'User not found' })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}




module.exports = {
    getUser,
    getUserByID,
    addUser,
    editUser,
    deleteUser
}