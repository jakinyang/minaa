import React, { useState, useRef } from 'react'
import { StyleSheet, View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { UserReportCard, SLIDER_WIDTH, ITEM_WIDTH } from './UserReportCard'
export default function UserCarousel({data}) {
  const isCarousel = useRef(null)

  const [index, setIndex] = useState(0)

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={data.user.reports}
        renderItem={UserReportCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={data.user.reports.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        containerStyle={{ marginTop: 20 }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'absolute',
    top: 180,
    alignSelf: 'center',
  },
});