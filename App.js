import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";

import Header from './components/Header'

const todosData = [
  { text: "buy coffee", key: "1" },
  { text: "create an app", key: "2" },
  { text: "play on switch", key: "3" },
];

export default function App() {
  const [todos, setTodos] = useState(todosData);
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* todo Form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    
  },
  list:{
    marginTop:24
  }
});
