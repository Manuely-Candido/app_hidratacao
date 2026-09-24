import { View, Text, StyleSheet } from "react-native";


export function Header(){
    return(
        <View>
            <Text style={style.texto}>Hidratação APP</Text>
            <Text style={style.texto}>Meta Diária: 2000ml</Text>
        </View>
    )
};

const style = StyleSheet.create({
    texto:{
        backgroundColor: 'pink',
        justifyContent: 'center',
       
    }
})