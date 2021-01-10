import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2021);

  const [dayLive, setDayLive] = useState(20);

  const dateNow =
    new Date(`${year}, ${month}, ${day}`) == "Invalid Date"
      ? 0
      : new Date(year, month, day).getTime();
  console.log(dateNow);
  let result =
    (new Date().getTime() - (dateNow + dayLive * 24 * 60 * 60 * 1000)) /
    (24 * 60 * 60 * 1000);

  let input = "";

  if (result > 0) {
    input = `Товар просрочен уже ${Math.floor(
      result * 24
    )} час (${result.toFixed(2)} день)`;
  } else {
    input = `До окончания срока осталось ${Math.floor(Math.abs(result))} дня`;
  }

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
      <TextInput
        style={styles.input}
        onChangeText={(value) => setDayLive(+value)}
      />
      <Text>{input}</Text>
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
