import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButton';
import { AjusteMeta } from './src/components/Meta';
import { DicaSaude } from './src/components/Saude';

export default function App(){
  // const GOAL = 2000;
  const [consumed, setConsumed] = useState(0);

  const [meta, setMeta] = useState(0)

  // Função para acumular a quantidade ingerida
  // Ele pega o ml, consulta a memoria que está, e depois calcula a memória mais o ml
  const handleAddWater = (ml) => {
    setConsumed((memoria) => memoria + ml);
  };

  // Função para zerar o contador
  const handleReset = () => {
    setConsumed(0);
  };

  const handleAddMeta = (valor) => {
    setMeta(meta + valor)
  }

  const handleDimMeta = (valor) => {
    setMeta(Math.max(0, meta - valor))
  }

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'auto'}/>
        {/* isso é uma props        banana é o nome do objeto */}
        {/* <View style={banana.container}> */}
        <View style={styles.content}>
          {/* <Text style={banana.texto}>SENAI</Text> */}
          <Header goal ={meta}/>
          <AjusteMeta meta={meta} onAddi={handleAddMeta} onDim={handleDimMeta}/>
          <WaterProgress consumed={consumed} goal={meta}/>
          <ActionButtons onAdd={handleAddWater} onReset={handleReset}/> 
          <DicaSaude/>
        </View> 
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});













// objeto          StyleSheet - componente       create - método
// const banana = StyleSheet.create({
//   container:{
//     height: '100%',
//     backgroundColor:'green',
//     justifyContent: 'center',
//     alignItems: 'center',
    
//   },
//   texto:{
//     color: 'white',
//     fontWeight: '700'
//   },
// })
