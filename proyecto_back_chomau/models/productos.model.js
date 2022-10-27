const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema ({
    id_producto:{type: Number, require:true, max:60},
    nombre_producto:{type: String, require:true, max:100},
    precio:{type: Number, require:true, max:200000},
    cantidad:{type: Number, require:true, max:100},
    descripcion:{type: String, require:false, max:150},
})


module.exports = mongoose.model("producto", ProductosSchema);