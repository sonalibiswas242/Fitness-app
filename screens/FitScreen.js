import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useContext } from "react";
import {
  PreventRemoveContext,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { FitnessItems } from "../Context";

const FitScreen = () => {
  const route = useRoute();
  //console.log(route.params);
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercises = route.params.exercises;
  const current = exercises[index];
  //console.log(current, " first exercise");
  const { completed, setCompleted, minutes, setMinutes, calories, setCalories, setWorkout, workout } = useContext(FitnessItems);
  console.log(completed,"completed exercise")
  return (
    <ScrollView style={styles.container}>
      <Image
        style={{ width: "100%", height: 370 }}
        source={{ uri: current.image }}
      />
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {current.name}
      </Text>

      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        x{current.sets}
      </Text>

      {index + 1 >= exercises.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            backgroundColor: "#ABC4FF",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            DONE
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, current.name])
            setWorkout(workout + 1)
            setWorkout(minutes + 2.5)
            setCalories(calories + 6.30)
            setTimeout(() => {
              setIndex(index + 1);
            }, 200);
          }}
          style={{
            backgroundColor: "#ABC4FF",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            DONE
          </Text>
        </Pressable>
      )}

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 40,
        }}
      >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");
            setTimeout(() => {
              setIndex(index - 1)
            }, 2000)
          }}
          style={styles.button1}>
          <Text style={styles.text1}>PREV</Text>
        </Pressable>

        {index + 1 >= exercises.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.button1}>
            <Text style={styles.text1}>SKIP</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Rest");
              setTimeout(() => {
                setIndex(index + 1);
              }, 200);
            }}
            style={styles.button1}>
            <Text style={styles.text1}>SKIP</Text>
          </Pressable>
        )}
      </Pressable>
    </ScrollView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E2EAFC",
    marginTop: 40,
  },

  button1: {
    backgroundColor: "#c1d3fe",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 120,
  },

  text1: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});