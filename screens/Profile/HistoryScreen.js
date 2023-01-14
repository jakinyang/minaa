import React, { useState, useRef, useContext} from 'react'
import { StyleSheet, View, Text, SafeAreaView } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { UserReportCardItem, SLIDER_WIDTH, ITEM_WIDTH } from './UserReports/UserReportCard.js'
import { IconButton, MD3Colors } from 'react-native-paper';
import { useQuery } from '@apollo/client'
import {GET_USER_REPORTS} from '../../src/Queries/UserReportsQueries.js'
import { UserContext } from '../../shared/userContext.js';

export default function HistoryScreen({ navigation }) {
  const isCarousel = useRef(null)
  const [index, setIndex] = useState(0);
  const { user, setUser } = useContext(UserContext);
  let queryVar = user ? user : "3";

  console.log('historyScreen userId: ', user);
  console.log('historyScreen queryVar: ', queryVar);


  const { loading, error, data } = useQuery(GET_USER_REPORTS, {
    variables: { "userId": queryVar }
  });
  // console.log('historyScreen data: ', data);
  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <View
    style={styles.container}
    >
      <SafeAreaView />
      <IconButton
        icon="arrow-left"
        iconColor={MD3Colors.primary0}
        style={styles.goBack}
        size={30}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.pageTitle}>User Submitted Reports</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          layout="default"
          layoutCardOffset={9}
          ref={isCarousel}
          data={data.user.reports}
          renderItem={UserReportCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
          // onSnapToItem={(index) => setIndex(index)}
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
    top: 0,
    left: 15
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    top: 235,
  },
});