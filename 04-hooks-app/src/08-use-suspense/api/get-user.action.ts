export interface User {
    id: number,
    name: string,
    location: string,
    role: string
}

export const getUserAction = async (id: number) => {
    console.log('funcion llamada')
    await new Promise((res) => setTimeout(res, 2000));

        console.log('fUNCION RESOLVIO')
    return {
        id:  id,
        name: 'Federico Galup',
        location: 'Yerba Buena, Argentina',
        role: 'Desarrollador web'
    }
}