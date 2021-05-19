import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Data = [
  { name: "ali", key: 1 },
  { name: "bilal", key: 2 },
  { name: "haris", key: 3 },
  { name: "hamad", key: 4 },
  { name: "Mohsin", key: 5 },
  { name: "Usman", key: 6 },
  { name: "Inzamam", key: 7 },
  { name: "Yasir", key: 8 },
];

export default function App() {
  const [person, setPerson] = useState({ name: "Mubassir", age: 28 });

  const [studentName, setStudentName]=useState(Data)

  return (
    <View style={styles.container}>
      <Text>Enter Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g Ali"
        onChangeText={(val) => setPerson({ name: val, age: person.age })}
      />

      <Text>Enter your Age</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g 27"
        keyboardType="numeric"
        onChangeText={(val) => setPerson({ age: val, name: person.name })}
      />

      <Text>
        My name is {person.name}, I am {person.age} year old{" "}
      </Text>







      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop:40,
    // paddingHorizontal:20
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    width: 200,
    paddingHorizontal: 8,
    paddingVertical: 2,
    textAlign: "center",
  },
});
