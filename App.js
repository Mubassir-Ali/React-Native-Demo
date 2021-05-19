import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

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
  const [person, setPerson] = useState({ name: "Mubassir", age: 28 });

  const [studentName, setStudentName] = useState(Data);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item=>item.id)}
        data={studentName}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />

      {/* <ScrollView>
    {studentName.map((item) => (
        <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
        </View>
      ))}

    </ScrollView> */}

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
  },
});
