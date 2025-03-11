// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Alert } from 'react-native';
// import styles from './src/css/styles';
// import Resultado from './src/components/Resultado';

// export default function App() {
//   const [nomeProduto, setNomeProduto] = useState('');
//   const [valorOriginal, setValorOriginal] = useState('');
//   const [porcentagem, setPorcentagem] = useState('');
//   const [resultado, setResultado] = useState(null);
//   const [erro, setErro] = useState('');

//   const calcularAumento = () => {
//     if (!nomeProduto  !valorOriginal  !porcentagem) {
//       setErro('Preencha todos os campos!');
//       return;
//     }

//     const valor = parseFloat(valorOriginal);
//     const aumento = parseFloat(porcentagem);

//     if (isNaN(valor) || isNaN(aumento)) {
//       setErro('Insira valores numéricos válidos!');
//       return;
//     }

//     setErro('');

//     const valorAumento = (valor * aumento) / 100;
//     const novoValor = valor + valorAumento;

//     setResultado({
//       nomeProduto,
//       valorOriginal: valor.toFixed(2),
//       porcentagem: aumento,
//       valorAumento: valorAumento.toFixed(2),
//       novoValor: novoValor.toFixed(2),
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Calculadora de Aumento</Text>

//       {erro ? <Text style={styles.errorText}>{erro}</Text> : null}

//       <TextInput
//         style={styles.input}
//         placeholder="Nome do Produto"
//         value={nomeProduto}
//         onChangeText={setNomeProduto}
//       />
// <TextInput
//         style={styles.input}
//         placeholder="Valor original (R$)"
//         keyboardType="numeric"
//         value={valorOriginal}
//         onChangeText={setValorOriginal}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Porcentagem de aumento (%)"
//         keyboardType="numeric"
//         value={porcentagem}
//         onChangeText={setPorcentagem}
//       />

//       <View style={styles.button}>
//         <Button title="Calcular" onPress={calcularAumento} />
//       </View>

//       {resultado && <Resultado {...resultado} />}
//     </View>
//   );
// }