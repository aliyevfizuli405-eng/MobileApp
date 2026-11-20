import { Text, Pressable, StyleSheet,T} from "react-native";
import { reng } from "../../constants/colors";
import { fonts } from "../../constants/fonts";



export const Button = ({ text, style,callback}) => {
  return (
    <>
      <Pressable style={styles.button} onPress={callback}> 
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: 600,
            fontSize: 20,
          }}
        >
          {text}
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: reng.primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 8,
  },
});
