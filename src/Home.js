import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LocalStorage } from './utils/LocalStorageUtil';
import { LocalStorageKeys } from './utils/constants';

export default class Home extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ApprovedFoodList')}>
          <Text>Approved Food List</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
