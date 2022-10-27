const Producto = require ("../models/productos.model")

let response ={
    msg:"",
    exito: false
}

// Nuevo Producto

exports.create = function(req,res){
    let producto = new Producto({
        id_producto: req.body.id_producto,
        nombre_producto: req.body.nombre_producto,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        descripcion: req.body.descripcion,
       
    })

    producto.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg ="Error al guardar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se guardo correctamente"
        res.json(response)
    })
}

//Encontrar productos

exports.find = function(req,res){
    
    Producto.find(function(err,productos){
        res.json(productos)
    })
}

//Encontrar 1 producto

exports.findOne = function(req,res){
    
    Producto.findOne({_id: req.params.id},function(err,producto){
        res.json(producto)
    })
}

//Actualizar datos producto

exports.update = function(req,res){
    let producto = ({
        id_producto: req.body.id_producto,
        nombre_producto: req.body.nombre_producto,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        descripcion: req.body.descripcion,
    })

    Producto.findByIdAndUpdate(req.params.id,{$set:producto},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg ="Error al modificar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se modifico correctamente"
        res.json(response)
    })
}

//Eliminar producto

exports.remove = function(req,res){
       Producto.findByIdAndRemove({_id:req.params.id},function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg ="Error al eliminar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se ha eliminado correctamente"
        res.json(response)
    })
}