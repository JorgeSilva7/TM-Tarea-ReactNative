/**
 * Componente Tarea, dipone de un checkbox,titulo y detalles de la tarea
 */
import React from 'react';
import { View, Alert, Text } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements'

class Task extends React.Component {
    //Para el checkbox, default false
    states = {
        checked: false
    }

    constructor(props) {
        super(props);
        this.states.checked = this.props.state;
    }

    render() {
        return (
            //Las 2 Views para que cada TASK se quede en un ROW
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        checkedColor='red'
                        checked={this.states.checked}
                        onPress={this.setChecked.bind(this)}
                    />
                    <Text style={{ marginTop: 15 }}>{this.props.title}</Text>
                    <Icon iconStyle={{ marginTop: 12, marginLeft: 20 }}
                        name='eye'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => this.showTask()} />
                </View>
            </View>
        )
    }

    //Funcion para mostrar titulo y detalles de la tarea en forma de alert, ademas se podría borrar la tarea
    showTask() {
        Alert.alert(
            this.props.title,
            this.props.description,
            [
                { text: 'Borrar Tarea*', onPress: () => console.log('Tarea borrada') },
                { text: 'OK', onPress: () => console.log('OK') },
            ],
            { cancelable: true }
        )
    }

    //Administra el checked del checkbox de la tarea
    setChecked() {
        this.setState({
            checked: !this.states.checked
        })

        this.states.checked = !this.states.checked
    }
}

export default Task
