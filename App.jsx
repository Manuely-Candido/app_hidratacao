import { useSate } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButton';

export default function App(){
  const GOAL = 2000;
  const [consumed, setConsumed] = useSate(0);

  // Função para acumular a quantidade ingerida
  const handleAddWater = (amount, onAdd) => {
    consumed = amount;
    setConsumed = consumed + onAdd;
  };

  // Função para zerar o contador
  const handleReset = () =>{
    setConsumed(0);
  };

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'auto'}/>
        {/* isso é uma props        banana é o nome do objeto */}
        {/* <View style={banana.container}> */}
        <View style={styles.content}>
          {/* <Text style={banana.texto}>SENAI</Text> */}
          <Header GOAL={GOAL}/>
          <WaterProgress consumed={1000} goal={GOAL}/>
          <ActionButtons /> 
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
