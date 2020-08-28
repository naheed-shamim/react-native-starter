import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Images } from '../../constants/images';

const IMG_URI =
  'https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU';

export const ApprovedFoodRowItem = props => {
  const {
    label = '',
    servingSize = '',
    collapedData = [],
    proTip = '',
    quote = '',
    colorCode = '',
  } = props;

  const [isCollapsed, setCollapsed] = React.useState(true);
  const _collapsibleData = () => {
    return (
      <View
        style={{
          padding: 10,
          paddingBottom: 0,
        }}>
        {collapedData.map(data => {
          return (
            <View>
              <Text
                style={{
                  color: colorCode,
                  fontSize: 16,
                  backgroundColor: 'white',
                }}>
                {data.subCategoryname}
              </Text>
              {showSubSubCategory(data.items)}
            </View>
          );
        })}
      </View>
    );
  };

  const showSubSubCategory = items => {
    return items.map(subCategory => (
      <Text style={{ backgroundColor: 'white', marginVertical: 2 }}>
        {subCategory}
      </Text>
    ));
  };

  const arrowIconStyle = isCollapsed
    ? styles.arrowIcon
    : [styles.arrowIcon, { transform: [{ rotate: '180deg' }] }];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.clickContainer}
        onPress={() => setCollapsed(collapsed => !collapsed)}>
        <View style={styles.mainRowContainer}>
          <Image
            source={{
              uri: IMG_URI,
            }}
            style={styles.leftImg}
          />
          <Text style={{ color: colorCode }}>{label} </Text>
          {!!servingSize && (
            <Text style={{ fontWeight: 'bold' }}>({servingSize})</Text>
          )}
        </View>
        <Image source={Images.ARROW_DOWN} style={arrowIconStyle} />
      </TouchableOpacity>
      {!isCollapsed && _collapsibleData()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10, padding: 10 },
  clickContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
  },
  arrowIcon: {
    height: 20,
    width: 20,
  },
  mainRowContainer: { flexDirection: 'row', flex: 1 },
  leftImg: { height: 20, width: 20, marginHorizontal: 20 },
});
