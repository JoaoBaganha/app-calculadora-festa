import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const LancarGastos = ({ navigation }) => {
    const [valorGasto, setValorGasto] = useState(0); 
    const [categoriaGasto, setCategoriaGasto] = useState('');
    const [fraseUptade, setFraseUptade] = useState('');
    const [valorComida, setValorComida] = useState(0); 
    const [valorBebida, setValorBebida] = useState(0); 
    const [valorTransporte, setValorTransporte] = useState(0); 
    const [valorEntrada, setValorEntrada] = useState(0); 

    function adicionarGasto() {
        let valor = parseFloat(valorGasto);
        let categoria = categoriaGasto;

        if (categoria === 'comida') {
            setValorComida(valorComida + valor);
            setFraseUptade('Valor adicionado ao gasto de comida');
        } else if (categoria === 'bebida') {
            setValorBebida(valorBebida + valor);
            setFraseUptade('Valor adicionado ao gasto de bebida');
        } else if (categoria === 'transporte') {
            setValorTransporte(valorTransporte + valor);
            setFraseUptade('Valor adicionado ao gasto de transporte');
        } else if (categoria === 'entrada') {
            setValorEntrada(valorEntrada + valor);
            setFraseUptade('Valor adicionado ao gasto de entrada');
        } else {
            setFraseUptade('Digite uma categoria válida!');
        }
    }

    function trocarTela() {
        navigation.navigate('Fatura Total', { valorComida, valorBebida, valorTransporte, valorEntrada });
    }

    return (
        <View style={styles.container}>
            <Text>Valor do Gasto:</Text>
            <TextInput
                onChangeText={text => setValorGasto(text)}
                value={valorGasto}
                keyboardType="numeric"
                style={styles.input}
            />

            <Text>Categoria do Gasto:</Text>
            <Text>Digite "comida", "bebida", "transporte" ou "entrada":</Text>
            <TextInput
                onChangeText={text => setCategoriaGasto(text)}
                value={categoriaGasto}
                style={styles.input}
            />

            <Button
                onPress={adicionarGasto}
                title='Lançar Gasto'
            />

            <Text>{fraseUptade}</Text>

            <br />

            <Button
                onPress={trocarTela}
                title='CONTINUAR'
            />
        </View>
    );
}

export default LancarGastos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
    },
});
