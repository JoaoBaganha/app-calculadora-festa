import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const DividirConta = ({ route }) => {
    const { valorComida, valorBebida, valorTransporte, valorEntrada } = route.params;
    const valorDaConta = valorComida + valorBebida + valorTransporte + valorEntrada;

    const [numeroDePessoas, setNumeroDePessoas] = useState(1);
    const [precoCouvert, setPrecoCouvert] = useState(0);
    const [totalConta, setTotalConta] = useState(0);
    const [valorPorPessoa, setValorPorPessoa] = useState(0);

    function calcularTotalConta() {
        const valor = parseFloat(valorDaConta);
        const couvert = parseFloat(precoCouvert);
        const pessoas = parseFloat(numeroDePessoas);

        const valorTotal = (valor + couvert) * 1.1;
        const valorDividido = valorTotal / pessoas;

        setTotalConta(valorTotal.toFixed(2));
        setValorPorPessoa(valorDividido.toFixed(2));
    }

    return (
        <View style={styles.container}>
            <Text>VALOR DA CONTA: {valorDaConta}</Text>
            <br/>
            <Text>Número de pessoas:</Text>
            <TextInput
                onChangeText={text => setNumeroDePessoas(text)}
                value={numeroDePessoas}
                keyboardType="numeric"
                style={styles.input}
            />

            <Text>Preço do couvert:</Text>
            <TextInput
                onChangeText={text => setPrecoCouvert(text)}
                value={precoCouvert}
                keyboardType="numeric"
                style={styles.input}
            />

            <Button
                onPress={calcularTotalConta}
                title='Calcular Total'
            />
            <br/>
            <Text>Total da conta (com 10%): {totalConta}</Text>
            <br/>
            <Text>Valor por pessoa: {valorPorPessoa}</Text>
        </View>
    );
}

export default DividirConta;

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
