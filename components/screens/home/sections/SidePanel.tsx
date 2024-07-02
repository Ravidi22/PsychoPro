// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Dimensions,
//   Animated,
//   Easing,
//   TouchableOpacity,
//   FlatList,
//   ScrollView,
// } from "react-native";
// import { Text } from "@/components/theme/Themed";

// const { width, height } = Dimensions.get("window");

// interface SidePanelProps {
//   subjects: string[];
//   onSelect: (subject: string) => void;
// }

// const SidePanel = (props: SidePanelProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [animation] = useState(new Animated.Value(0));

//   const togglePanel = () => {
//     Animated.timing(animation, {
//       toValue: isOpen ? 0 : 1,
//       duration: 300,
//       easing: Easing.inOut(Easing.ease),
//       useNativeDriver: true,
//     }).start();
//     setIsOpen(!isOpen);
//   };

//   const translateX = animation.interpolate({
//     inputRange: [0, 1],
//     outputRange: [width / 2, 0],
//   });

//   const onSelect = (selected: string) => {
//     props.onSelect(selected);
//     togglePanel();
//   };

//   return (
//     <TouchableOpacity style={styles.container} onPress={togglePanel}>
//       <Animated.View style={[styles.panel, { transform: [{ translateX }] }]}>
//         {isOpen && (
//           <ScrollView
//             style={{
//               backgroundColor: "#FFA726",
//             }}
//           >
//             <Text style={styles.title}>נושאים</Text>
//             <FlatList
//               data={props.subjects}
//               renderItem={({ item }) => (
//                 <Text style={styles.listItem} onPress={() => onSelect(item)}>
//                   {item}
//                 </Text>
//               )}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           </ScrollView>
//         )}
//       </Animated.View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "flex-end",
//     backgroundColor: "#fff",
//     zIndex: 1,
//   },
//   panel: {
//     position: "absolute",
//     top: "50%",
//     right: 0,
//     height: height / 2,
//     width: width / 2,
//     backgroundColor: "#FFA726",
//     borderTopLeftRadius: width / 2,
//     borderBottomLeftRadius: width / 2,
//     overflow: "hidden",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 15,
//   },
//   listItem: {
//     width: "100%",
//     paddingVertical: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
// });

// export default SidePanel;
