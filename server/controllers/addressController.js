import Address from "../models/Address.js"

export const addAddress = async (req, res) => {
    try {

        const userId = req.userId
        const { address } = req.body

        await Address.create({
            ...address,
            userId
        })

        res.json({
            success: true,
            message: "Address added successfully"
        })

    } catch (error) {
        console.log(error.message)

        res.json({
            success: false,
            message: error.message
        })
    }
}

export const getAddress = async (req,res) => {
    try {

        const userId = req.userId

        const addresses = await Address.find({ userId })

        res.json({
            success: true,
            addresses
        })

    } catch (error) {
        console.log(error.message)

        res.json({
            success: false,
            message: error.message
        })
    }
}

// // Add Adddress: /api/address/add
// export const addAddress = async(req,res) => {
//     try {
//         const {address, userId } = req.body
//         await Address.create({...address, userId})
//         res.json({
//             success: true,
//             message: "address added Successfully"
//         })
//     } catch (error) {
//         console.log(error.message)
//         res.json({
//             success: false,
//             message: error.message
//         })
//     }
// }

// // To get all the addresses of the User
// // Get Address: /api/address/get
// export const getAddress = async(req,res) => {
//     try {
//         const { userId } = req.body
//         const addresses = await Address.find({userId})
//         res.json({
//             success: true,
//             addresses
//         })
//     } catch (error) {
//         console.log(error.message)
//         res.json({
//             success: false,
//             message: error.message
//         })
//     }
// }