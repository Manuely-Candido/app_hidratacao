import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../constants/colors"

export function AjusteMeta({ onAddi, onDim, meta }){

    return(
        <View style={styles.card}>
            <Text>Ajustar Meta Diária:</Text>

            <View style={styles.buttonRow}>
                <Pressable style={styles.button} onPress={() => onDim(250)}>
                    <Text style={styles.buttonText}>-250 ml</Text>
                </Pressable>

                <Text style={styles.metaText}>{meta}ml</Text>
            
                <Pressable style={styles.button} onPress={() => onAddi(250)}>
                    <Text style={styles.buttonText}>+250 ml</Text>
                </Pressable>
            </View>
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
        marginBottom: 24,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textMain,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16,
  },
  button: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  metaText:{
    color: COLORS.textMain,
    fontWeight: 'bold',
    fontSize: 18,
  }
});