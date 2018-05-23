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
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
          <Image blurRadius={10} source={{ uri: item.image }} style={StyleSheet.flatten([ StyleSheet.absoluteFill, styles.imageBackground])} />
          <View style={styles.posterImageWrapper}>
            <Image aspectRatio={0.674} source={{ uri: item.image }} style={styles.posterImage}/>
          </View>
          <View style={styles.wrapperContainerDetails}>
            <View style={styles.containerDetails}>
                <Text>{item.title}</Text>
            </View> 
          </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
  },
  posterImageWrapper: {
    alignItems: 'center',
    height: POSTER_IMAGE_HEIGHT,
    width: POSTER_IMAGE_HEIGHT*0.674,
    zIndex: 2,
    borderRadius: 10,
  },
  posterImage: {
    height: POSTER_IMAGE_HEIGHT,
    borderRadius: 10,
    zIndex: 2,
  },
  wrapperContainerDetails: {
    flex: 1, 
    flexDirection: 'row'
  },
  containerDetails: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -2*SPACE_TERA,
    marginBottom: SPACE_TERA,
    marginHorizontal: SPACE_TERA,
    paddingTop: 2*SPACE_TERA + SPACE_MEGA,    
    borderRadius: 10,
    alignItems: 'center'
  }
});

export default Home;
