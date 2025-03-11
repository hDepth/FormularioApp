import { Image, Platform, View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import styles from '../../src/css/styles';

export default function App() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [valorOriginal, setValorOriginal] = useState('');
  const [porcentagem, setPorcentagem] = useState('');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState('');
  const [novoValor, setNovoValor] = useState(null);

  const calcularAumento = () => {
    const valor = parseFloat(valorOriginal);
    const aumento = parseFloat(porcentagem);

    if (!isNaN(valor) && !isNaN(aumento)) {
      const resultado = valor + (valor * aumento) / 100;
      setNovoValor(resultado.toFixed(2));
    } else {
      setNovoValor(null);
    }
  }; 
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Formulário!</ThemedText>
        <HelloWave />
      </ThemedView>
      {erro ? <Text style={styles.errorText}>{erro}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nomeProduto}
        onChangeText={setNomeProduto}
      />
<TextInput
        style={styles.input}
        placeholder="Valor original (R$)"
        keyboardType="numeric"
        value={valorOriginal}
        onChangeText={setValorOriginal}
      />

      <TextInput
        style={styles.input}
        placeholder="Porcentagem de aumento (%)"
        keyboardType="numeric"
        value={porcentagem}
        onChangeText={setPorcentagem}
      />

      <View style={styles.button}>
        <Button title="Calcular" onPress={calcularAumento} />
      </View>

      {resultado && <Resultado {...resultado} />}
    </ParallaxScrollView>
  );
}
