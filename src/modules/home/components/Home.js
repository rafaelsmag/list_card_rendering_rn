import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import { screen, SPACE_MEGA, SPACE_GIGA, POSTER_IMAGE_HEIGHT, SPACE_TERA, POSTER_CONTAINER_WIDTH, POSTER_CONTAINER_HEIGHT } from '../../../constants/sizes';

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
        <Image blurRadius={20} source={{ uri: item.image }} style={StyleSheet.flatten([ StyleSheet.absoluteFill, styles.imageBackground])} />
        <View style={styles.posterImageWrapper}>
          <Image source={{ uri: item.image }} style={styles.posterImage}/>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: screen.width,
  },
  posterImageWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  posterImage: {
    borderRadius: 10,
    height: POSTER_IMAGE_HEIGHT,
    width: POSTER_IMAGE_HEIGHT*0.674,
    marginTop: SPACE_TERA,
    marginHorizontal: SPACE_TERA,
    resizeMode: Image.resizeMode.contain,
    borderRadius: 10,
    elevation: 2,    
  }
});

export default Home;
