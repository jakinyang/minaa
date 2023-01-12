// THIS FILE IS NOT IN MAIN. COMMENT OUT FOR NOW. LIKELY TO BE DELETED
// Imports
// import * as React from 'react';
// import { ScrollView, StyleSheet, View } from 'react-native';
// import { Button, Card, Text } from 'react-native-paper';
// import ScreenHeader from '../shared/ScreenHeader';

// export default function ResourceIndex({ navigation }) {

//   const cardCover = { uri: "https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg" }

//   return (
//     <View style={styles.container}>
//       <ScreenHeader navigation={navigation} />
//       <ScrollView contentContainerStyle={{
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//       >
//         <Card style={styles.card} onPress={() => navigation.navigate('ResourceOne')}>
//           <Card.Cover source={require('../assets/un-logo.png')} />
//           <Card.Title title="Resource 1" />
//           <Card.Content>
//             <Text variant="bodyMedium">
//               Lorem ipsum dolor sit amet, consectetur adipiscing eliurna.
//             </Text>
//           </Card.Content>
//         </Card>
//         <Card style={styles.card} onPress={() => navigation.navigate('ResourceTwo')}>
//           <Card.Cover source={require("../assets/landmine-warning.png")} />
//           <Card.Title title="Resource 2" />
//           <Card.Content>
//             <Text variant="bodyMedium">
//               Lorem ipsum dolor sit amet, consectetur adipiscing eliurna.
//             </Text>
//           </Card.Content>
//         </Card>
//         <Card style={styles.card} onPress={() => navigation.navigate('ResourceThree')}>
//           <Card.Cover source={require("../assets/un-red-logo.png")} />
//           <Card.Title title="Resource 3" />
//           <Card.Content>
//             <Text variant="bodyMedium">
//               Lorem ipsum dolor sit amet, consectetur adipiscing eliurna.
//             </Text>
//           </Card.Content>
//         </Card>
//       </ScrollView>
//     </View>
//   );
// };
