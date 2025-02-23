import mongoose from 'mongoose';

const MesaSchema = mongoose.Schema(
    {
        numero: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            default: "disponible"
        }
    }
);

export const Mesa = mongoose.model('Mesa', MesaSchema )