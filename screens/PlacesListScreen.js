import React, { useEffect } from "react";
import { View, Text, StyleSheet, Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import CustomHeaderButton from "../components/HeaderButton";
import PlaceItem from "../components/PlaceItem";
import * as placesActions from "../store/places-action";

const PlacesListScreen = (props) => {
  const { route, navigation } = props;
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  useEffect(() => {
    navigation.setOptions({
      title: "All Places",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add Place"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => {
              navigation.navigate("NewPlace");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            navigation.navigate("PlaceDetail", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
