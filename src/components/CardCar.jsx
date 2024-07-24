import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CardCar = ({ car, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: car.images[0] }} style={styles.image} />
          <View style={styles.ratingContainer}>
            <IconMaterialIcons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{car.average_rating}</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{car.model}</Text>
            <Text style={styles.brand}>{car.brand}</Text>
          </View>
          <Text style={styles.price}>{car.price}</Text>
        </View>
        <View style={styles.separator} />

        <View style={styles.iconsContainer}>
          <View style={styles.icon}>
            <IconMaterialCommunityIcons
              name="car-shift-pattern"
              size={24}
              color="#2570EB"
            />
            <Text>{car.type}</Text>
          </View>
          <View style={styles.icon}>
            <IconMaterialCommunityIcons
              name="gas-station-outline"
              size={24}
              color="#2570EB"
            />
            <Text>{car.fuel}</Text>
          </View>
          <View style={styles.icon}>
            <IconMaterialCommunityIcons
              name="calendar"
              size={24}
              color="#2570EB"
            />
            <Text>
              {car.year}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginHorizontal: 16,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    borderColor: "#E7E7E7",
    borderWidth: 1,
    height: 200,
    borderRadius: 16,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E7E7E7",
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    position: "absolute",
    top: 10,
    left: 10,
  },
  rating: {
    fontSize: 16,
    color: "#555",
    marginLeft: 5,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  textContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  brand: {
    fontSize: 16,
    color: "#888",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007bff",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#E7E7E7",
    marginVertical: 10,
  },
});

export default CardCar;
