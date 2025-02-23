import { Mesa } from './model/Mesa.js';
import { connect } from '../database/db.js';

connect();

export const getMesasRepository = async () => {
    try {
        const mesa = await Mesa.find();
        
        return mesa;

    } catch (error) {
        console.error('Error en el Repositorio: ', error);
        throw new Error('Error en la consulta a la base de datos');
    }
}

export const agregarMesaRepository = async (nuevaMesa) => {
    try {
        const mesaNueva = new Mesa(nuevaMesa);
        await mesaNueva.save();
        console.log(mesaNueva)        
    } catch (error) {
        console.error('Error en el Repositorio: ', error);
        throw new Error('Error al agregar mesa');
    }    
}