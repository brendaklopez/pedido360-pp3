import mongoose from 'mongoose';

const UsuarioSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        contra: {
            type: String,
            required: true
        }
    }
);

export const Usario = mongoose.model('Usuario', UsuarioSchema )