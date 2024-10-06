import React from 'react';
import DividirConta from './rotasTelas/telaDividirConta/DividirConta';
import LancarGastos from './rotasTelas/telaLancarGastos/LancarGastos';
import MostrarFaturaTotal from './rotasTelas/telaFaturaTotal/FaturaTotal';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const PilhaTelas = createStackNavigator();

  return (
    <NavigationContainer>
      <PilhaTelas.Navigator>


        <PilhaTelas.Screen name='Lançar Gastos' component={LancarGastos} />
        <PilhaTelas.Screen name='Fatura Total' component={MostrarFaturaTotal} />
        <PilhaTelas.Screen name='Dividir Conta' component={DividirConta} />
        
      </PilhaTelas.Navigator>
    </NavigationContainer>
  );
}
