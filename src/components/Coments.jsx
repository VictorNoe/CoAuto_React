import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Comments = () => {
  return (
    <View style={styles.container}>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.separatorText}>Comentarios (6)</Text>
        <View style={styles.separator} />
      </View>

      {[
        {
          username: "Jane Smith",
          date: "08 de agosto de 2024",
          comment:
            "El nuevo Tesla Model S es absolutamente impresionante. ¡El rendimiento es increíble!",
        },
        {
          username: "Carlos Rivera",
          date: "08 de agosto de 2024",
          comment:
            "Acabo de comprar el último Toyota Corolla, y es increíblemente confiable. ¡Además, tiene un gran rendimiento de combustible!",
        },
        {
          username: "Emily Johnson",
          date: "08 de agosto de 2024",
          comment:
            "No estoy impresionada con el último BMW Serie 3. La conducción se siente demasiado rígida para el uso diario.",
        },
        {
          username: "Daniel Wong",
          date: "08 de agosto de 2024",
          comment:
            "La Ford F-150 siempre ha sido mi camioneta preferida. Es potente, duradera y perfecta para trabajos pesados.",
        },
        {
          username: "Sofia Martinez",
          date: "08 de agosto de 2024",
          comment:
            "Tenía dudas sobre los autos eléctricos, pero después de conducir el Nissan Leaf, estoy convencida. Es suave y ecológico.",
        },
      ].map((item, index) => (
        <View key={index} style={styles.commentCard}>
          <View style={styles.commentContainer}>
            <Icon
              name="person-circle-outline"
              size={40}
              color="#007aff"
              style={styles.profilePicture}
            />
            <View style={styles.commentHeaderContainer}>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  separatorText: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: "#007aff",
  },
  commentCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  profilePicture: {
    marginRight: 10,
  },
  commentHeaderContainer: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 2,
  },
  date: {
    fontSize: 16,
    color: "#777",
  },
  comment: {
    color: "#333",
    textAlign: "justify",
    fontSize: 16,
  },
});

export default Comments;
