import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import { EnvironmentButton } from "../components/EnvironmentButton";

import { Header } from "../components/Header";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function PlantSelect() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>Você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
          horizontal
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => <EnvironmentButton title={"item"} active />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.heading,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  environmentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
