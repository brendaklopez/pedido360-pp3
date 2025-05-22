import mongoose from 'mongoose';

const MesaSchema = mongoose.Schema(
    {
        numero: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            enum: ['libre', 'ocupada', 'reservada', 'mantenimiento'],
            default: 'libre'
        }
    }
);

export const Mesa = mongoose.model('Mesa', MesaSchema )