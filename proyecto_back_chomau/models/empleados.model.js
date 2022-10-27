const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosSchema = new Schema ({
    nombres:{type: String, require:true, max:80},
    apellidos:{type: String, require:true, max:80},
    telefono:{type: String, require:true, max:15},
    mail:{type: String, require:false, max:70},
    direccion:{type: String, require:false, max:150},
})


module.exports = mongoose.model("empleado", EmpleadosSchema);

