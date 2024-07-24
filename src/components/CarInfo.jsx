import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";

const CarInfo = ({ info }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{info.model}</Text>
          <Text style={styles.brand}>{info.brand}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{info.price}</Text>
          <View style={styles.ratingContainer}>
            <Icon
              name="star"
              size={16}
              color="#FFD700"
              style={styles.starIcon}
            />
            <Text style={styles.rating}>{info.average_rating}</Text>
          </View>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <IconM name="car-shift-pattern" size={24} color="#2570EB" />
          <Text style={styles.infoText}>{info.type}</Text>
        </View>
        <View style={styles.infoItem}>
          <IconM name="gas-station-outline" size={24} color="#2570EB" />
          <Text style={styles.infoText}>{info.fuel}</Text>
        </View>
        <View style={styles.infoItem}>
          <IconM name="calendar" size={24} color="#2570EB" />
          <Text style={styles.infoText}>{info.year}</Text>
        </View>
        <View style={styles.infoItem}>
          <IconM name="car-door" size={24} color="#2570EB" />
          <Text style={styles.infoText}>{info.doors} puertas</Text>
        </View>
      </View>

      <View style={styles.separator} />

      <Text style={styles.descriptionText}>Dimensiones</Text>
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <IconM name="aspect-ratio" size={24} color="#2570EB" />
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>{info.length}m</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>x</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>{info.height}m</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>x</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoText}>{info.width}m</Text>
        </View>
      </View>

      <Text style={styles.descriptionText}>Descripción</Text>
      <Text style={styles.description}>{info.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  brand: {
    fontSize: 18,
    color: "#555",
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: 22,
    color: "#007BFF",
    fontWeight: "bold",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  rating: {
    fontSize: 16,
    color: "#555",
  },
  separator: {
    height: 1,
    backgroundColor: "#E7E7E7",
    marginVertical: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  infoItem: {
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "justify",
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default CarInfo;
