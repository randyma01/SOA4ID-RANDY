import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  FlatList,
  TouchableHighlight } from 'react-native';


export default class SearchResult extends React.Component {
  static navigationOptions = {
    title: 'Resultados'
  }

  _keyExtractor = (item, index) => index.toString()

  _renderItem = ({ item }) => {
    return (
      <TouchableHighlight underlayColor='#dddddd'>
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>  
    )
  }

  render() {
    const  {params} = this.props.navigation.state

    return (
      <FlatList
      data={params.listings}
      keyExtractor={this._keyExtractor}
      renderItem={this._renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
});