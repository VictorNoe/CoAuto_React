import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const SearchBar = ({ searchTerm, setSearchTerm, setModalVisible }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Icon name="search" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar automóviles"
          placeholderTextColor="#989898"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        {searchTerm.length > 0 && (
          <TouchableOpacity onPress={() => setSearchTerm("")}>
            <Icon name="close" style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="filter-list" style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 15,
    padding: 2,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingLeft: 10,
  },
  searchIcon: {
    padding: 10,
    color: "#989898",
    fontSize: 20,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  clearIcon: {
    padding: 10,
    color: "#989898",
    fontSize: 20,
  },
  filterButton: {
    backgroundColor: "#2570EB",
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
  filterIcon: {
    color: "#fff",
    fontSize: 20,
  },
});

export default SearchBar;
