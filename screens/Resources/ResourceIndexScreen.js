// Imports
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

// Article Data
import { articleData } from './ResourceArticlesData';

// Components
import ResourceCard from './ResourceCard';
export default function ResourceIndex({ navigation }) {

  const resourceArticles = articleData.map(({ id, imageSource, titleText, subTitleText, bodyText1, bodyText2, bodyText3 }, index) => {
    return (
      <ResourceCard
        key={index}
        id={id}
        imageSource={imageSource}
        titleText={titleText}
        subTitleText={subTitleText}
        bodyText1={null}
        bodyText2={null}
        bodyText3={null}
        navigation={navigation}
        onPress={() => navigation.navigate(`Article${id}`, { imageSource, titleText, subTitleText, bodyText1, bodyText2, bodyText3 })}
      />
    )
  })

  return (
    <View style={styles.container}>
      <ScrollView>
        {resourceArticles}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
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
})