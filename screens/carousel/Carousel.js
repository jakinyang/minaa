import React, { useState, useRef} from 'react'
import { StyleSheet, View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { CarouselCardItem, SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCard.js'
import { mockCardData } from '../mock_data/MockCardData.js'

export default function CarouselCards() {
  const isCarousel = useRef(null)
  const [index, setIndex] = useState(0)
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={mockCardData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={mockCardData.length}
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
  )
}

const styles = StyleSheet.create({
  carouselContainer: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
  },
});