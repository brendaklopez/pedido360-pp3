import { getMesasRepository, agregarMesaRepository, editarMesaRepository } from '../repository/mesa.js';

export const getMesasService = async () => {
    try {
        return getMesasRepository();
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al obteber los datos');
    }
}

export const agregarMesaService = async (mesa) => {
    try {
        const mesaNueva = await agregarMesaRepository(mesa);
        return mesaNueva;
    } catch (error) {
        console.error('Error en el Servicio: ', error);
        throw new Error('Error al aregegar la mesa');   
    }
}

export const editarMesaService = async (id, mesa) => {
    try {
        return editarMesaRepository(id, mesa);
    } catch (error) {
        console.error('Error en el service', error);
        throw new Error('Error al editar la mesa');
    }
    
}