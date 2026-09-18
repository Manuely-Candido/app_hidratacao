import { useSate } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from './src/constants/colors';
import { Header } from './src/components/Header';
import { WaterProgress } from './src/components/WaterProgress';
import { ActionButtons } from './src/components/ActionButton';

export default function App(){
  // const GOAL = 2000;
  // const [consumed, setConsumed] = useSate(0);

  // // Função para acumular a quantidade ingerida
  // const handleAddWater = (amount) => {

  // };

  // // Função para zerar o contador
  // const handleReset = () =>{

  // };

  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>SENAI</Text>
          <Header />
          <ActionButtons />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
