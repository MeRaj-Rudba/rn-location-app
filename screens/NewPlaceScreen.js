import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import * as placeActions from "../store/places-action";

const NewPlaceScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };
  const dispatch = useDispatch();
  const { route, navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      title: "Add Places",
    });
  }, [navigation]);

  const savePlaceHandler = () => {
    dispatch(placeActions.addPlace(titleValue));
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;