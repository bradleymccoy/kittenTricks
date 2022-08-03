// import { Avatar, Button, Divider, Layout, Text } from '@ui-kitten/components';
import { ImageOverlay } from './extra/image-overlay.component';
import { HeartIcon, MessageCircleIcon } from './extra/icons';
import { Article } from './extra/data';
import React, { Component, useState } from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import { Amplify } from 'aws-amplify';
import { awsmobile } from '../../../aws-exports';
import { LIST_WORKOUTS } from '../../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

Amplify.configure({
  ...awsmobile,
  Analytics: {
    disabled: true
  }
});



// await DataStore.start();
class Workouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  };
  
  

onQuery = async () => {
  const data = await API.graphql(graphqlOperation(LIST_WORKOUTS));
  const data1 = data.data.listWorkoutData.items
  console.log('API.GraphQL query: ', data1)
  console.log('posts state: ', data1[1].name)
};


render() {
  return (
    <ScrollView
      style={styles.scrollview}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.text} onPress={this.onQuery}>
        Query Posts
      </Text>
      <Text>
      {this.state.posts.map((data1, i) => (
        <Text key={i}>{`${data1.name} ${data1.description}`}</Text>
      ))}
      {this.state.posts}
      </Text>
      <Text>
        
      </Text>
    </ScrollView>
  );
}
}

export default Workouts;

const styles = StyleSheet.create({
scrollview: {
  paddingTop: 40,
  flex: 1,
},
container: {
  alignItems: "center",
},
text: {
  fontSize: 20,
  textAlign: "center",
  margin: 10,
},
});


