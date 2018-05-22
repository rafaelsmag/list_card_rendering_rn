import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'
import Home from '../components/Home'
import { fetchList } from '../../../services/home';

class HomeScreen extends Component{

  state = {
    listItems: []
  }

  componentDidMount(){
    const listItems = fetchList();
    this.setState({ listItems })
  }

  render(){
    return(
      <Home 
        items={this.state.listItems}
      />
    )
  }
}


export default HomeScreen