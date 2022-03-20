import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailScreen = (props) => {
  const { route, navigation } = props;
  const { placeTitle, placeId } = route.params;
  useEffect(() => {
    navigation.setOptions({
      title: placeTitle,
    });
  }, [navigation]);
  return (
    <View>
      <Text>PlaceDetailScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
