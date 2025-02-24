import mongoose from "mongoose";
import { getMesasService, agregarMesaService, editarMesaService } from "../services/mesa.js";

export const getMesasController = async (req,res) => {
    try {
        let mesas = await getMesasService();
        if(mesas.length ==0){
            return res.send('La bbdd esta vacia.')
        }
        return res.send(mesas);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al obtener las mesas' });
    }
}

export const agregarMesaController = async (req, res) => {
    const mesa = req.body;
    try {
        const mesaNueva = await agregarMesaService(mesa);
        return res.status(200).send({mensaje: 'Mesa agregada correctamente', Mesa: mesa});
        
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al agregar la mesa' });
    }
}

export const editarMesaController = async (req, res) => {
    const { id } = req.params;
    const mesa = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({mensaje: 'ID invalido'});
    }
    try {
        const mesaActualizada = await editarMesaService(id, mesa);
        if(!mesaActualizada){
            return res.status(404).send({ mensaje: `No se encontró ninguna mesa con ID ${id}`})
           }
            return res.status(200).send({ mensaje: 'La mesa ha sido editada correctamente', Mesa: mesaActualizada });
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al actualizar la mesa', error });
        
    }

}