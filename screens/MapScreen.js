import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const MapScreen = (props) => {
  const { route, navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      title: "All Places",
    });
  }, [navigation]);
  return (
    <View>
      <Text>MapScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MapScreen;
