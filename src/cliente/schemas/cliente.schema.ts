import * as mongoose from 'mongoose';
export const ClienteSchema = new mongoose.Schema({
    rut: String,
    rutchileno: String,
    nombre: String,
    apellido: String,
    telefono: String,
    sexo: String,
    email: String,
    direcciones: String,
});
