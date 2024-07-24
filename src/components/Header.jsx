export default function Header(title) {
  return {
    headerShown: true,
    title: title,
    headerStyle: {
      backgroundColor: "#EFF5FF",
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 16,
    },
    headerTitleAlign: "center",
  };
}
