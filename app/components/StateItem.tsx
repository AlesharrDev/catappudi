import { View, Text } from "react-native";
import React from "react";

interface StateItemProps {
  item: {
    mood: string;
    date: string;
    timestamp: number;
    message: string;
  };
}

const StateItem = ({ item }: StateItemProps) => {
  const moodColors = {
    Increible: "#4CAF50",
    Bien: "#8BC34A",
    Meh: "#FFC107",
    Mal: "#FF9800",
    Horrible: "#F44336",
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${formattedMinutes} ${ampm}`;
  };

  const timeCreated = item.timestamp ? formatTime(item.timestamp) : "";

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginVertical: 8,
        backgroundColor: "#f8f8f8",
        borderRadius: 30,
        borderLeftWidth: 5,
        borderLeftColor:
          moodColors[item.mood as keyof typeof moodColors] || "#6a3b4b",
      }}
    >
      <View>
        <Text style={{ fontSize: 12, color: "#666" }}>{item.date} </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}>
            {item.mood}
          </Text>
          <Text style={{ fontSize: 12, color: "#666" }}>{timeCreated}</Text>
        </View>
      </View>
      <Text style={{ marginBottom: 10, maxWidth: 150 }}>{item.message}</Text>
    </View>
  );
};

export default StateItem;