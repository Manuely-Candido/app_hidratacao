import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../constants/colors"

export function DicaSaude(){

    return(
        <View style={styles.card}>
            <Text style={styles.title}>
                Dica De Saúde 💡
            </Text>
            <Text style={styles.text}>
                 A água facilita a digestão, já que ela é necessária em todo esse processo para a produção de saliva, do bolo alimentar, do suco gástrico etc. 
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
  card: {
        backgroundColor: COLORS.cardBg,
        borderRadius: 16,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 24,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.textMain,
    },
    text:{
        fontSize: 12
    }
});