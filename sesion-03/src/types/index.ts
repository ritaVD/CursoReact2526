export interface Plato{
    id: number;
    nombre: string;
    descripcion: string;
    origen: string;
    calorias: number;
    ingredientes: string[];
    imagen: string;
}

export const API_CONFIG= {
    //htpp://192.168.50.120:1494
    BASE_URL=`${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_PORT}`
    ENDPOINTS: {
        PLATOS: '/api/platos',
        STATS: '/stats'
    }
}