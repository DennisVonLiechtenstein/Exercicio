import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from "./componentes/Menu/StackNavigator";
import BottomTabNavigator from "./componentes/Menu/TabNavigator";

import { View, Text, StyleSheet } from "react-native";


import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";
import UsuarioLogado from "./componentes/UsuarioLogado";
import Botao from "./componentes/Botao";
import Contador from "./componentes/Contador";
import DigiteSeuNome from "./componentes/DigiteSeuNome";
import DimensoesFixas from "./componentes/DimensoesFixas";
import Mega from "./componentes/MegaSena/Mega";
import Calculadora from "./componentes/Calculadora/Calculadora";

export default class App extends Component {
  render() {
   return(
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    );
  }
}


/*export default class App extends Component {
    render() {
      return (

        <View style={estilos.container}>

        {/*<Simples texto='Dennis Von Liecthtenstein' /> 
           <Simples texto='dempsey roll'/>
         <Frag titulo="Estoque" 
              subTitulo="Formulario de Cadastro" /> 
         <ParImpar numero={9}  /> 8 
        <Familia>
            <Membro nome="Matusálem" sobreNome="Jhones"/>
            <Membro nome="Maomé" sobreNome="Jhones"/> 
        </Familia> 
           {/*<Familia>
            <Membro nome="Joe" sobreNome="Yabuki"/>
            <Membro nome="Rikishi" sobreNome="Toru"/> 
            </Familia> 
            <Familia>
              <Membro nome="Nishi" sobreNome="Mammoth" />
              <Membro nome="Takamura" sobreNome="Mamoro" />
      </Familia>
        <UsuarioLogado usuario={ {nome:'IronMaike', email:'iron@gmail.com'} } /> 
        <UsuarioLogado usuario={ {nome:'Maguila'} } />
        <UsuarioLogado usuario={ {email:'maquilador@gmail.com'} } />        
        <UsuarioLogado usuario={ {} } />
        <UsuarioLogado usuario={ null } /> 
        <Contador valorInicial={0} />         
        <DigiteSeuNome /> 
        <DimensoesFixas /> 
        <Mega qtdeNumeros={7} />  

        <Calculadora />

      </View>

    );
  }
}*/

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonte: {
    fontSize: 50,
  },
});