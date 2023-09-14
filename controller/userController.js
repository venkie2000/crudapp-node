const UserModel = require("../models/userModel");

const addUser = async (req, res) => {
    try {
        const newUser = new UserModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            dob: req.body.dob,
            socialmedia:req.body.socialmedia
        });
        const addNewUser = await newUser.save()
        res.send({
            addNewUser
        })
    }
    catch (e) {
        console.log(e)
    }


}

 const getUser = async (req,res) => {
    try{
        const UserId =req.params.id;
        console.log("userid",UserId);
    
        const getUser = await UserModel.findById( UserId);

        // console.log("get",getUser);
        res.send(getUser);
    }
    catch (e) {
        console.log(e)
    }

 }


const updateUser = async (req,res) => {
    try{
        const UserId = req.params.id;
        console.log("userid",UserId);
        const updateUser = await UserModel.findByIdAndUpdate(
        UserId,
        req.body,
        {new : true}
        );
        res.send(updateUser)
         }
    catch (e) {
        console.log(e)
    }


}

const deleteUser = async (req,res) => {
    try{
        const UserId = req.params.id;
        console.log("userid",UserId);
        const deleteUser = await UserModel.findByIdAndDelete(UserId);
        // console.log(deleteUser);
        res.send(deleteUser)
         }
    catch (e) {
        console.log(e)
    }
}

module.exports = { addUser,getUser ,updateUser,deleteUser}

