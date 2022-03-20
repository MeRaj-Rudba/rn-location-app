import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import * as Location from "expo-location";
import Colors from "../constants/Colors";

const LocationPicker = (props) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [pickedLocation, setPickedLocation] = useState();

  const getLocationHandler = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    try {
      setIsFetching(true);
      let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      console.log(location);
      console.log(pickedLocation);
    } catch (error) {
      Alert.alert(
        "Could not fetch location!",
        "Please try again later or pick a location on the map.",
        [{ text: "Okay" }]
      );
    }
    setIsFetching(false);
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {isFetching ? (
          <ActivityIndicator size="large" color={Colors.primary} />
        ) : (
          <Text>No location chosen yet!</Text>
        )}
      </View>
      <Button
        title="Get User Location"
        color={Colors.primary}
        onPress={getLocationHandler}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default LocationPicker;
// import React, { useState } from "react";
// import {
//   View,
//   Button,
//   Text,
//   ActivityIndicator,
//   Alert,
//   StyleSheet,
// } from "react-native";
// import * as Location from "expo-location";
// import * as Permissions from "expo-permissions";

// import Colors from "../constants/Colors";

// const LocationPicker = (props) => {
//   const [isFetching, setIsFetching] = useState(false);
//   const [pickedLocation, setPickedLocation] = useState();

//   // const verifyPermissions = async () => {
//   //   const result = await Permissions.askAsync(Permissions.LOCATION);
//   //   if (result.status !== "granted") {
//   //     Alert.alert(
//   //       "Insufficient permissions!",
//   //       "You need to grant location permissions to use this app.",
//   //       [{ text: "Okay" }]
//   //     );
//   //     return false;
//   //   }
//   //   return true;
//   // };

//   const getLocationHandler = async () => {
//     // const hasPermission = await verifyPermissions();
//     // if (!hasPermission) {
//     //   return;
//     // }

//     try {
//       setIsFetching(true);
//       const location = await Location.getCurrentPositionAsync({
//         timeout: 5000,
//       });
//       setPickedLocation({
//         lat: location.coords.latitude,
//         lng: location.coords.longitude,
//       });
//     } catch (err) {
//       Alert.alert(
//         "Could not fetch location!",
//         "Please try again later or pick a location on the map.",
//         [{ text: "Okay" }]
//       );
//     }
//     setIsFetching(false);
//   };

//   return (
//     <View style={styles.locationPicker}>
//       <View style={styles.mapPreview}>
//         {isFetching ? (
//           <ActivityIndicator size="large" color={Colors.primary} />
//         ) : (
//           <Text>No location chosen yet!</Text>
//         )}
//       </View>
//       <Button
//         title="Get User Location"
//         color={Colors.primary}
//         onPress={getLocationHandler}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   locationPicker: {
//     marginBottom: 15,
//   },
//   mapPreview: {
//     marginBottom: 10,
//     width: "100%",
//     height: 150,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default LocationPicker;
