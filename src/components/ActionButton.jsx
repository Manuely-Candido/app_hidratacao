import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../constants/colors"

export function ActionButtons(){
   

    function acrescentar(){

    };

    function redefinir(){

    };

    return(
        <View>
            <Text>Adicionar Consumo:</Text>
            <View>
                <Button title="+250ml"
                style={styles.button}
                onPress={() => acrescentar}/>

                <Button title="+350ml"
                style={styles.button}
                />

                <Button title="+500ml"
                style={styles.button}
                />
           </View>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
    }
});