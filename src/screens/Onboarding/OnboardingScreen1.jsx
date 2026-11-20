import { View, Text, Image, StyleSheet } from "react-native";

import { reng } from "../../constants/colors";
import { Button } from "../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";

export const OnboardingScreen = () => {
    const navigation=useNavigation()
  return (
    <>
      <View style={styles.container}>
        <View style={styles.skipContainer}>
          <Text style={styles.skip}>skip</Text>
        </View>
        <View style={{display:"flex",alignItems:"center",marginTop:50}}>
            <Image source={require("./../../assets/images/onboard1.png")}/>
        </View>
        <View style={styles.texts}>
            <Text style={{fontSize:20,fontWeight:600,textAlign:"center",color:reng.primaryText,marginTop:48,marginBottom:10,paddingHorizontal:40}}>Discover your next favourite restaurant</Text>
            <Text style={{color:reng.secondaryText,textAlign:"center",fontSize:16,paddingHorizontal:40}}>Find the best spots around you — from hidden gems to crowd favourites, all in one place.</Text>
        </View>
        <View style={{paddingHorizontal:16,marginTop:100}}>
            <Button text="Continue"  callback={()=>navigation.navigate("Ob2")}/>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  skip:{
    color:reng.secondaryColor,
    fontSize:18,
    fontWeight:500
  },
  skipContainer:{
    display:"flex",
    alignItems:"flex-end",
    paddingVertical:15,
    paddingHorizontal:16
  },
  texts:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  }
});
