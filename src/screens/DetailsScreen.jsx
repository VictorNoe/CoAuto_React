import React, { useEffect, useState } from "react";
import { StatusBar, ScrollView, StyleSheet, View } from "react-native";
import Carousel from "../components/Carousel";
import CarInfo from "../components/CarInfo";
import Comments from "../components/Coments";
import { getOneCar } from "../services/DetailsServices";

const DetailsScreen = ({ route }) => {
  const { car } = route.params;
  const [carData, setCarData] = useState(car);

  const fetchCarData = async () => {
    const data = await getOneCar(car.id);
    setCarData(data);
  };

  useEffect(() => {
    if (!carData) {
      fetchCarData();
    }
  }, [carData, car.id]);

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#EFF5FF"} />
      <Carousel images={carData.images} />
      <CarInfo info={carData} />
      <Comments />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFF5FF",
  },
});

export default DetailsScreen;
