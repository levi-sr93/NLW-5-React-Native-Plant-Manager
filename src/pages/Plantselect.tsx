import React, { useEffect, useState } from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import { EnvironmentButton } from "../components/EnvironmentButton";

import { Header } from "../components/Header";
import { api } from "../services/api";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvironmentProps {
  key: string;
  title: string;
}

export function PlantSelect() {
  const [environment, setEnvironment] = useState<EnvironmentProps[]>([]);
  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get("/plants_environments");
      setEnvironment([{ key: "all", title: "Todos" }, ...data]);
    }

    fetchEnvironment();
  }, []);
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
          data={environment}
          // keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EnvironmentButton title={item.title} />}
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
