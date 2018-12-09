import { ADD_ITEM } from './types';

//Se creo un caso inicial con 3 tareas
const initialState = {
    items: [
        {
            title: 'Hacer tarea de talleres móviles',
            description: 'Tarea de react-native',
            state: true
        },
        {
            title: 'Limpiar la casa',
            description: 'Limpiar porque hay arañas',
            state: false
        },
        {
            title: 'Ir al supermercado',
            description: 'Comprar leche y pan',
            state: false
        },
    ]
}

//En esta funcion que agrega un item, se cambio la parte del retorno del arreglo de items
function addItemToList(state, newItem) {
    state.items.push(newItem);
    return {
        ...state,
        items: state.items
    }
}

function reducer(state = initialState, action){
    switch(action.type){
        case ADD_ITEM:
            return addItemToList(state, action.newItem);
        default:
            return state;
    }
}

export default reducer;