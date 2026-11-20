import { View, Text, TextInput, StyleSheet } from "react-native";
import { reng } from "../.././constants/colors";
export const Email = ({info,text}) => {
  return (
    <>
      <View>
        <Text style={styles.email}>
          {info} <Text style={{ color: "#ec221f" }}>*</Text>
        </Text>
      </View>
      <View>
        <TextInput style={styles.emailInput} placeholder={text} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  emailInput: {
    paddingVertical: 14,
    paddingLeft: 16,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    marginTop: 8,
  },
   email:{
    color:"#616161",
    fontSize:18,
    marginRight:4,
  },
});
