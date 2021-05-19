import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Data = [
  { name: "ali", id: "1" },
  { name: "bilal", id: "2" },
  { name: "haris", id: "3" },
  { name: "hamad", id: "4" },
  { name: "Mohsin", id: "5" },
  { name: "Usman", id: "6" },
  { name: "Inzamam", id: "7" },
  { name: "Yasir", id: "8" },
];

export default function App() {
  

  const [person, setPerson] = useState(Data);
const pressHandler=(id)=>{
  console.log(id);
  setPerson((prevPerson)=>{
    return prevPerson.filter(person=>person.id !=id)
  })
}
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={person}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

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
    padding: 30,
    marginTop: 24,
    fontSize: 24,
    textAlign: "center",
    borderRadius: 12,
    marginHorizontal: 24,
  },
});
