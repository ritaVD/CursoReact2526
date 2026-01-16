/**
 * 
 */
// api que hara un fetching a mi api para traer todos los platos
export interface Plato{
    id: number;
    nombre: string;
    descripcion: string;
    origen: string;
    calorias: number;
    ingredientes: string[];
    imagen: string;
}
export const fetchPlatos = async (): Promise<Plato[]>=> {
    try {
        const response = await fetch('https://192.168.50.120/1492/api');
        if(!response.ok){
            throw new Error ('Error en la respuesta de la API');
        }
        return await response.json();
    
    }catch (error) {
        console.log(error)
        return [];
    }
   

}