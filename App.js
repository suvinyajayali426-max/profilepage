import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const handleAdd = () => {
    Alert.alert("Add", "Add button pressed");
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
      />

      <SafeAreaView style={styles.safeArea}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Profile</Text>
        </View>

        {/* Profile Content */}
        <View style={styles.content}>

          {/* Profile Avatar */}
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarEmoji}>👨🏻‍💼</Text>

              {/* Green Tick */}
              <View style={styles.tickContainer}>
                <Ionicons
                  name="checkmark"
                  size={25}
                  color="white"
                />
              </View>
            </View>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Name */}
          <View style={styles.infoSection}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Suvinya</Text>
          </View>

          {/* Email */}
          <View style={styles.infoSection}>
            <Text style={styles.label}>Email</Text>

            <View style={styles.row}>
              <Ionicons
                name="mail"
                size={18}
                color="#000"
                style={styles.icon}
              />

              <Text style={styles.value}>
                suvinya.w@nsbm.ac.lk
              </Text>
            </View>
          </View>

          {/* Points */}
          <View style={styles.infoSection}>
            <Text style={styles.label}>Points</Text>

            <View style={styles.row}>
              <Ionicons
                name="star"
                size={18}
                color="#000"
                style={styles.icon}
              />

              <Text style={styles.value}>0</Text>
            </View>
          </View>

        </View>

        {/* Floating Add Button */}
        <TouchableOpacity
          style={styles.fab}
          onPress={handleAdd}
          activeOpacity={0.8}
        >
          <Ionicons
            name="add"
            size={28}
            color="#ffffff"
          />
        </TouchableOpacity>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f2f2",
  },

  safeArea: {
    flex: 1,
  },

  // Header
  header: {
    height: 58,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",

    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  headerTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },

  // Main content
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 16,
  },

  // Avatar
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,

    backgroundColor: "#ffffff",

    borderWidth: 1,
    borderColor: "#e5e5e5",

    alignItems: "center",
    justifyContent: "center",

    position: "relative",
  },

  avatarEmoji: {
    fontSize: 57,
  },

  // Green check
  tickContainer: {
    position: "absolute",

    right: 2,
    bottom: 8,

    width: 30,
    height: 30,

    borderRadius: 15,

    backgroundColor: "#00e676",

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 2,
    borderColor: "#ffffff",
  },

  // Horizontal line
  divider: {
    height: 1,
    backgroundColor: "#333333",
    width: "100%",
    marginBottom: 12,
  },

  // Information
  infoSection: {
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111111",
    marginBottom: 6,
  },

  value: {
    fontSize: 14,
    color: "#333333",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    marginRight: 8,
  },

  // Floating Action Button
  fab: {
    position: "absolute",

    right: 16,
    bottom: 18,

    width: 52,
    height: 52,

    borderRadius: 26,

    backgroundColor: "#000000",

    alignItems: "center",
    justifyContent: "center",

    elevation: 7,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
});