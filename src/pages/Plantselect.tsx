import React from "react";

import { View, Text, StyleSheet } from "react-native";
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

      <EnvironmentButton title="Cozinha" active />
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
});
