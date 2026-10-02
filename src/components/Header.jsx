import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

export function Header( {meta} ){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Hidratação APP</Text>
            <Text style={styles.subtitle}>Meta Diária: {meta}ml</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginBottom: 24,
       
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.textMain,
    },
    subtitle:{
        fontSize: 14,
        color: COLORS.textMuted,
        marginTop: 4,
    },
});