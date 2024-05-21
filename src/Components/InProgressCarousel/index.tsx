import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import LinearProgressBar from '../LinearProgressBar';
import {CourseType} from '../../Assets/data';

type PropsType = {
  coursesToDisplay: Array<CourseType>;
  handleOnClickItem: (courseName: string) => void;
};

const InProgressCarousel = ({
  coursesToDisplay,
  handleOnClickItem,
}: PropsType) => {
  const width = Dimensions.get('window').width;

  const renderCarouselItem = ({item}) => {
    {
      return (
        <TouchableOpacity
          key={item?.name}
          onPress={() => handleOnClickItem(item?.name)}
          style={{
            zIndex: 999,
            position: 'relative',
            marginLeft: 20,
            width: 340,
            height: 160,
            borderRadius: 12,
            backgroundColor: '#FFF',
            paddingHorizontal: 12,
            paddingVertical: 14,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            style={{width: '35%', borderRadius: 12, height: '100%'}}
            resizeMode="cover"
            source={{uri: item?.img}}
          />
          <View style={{flex: 1, paddingLeft: 12, marginVertical: 10}}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 18, color: '#5B5757', fontWeight: '700'}}>
                {item?.name}
              </Text>
              <Text style={{marginTop: 6, fontSize: 12, color: '#0469DE'}}>
                {item?.description}
              </Text>
            </View>
            <View>
              <LinearProgressBar progress={item.progresPercent} />
              <Text
                style={{
                  marginTop: 4,
                  color: '#1E1E2D',
                  fontSize: 12,
                  fontWeight: '700',
                }}>
                {item.progresPercent * 100}%
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View>
      <View
        style={{
          width: 94,
          marginLeft: 20,
          paddingVertical: 6,
          paddingHorizontal: 8,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
          backgroundColor: '#D8EAFF',
          marginBottom: 14,
          marginTop: 20,
        }}>
        <Text style={{color: '#0469DE', fontSize: 12, fontWeight: '700'}}>
          In Progress
        </Text>
      </View>
      <View style={{height: 160}}>
        <Carousel
          loop
          vertical={false}
          width={width}
          height={160}
          autoPlay={true}
          data={coursesToDisplay}
          scrollAnimationDuration={1600}
          renderItem={renderCarouselItem}
        />
      </View>
    </View>
  );
};

export default InProgressCarousel;
