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

export const editarMesaRepository = async (id, mesa) => {
    try {
        const mesaEditada = await Mesa.findByIdAndUpdate(id, mesa, { new: true})
        if (!mesaEditada) {
            console.log('mesa no encontrada')
        } else {
            console.log('Se edito la mesa: ' + id);
            return mesaEditada;
            
        }
    } catch (error) {
        console.log('Error en el repo',error)
        throw new Error('Error al editar la mesa: ' + id + 'en la base de datos');

    }
    
}