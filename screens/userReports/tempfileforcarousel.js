// carousel card file

// import React from 'react'
// import { View, Text, StyleSheet, Dimensions, Image } from "react-native"

// export const SLIDER_WIDTH = Dimensions.get('window').width -50
// export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

// export const CarouselCardItem = ({ item, index }) => {
//   return (
//     <View style={styles.container} key={index}>
//       <Image
//         source={{ uri: item.imgUrl }}
//         style={styles.image}
//       />
//       <Text style={styles.header}>{item.title}</Text>
//       <Text style={styles.body}>{item.body}</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     borderRadius: 15,
//     width: ITEM_WIDTH,
//     paddingBottom: 10,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.29,
//     shadowRadius: 4.65,
//     elevation: 7,
//   },
//   image: {
//     width: ITEM_WIDTH,
//     height: 100,
//     borderTopEndRadius: 15,
//     borderTopStartRadius: 15,
//   },
//   header: {
//     color: "#222",
//     fontSize: 28,
//     fontWeight: "bold",
//     paddingLeft: 20,
//     paddingTop: 20
//   },
//   body: {
//     color: "#222",
//     fontSize: 18,
//     paddingLeft: 20,
//     paddingLeft: 20,
//     paddingRight: 20
//   }
// })

/// carousel file

// import React, { useState, useRef} from 'react'
// import { StyleSheet, View } from "react-native"
// import Carousel, { Pagination } from 'react-native-snap-carousel'
// import { CarouselCardItem, SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCard.js'
// import { mockCardData } from '../mock_data/MockCardData.js'

// export default function CarouselCards() {
//   const isCarousel = useRef(null)
//   const [index, setIndex] = useState(0)
//   return (
//     <View style={styles.carouselContainer}>
//       <Carousel
//         layout="default"
//         layoutCardOffset={9}
//         ref={isCarousel}
//         data={mockCardData}
//         renderItem={CarouselCardItem}
//         sliderWidth={SLIDER_WIDTH}
//         itemWidth={ITEM_WIDTH}
//         inactiveSlideShift={0}
//         useScrollView={true}
//         onSnapToItem={(index) => setIndex(index)}
//       />
//       <Pagination
//         dotsLength={mockCardData.length}
//         activeDotIndex={index}
//         carouselRef={isCarousel}
//         dotStyle={{
//           width: 10,
//           height: 10,
//           borderRadius: 5,
//           marginHorizontal: 0,
//           backgroundColor: 'rgba(0, 0, 0, 0.92)'
//         }}
//         inactiveDotOpacity={0.4}
//         inactiveDotScale={0.6}
//         tappableDots={true}
//       />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   carouselContainer: {
//     position: 'absolute',
//     top: 100,
//     alignSelf: 'center',
//   },
// });

// report details screen

// import * as React from 'react';
// import { View, Button, StyleSheet } from 'react-native';
// import { Avatar, Card, IconButton, Text, Chip } from 'react-native-paper';


// export default function ReportDetailScreen({ navigation, route }) {
//   // console.log(route.params);
//   return (
//     <View>
//       <Card>
//         <Card.Title
//           title={route.params.title}
//           left={(props) => <Avatar.Icon {...props} icon="mail" />}
//           right={(props) => <IconButton {...props} icon="heart" onPress={() => { console.log("use me for save button") }} />}
//         />
//         <Card.Content>
//           <Chip icon="information">{route.params.status}</Chip>
//           <Chip icon="information" style={styles.chipLocation}>lat: {route.params.coords.latitude} lon: {route.params.coords.longitude}</Chip>
//           <Text variant='bodyMedium'>Content: {route.params.content} </Text>

//         </Card.Content>
//       </Card>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   chipLocation: {
//     marginTop: 4,
//   }
// })