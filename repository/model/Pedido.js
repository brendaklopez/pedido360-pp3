import mongoose from 'mongoose';

const pedidoSchema = mongoose.Schema(
    {
        mesa:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Mesa',
            required: true
        },
        descripcion: {
            type:String,
            required: true
        },
         mesero: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true
    },
        total: Number,
        estado:{
            type: String,
            enum:["pendiente", "preparando", "en 15 min estará listo", "listo para servir"],
            default: "pendiente"
        },
        creadoEn:{
            type: Date,
            default:Date.now
            }
        },   
    { timestamps: true }
    );
export const Pedido = mongoose.model('Pedido', pedidoSchema)