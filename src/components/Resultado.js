import React from 'react';
import { View, Text } from 'react-native';
import styles from '../css/styles';

const Resultado = ({ nomeProduto, valorOriginal, porcentagem, novoValor, valorAumento }) => {
  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.resultadoText}>Produto: {nomeProduto}</Text>
      <Text style={styles.resultadoText}>Valor Original: R$ {valorOriginal}</Text>
      <Text style={styles.resultadoText}>Aumento: {porcentagem}%</Text>
      <Text style={styles.resultadoText}>Valor do Aumento: R$ {valorAumento}</Text>
      <Text style={styles.resultadoText}>Novo Valor: R$ {novoValor}</Text>
    </View>
  );
};

export default Resultado;