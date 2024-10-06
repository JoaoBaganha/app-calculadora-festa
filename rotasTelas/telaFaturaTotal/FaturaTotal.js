import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MostrarFaturaTotal = ({ navigation, route }) =>{
    const { valorComida, valorBebida, valorTransporte, valorEntrada } = route.params;

    function trocarTela() {
        navigation.navigate('Dividir Conta', {valorComida, valorBebida, valorTransporte, valorEntrada});
    }

    return (
        <View style={styles.container}>
            <Text>Valor gasto com Comida: {valorComida} reais</Text>
            <Text>Valor gasto com Bebida: {valorBebida} reais</Text>
            <Text>Valor gasto com Transporte: {valorTransporte} reais</Text>
            <Text>Valor gasto com Entrada: {valorEntrada} reais</Text>
            <Text>-------------------------------------------</Text>
            <Text>Valor total: {(valorComida + valorBebida + valorTransporte + valorEntrada)} reais</Text>

            <br/>
            <Button
                onPress={trocarTela}
                title='Continuar'
            />
        </View>
    );
}

export default MostrarFaturaTotal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
