import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

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

  const [studentName, setStudentName] = useState(Data);

  return (
    <View style={styles.container}>

    <ScrollView>
    {studentName.map((item) => (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      ))}

    </ScrollView>
  

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "pink",
    padding:30,
    marginTop:24,
    fontSize:24,
    textAlign:"center",
    borderRadius:12
    
  },
});
