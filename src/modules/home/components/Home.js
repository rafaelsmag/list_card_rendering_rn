import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import { screen } from '../../../constants/sizes';

class Home extends Component {

  state = {
    item: {}
  }

  static getDerivedStateFromProps = (props, state) => {
    if(props.items.length > 0){
      return {
        item: props.items[0],
      }
    }
    return null;
  }

  render() {
    const { item } = this.state;
    return(
      <SafeAreaView style={{ flex: 1 }}>
        <Image blurRadius={3} source={{ uri: item.image }} style={StyleSheet.flatten([ StyleSheet.absoluteFill, styles.imageBackground])} />
        <Text>{this.state.item.title}</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: screen.width,
  }
});

export default Home;
