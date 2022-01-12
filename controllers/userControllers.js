const User = require('../models/User');

exports.newUser = async (req, res) => {

    try {
        if(await User.findOne({ email: req.body.email })){
            return res.json({msg: "El correo ya esta registrado"});
        }
        const user = await new User(req.body)
        user.save();
        res.json({msg: "Usuario creado"})
    }
    catch(err){
        res.json({msg: "Error creando usuario"})
    }

}