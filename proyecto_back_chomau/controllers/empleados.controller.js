const Empleado = require ("../models/empleados.model")

let response ={
    msg:"",
    exito: false
}

// Nuevo empleado

exports.create = function(req,res){
    let empleado = new Empleado({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    empleado.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg ="Error al guardar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se guardo correctamente"
        res.json(response)
    })
}

//Encontrar empleado

exports.find = function(req,res){
    
    Empleado.find(function(err,empleados){
        res.json(empleados)
    })
}

//Encontrar 1 empleado

exports.findOne = function(req,res){
    
    Empleado.findOne({_id: req.params.id},function(err,empleado){
        res.json(empleado)
    })
}

//Actualizar datos empleado

exports.update = function(req,res){
    let empleado = ({
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    Empleado.findByIdAndUpdate(req.params.id,{$set:empleado},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg ="Error al modificar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se modifico correctamente"
        res.json(response)
    })
}

//Eliminar empleado

exports.remove = function(req,res){
       Empleado.findByIdAndRemove({_id:req.params.id},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg ="Error al eliminar el empleado"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se ha eliminado correctamente"
        res.json(response)
    })
}