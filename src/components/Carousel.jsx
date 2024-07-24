import React, { useState, useRef } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const data = images.map((image, index) => ({
    key: String(index),
    image,
  }));
  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    );
  };

  const renderThumbnailItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setActiveIndex(index);
          flatListRef.current.scrollToIndex({ animated: true, index: index });
        }}
      >
        <View
          style={[
            styles.thumbnailItem,
            activeIndex === index && styles.activeThumbnail,
          ]}
        >
          <Image source={{ uri: item.image }} style={styles.thumbnailImage} />
        </View>
      </TouchableOpacity>
    );
  };

  const onViewRef = useRef((viewableItems) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index);
    }
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.key}
        onScrollToIndexFailed={() => {}}
        ref={flatListRef}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
      />
      <FlatList
        data={data}
        renderItem={renderThumbnailItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        style={styles.thumbnailContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    borderRadius: 10,
    height: 200,
    resizeMode: "cover",
  },
  thumbnailContainer: {
    margin: 30,
  },
  thumbnailItem: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 5,
    overflow: "hidden",
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  activeThumbnail: {
    borderWidth: 2,
    borderColor: "#2570EB",
  },
});

export default Carousel;
