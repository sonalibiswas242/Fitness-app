import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ScrollView,
  } from "react-native";
  import React, { useContext } from "react";
  import { useNavigation, useRoute } from "@react-navigation/native";
  import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../Context";
import { FontAwesome } from '@expo/vector-icons';

  const WorkoutScreen = () => {
    const route = useRoute();
    //console.log(route.params);
    const navigation = useNavigation();
    const { completed, setCompleted,} = useContext(FitnessItems);
    return (
      <>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
          <Image
            style={{ width: "100%", height: 210 }}
            source={{ uri: route.params.image }}
          />
          <Ionicons
            onPress={() => navigation.goBack()}
            style={{ position: "absolute", top: 20, left: 30 }}
            name="arrow-back-circle"
            size={32}
            color="#ABC4FF"
          />
  
          {route.params.exercises.map((item, index) => {
            return (
              <Pressable
                style={{
                  margin: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 7,
                }}
                key={index}
              >
                <Image
                  style={{ width: 90, height: 90 }}
                  source={{ uri: item.image }}
                />
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold", width:170, }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 15, color: "gray" }}>
                    {" "}
                    x {item.sets}
                  </Text>
                </View>

                {completed.includes(item.name) ? (
                  <FontAwesome style={{marginLeft:40}} name="check-circle" size={24} color="#ABC4FF" />
                ) : (
                  null
                )}
              </Pressable>
            );
          })}
        </ScrollView>
  
        <Pressable
        onPress={() => {
          navigation.navigate("Fit",{
            exercises: route.params.exercises,
            })
            setCompleted([]);
        }}
          style={{
            backgroundColor: "#ABC4FF",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginVertical: 10,
            borderRadius: 6,
            width: "90%",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              fontWeight: "600",
            }}
          >
            START
          </Text>
        </Pressable>
      </>
    );
  };
  
  export default WorkoutScreen;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#E2EAFC",
      marginTop: 40,
    },
  });