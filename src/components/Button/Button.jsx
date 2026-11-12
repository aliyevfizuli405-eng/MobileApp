import { Text, Pressable, StyleSheet,T} from "react-native";
import { reng } from "../../colors";
import { fonts } from "../../fonts";



export const Button = ({ text, style }) => {
  return (
    <>
      <Pressable style={styles.button}>
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
