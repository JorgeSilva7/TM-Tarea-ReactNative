/**
 * Componente INDEX, el cual abarca el header y la lista de tareas.
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Header, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListTasks from '../ListTasks';

const header_title = "ToDoList APP";

class TodoList extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Header
                    centerComponent={{ text: header_title, style: { color: '#fff', fontSize: 18 } }}
                />
                <Text style={styles.titleText} h1>To Do</Text>
                <Icon style={styles.iconApp} name='list' size={25} color={theme.colors.secondary} />
                <ListTasks />
                
            </ThemeProvider>
        );
    }
}


//Estilos
const theme = {
    colors: {
        primary: 'black',
        secondary: 'red'
    },
};

const styles = StyleSheet.create({
    titleText: {
        fontWeight: 'bold',
        color: theme.colors.secondary,
        textAlign: 'center',
    },
    iconApp: {
        textAlign: 'center'
    },
    addItemModal: {
        justifyContent: 'center',
        alignItems: 'center'
     }
  
})

export default TodoList