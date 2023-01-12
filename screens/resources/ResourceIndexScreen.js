// Imports
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ScreenHeader from '../../shared/ScreenHeader';

// Mock Data
import { mockArticleData } from '../mock_data/MockArticleData';

// Components
import ResourceCard from './ResourceCard';
export default function ResourceIndex({ navigation }) {

  const resourceArticles = mockArticleData.map(({ id, imageSource, titleText, bodyText }, index) => {
    return (
      <ResourceCard
        key={index}
        id={id}
        imageSource={imageSource}
        titleText={titleText}
        bodyText={bodyText}
        navigation={navigation}
        onPress={() => navigation.navigate(`Article${id}`)}
      />
    )
  })

  return (
    <>
      <ScreenHeader/>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          {resourceArticles}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 80,
    marginBottom: 2,
  },
  content: {
    padding: 4,
  },
  preference: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  chip: {
    margin: 4,
  },
  card: {
    margin: 4,
  }
})