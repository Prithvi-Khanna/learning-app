import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {CourseType} from '../../Assets/data';

type PropsType = {
  coursesToDisplay: Array<CourseType>;
  handleOnClickItem: (courseName: string) => void;
};

const RecentlyCompletedCarousel = ({
  coursesToDisplay,
  handleOnClickItem,
}: PropsType) => {
  const width = Dimensions.get('window').width;

  const renderCarouselItem = ({item}) => {
    {
      return (
        <TouchableOpacity
          onPress={() => handleOnClickItem(item?.name)}
          style={{
            marginLeft: 20,
            width: 340,
            height: 80,
            borderRadius: 12,
            backgroundColor: '#F3F8F5',
            padding: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{width: '20%', borderRadius: 12, height: '100%'}}
            resizeMode="cover"
            source={{uri: item?.img}}
          />
          <View
            style={{
              flex: 1,
              paddingLeft: 12,
              marginVertical: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 14, color: '#5B5757', fontWeight: '600'}}>
              {item?.name}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12, marginRight: 6, color: '#13B87E'}}>
                4 Hours Completed
              </Text>
              <BouncyCheckbox
                size={14}
                isChecked
                fillColor="#13B87E"
                unFillColor="#FFFFFF"
                iconStyle={{borderColor: '#13B87E'}}
                innerIconStyle={{borderWidth: 2}}
                onPress={() => {}}
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 20,
          marginBottom: 12,
          color: '#5B5757',
          fontSize: 16,
          fontWeight: '700',
        }}>
        Recently Completed
      </Text>
      <View style={{height: 80}}>
        <Carousel
          loop
          width={width}
          height={80}
          autoPlay={true}
          data={coursesToDisplay}
          scrollAnimationDuration={2600}
          renderItem={renderCarouselItem}
        />
      </View>
    </View>
  );
};

export default RecentlyCompletedCarousel;
