import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  ScrollView,
  RefreshControl,
  View,
} from "react-native";
import CardCar from "../components/CardCar";
import SearchBar from "../components/SearchBar";
import { getCars } from "../services/HomeServices";
import Filters from "../components/Filters";

const HomeScreen = ({ navigation }) => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Ninguno");

  const fetchCars = async () => {
    const carsData = await getCars();
    setCars(carsData);
    setFilteredCars(carsData);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCars(cars);
    } else {
      applyFilters(selectedFilter);
    }
  }, [searchTerm, selectedFilter]);

  const applyFilters = (filter) => {
    let filtered = cars;

    if (filter && filter !== "Ninguno") {
      if (filter === "Modelo") {
        filtered = filtered.filter((car) =>
          car.model.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      if (filter === "Marca") {
        filtered = filtered.filter((car) =>
          car.brand.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      if (filter === "Año") {
        filtered = filtered.filter((car) =>
          car.year.toString().includes(searchTerm)
        );
      }
      if (filter === "Tipo") {
        filtered = filtered.filter((car) =>
          car.type.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    }
    setFilteredCars(filtered);
  };

  const handleOnPress = (car) => {
    navigation.navigate("details", { car });
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchCars();
    setRefreshing(false);
  };

  return (
    <>
      <View style={styles.searchBarContainer}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setModalVisible={setModalVisible}
        />
      </View>
      <ScrollView
        style={{ backgroundColor: "#EFF5FF", paddingTop: 80 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <StatusBar barStyle={"dark-content"} backgroundColor={"#EFF5FF"} />
        {filteredCars.map((car, index) => (
          <CardCar key={index} car={car} onPress={() => handleOnPress(car)} />
        ))}
      </ScrollView>
      <Filters
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        applyFilters={applyFilters}
      />
    </>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "#EFF5FF",
  },
});

export default HomeScreen;
