import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import moment from "moment";

export default function App() {
  const dateNow = new Date().getTime();

  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const dateBorn = new Date({ day }, { month }, { year });

  function handleInputChange(e) {
    setState(e.value);
  }
  console.log(moment([year, month, day]).fromNow(true));

  return (
    <View style={styles.container}>
      <Text>Введите дату производства товара:</Text>
      <View style={styles.date}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setDay(+value)}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setMonth(+value)}
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setYear(+value)}
        />
      </View>
      <Text>Введите срок годности (в сутках):</Text>
      <TextInput style={styles.input} />
      <Text>До окончания срока осталось {dateNow}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginTop: "5px",
    borderColor: "#000",
    borderWidth: "1px",
    width: "30px",
    marginLeft: "10px",
  },
  date: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
