import { getMesasService, agregarMesaService } from "../services/mesa.js";

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