import React, { useState, useRef} from 'react'
import { StyleSheet, View, Text, SafeAreaView } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { UserReportCardItem, SLIDER_WIDTH, ITEM_WIDTH } from './UserReports/UserReportCard.js'
import { mockUserReportData } from './UserReports/dummyinfo.js'
import { IconButton, MD3Colors } from 'react-native-paper';
import ScreenHeader from '../../shared/ScreenHeader.js'

export default function HistoryScreen({ navigation }) {
  const isCarousel = useRef(null)
  const [index, setIndex] = useState(0)
  return (
    <View
    style={styles.container}
    >
      <SafeAreaView/>
      <ScreenHeader navigation={ navigation }/>
      <IconButton
        icon="arrow-left"
        iconColor={MD3Colors.primary0}
        style={styles.goBack}
        size={30}
        onPress={() => navigation.goBack()}
      />
      <Text>This is the History Page</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={mockUserReportData}
          renderItem={UserReportCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={(index) => setIndex(index)}
        />
        <Pagination
          dotsLength={mockUserReportData.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
  },
  goBack: {
    position: 'absolute',
    bottom: 30,
    right: 15
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});