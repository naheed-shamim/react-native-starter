import React from 'react';

import { Text, View, FlatList } from 'react-native';
import { ApprovedFoodRowItem } from './ApprovedFoodRowItem';
import { LocalStorage } from '../../utils/LocalStorageUtil';
import { LocalStorageKeys } from '../../utils/constants';

class ApprovedFoodList extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this._loadInitData();
  }

  async _loadInitData() {
    let categoriesData = await LocalStorage.getValue(
      LocalStorageKeys.PROTEIN_DATA,
    );

    if (!categoriesData) {
      categoriesData = await this._fetchData();
      await LocalStorage.saveValue(
        LocalStorageKeys.PROTEIN_DATA,
        categoriesData,
      );
    }
    this.setState({ categories: categoriesData });
  }

  async _fetchData() {
    return fetch('https://api.jsonbin.io/b/5f2c36626f8e4e3faf2cb42e')
      .then(response => response.json())
      .then(json => {
        return json.categories;
      })
      .catch(error => {
        console.error(error);
      });
  }

  _renderItem = item => {
    const { category } = item;
    return (
      <ApprovedFoodRowItem
        label={category.categoryName}
        servingSize={category.servingSize}
        collapedData={category.subcategories}
        proTip={category.protip}
        quote={category.quote}
        colorCode={category.colorCode}
      />
    );
  };

  render() {
    const { categories } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 24, margin: 20 }}>Approved Food List</Text>
        <Text style={{ textAlign: 'center', margin: 20 }}>Search Here</Text>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={categories}
          renderItem={({ index, item }) => this._renderItem(item)}
        />
      </View>
    );
  }
}

export default ApprovedFoodList;
