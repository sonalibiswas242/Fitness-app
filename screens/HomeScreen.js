import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, {useContext} from "react";
import FitnessCards from "../components/FitnessCards";
import { FontAwesome5 } from '@expo/vector-icons';
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const {  minutes, calories, workout } = useContext(FitnessItems);
  return (
    <View style={styles.container}>
      
      <View style={{flexDirection:"row", alignItems: "center", paddingLeft: 100, paddingRight:100}}>
      <FontAwesome5 name="dumbbell" size={28} color="black" />
        <Text style={{textAlign: "center", color:"black", fontWeight:"bold", fontSize:18, paddingTop:10, paddingBottom:10}}>  WORKOUTS</Text>
      </View>

      <View style={{flexDirection:"row", alignItems: "center", justifyContent:"space-between", marginTop:12, marginBottom: 16, paddingHorizontal: 30}}>
        <View >
          <Text style={styles.texts}>{workout}</Text>
          <Text style={styles.texts1}>WORKOUTS</Text>
        </View>

        <View>
          <Text style={styles.texts}>{calories}</Text>
          <Text style={styles.texts1}>KCAL</Text>
        </View>

        <View>
          <Text style={styles.texts}>{minutes}</Text>
          <Text style={styles.texts1}>MINS</Text>
        </View>
      </View>
      <FitnessCards/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#ABC4FF',
        padding: 7,
        height: 120,
        width: "100%",
        marginTop: 40,
      },

      texts: {
        textAlign: "center", 
        fontWeight:"bold", 
        color:"white",
      },

      texts1: {
        textAlign: "center",  
        color:"white",
      }
});