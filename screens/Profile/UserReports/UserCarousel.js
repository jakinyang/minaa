import React, { useState, useRef, useContext } from 'react'
import { StyleSheet, View } from "react-native"
import { Text } from 'react-native-paper'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useQuery } from '@apollo/client'
import { GET_USER_REPORTS } from '../../../src/Queries/UserReportsQueries'
import { UserContext } from '../../../shared/userContext'
import { UserReportCard, SLIDER_WIDTH, ITEM_WIDTH } from './UserReportCard'
export default function UserCarousel() {
  const isCarousel = useRef(null)

  const [index, setIndex] = useState(0)

  const { user, setUser } = useContext(UserContext);

  const [userData, setUserData] = useState([])

  let queryVar = user ? user : "3";

  console.log('historyScreen userId: ', user);
  console.log('historyScreen queryVar: ', queryVar);

  const { loading, error, data } = useQuery(GET_USER_REPORTS, {
    variables: { "userId": queryVar },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      setUserData(data.user.reports)
    }

  });
  if (loading) return <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center', alignSelf:'center', marginTop:400}}>Loading...</Text>;
  if (error) console.log(`Error! ${error}`);
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
    top: 100,
    alignSelf: 'center',
  },
});