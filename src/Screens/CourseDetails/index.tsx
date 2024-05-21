import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCourses} from '../../Contexts/CoursesContext';
import Video, {VideoRef} from 'react-native-video';
import ContentListAccordion from '../../Components/ContentListAccordion';
import {CourseType} from '../../Assets/data';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Queries from '../../Components/Queries';
import Notes from '../../Components/Notes';
import AuthLoading from '../AuthLoading';

const CourseDetails = () => {
  const videoRef = useRef<VideoRef>(null);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [paddingTop, setPaddingTop] = useState(0);
  const {selectedCourse} = useCourses();
  const [episodeLoaded, setEpisodeLoaded] = useState<CourseType | null>(null);
  const [index, setIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState<null | object>(null);
  const [routes] = useState([
    {key: 'first', title: 'Queries', icon: require('../../Assets/message.png')},
    {key: 'second', title: 'Notes', icon: require('../../Assets/notes.png')},
  ]);

  const isLoading = !(selectedCourse && episodeLoaded && videoLoaded);

  const renderScene = SceneMap({
    first: Queries,
    second: Notes,
  });

  useEffect(() => {
    if (insets.top <= 30) {
      setPaddingTop(50);
    } else {
      setPaddingTop(20);
    }
  }, []);

  useEffect(() => {
    console.log('SELELEL', selectedCourse);
    if (selectedCourse) {
      if (selectedCourse.episodes.length)
        setEpisodeLoaded(selectedCourse.episodes[0]);
    }
  }, [selectedCourse]);

  const handleTabPress = ({route}) => {
    const tabIndex = routes.findIndex(r => r.key === route.key);
    setIndex(tabIndex);
  };

  const renderTabBar = props => (
    <TabBar
      onTabPress={handleTabPress}
      {...props}
      indicatorStyle={{
        backgroundColor: '#0469DE',
        height: 4,
      }}
      style={{
        backgroundColor: '#F2F3F7',
        width: '100%',
        paddingVertical: 8,
      }}
      labelStyle={{color: '#0469DE', fontWeight: '600'}}
    />
  );

  const renderEpisode = renderItem => {
    const {index, item} = renderItem;

    const handleEpisodeChange = () => {
      setEpisodeLoaded(item);
    };

    return (
      <TouchableOpacity
        onPress={handleEpisodeChange}
        disabled={item.isLocked}
        style={{
          height: 60,
          backgroundColor:
            episodeLoaded?.name === item.name ? '#F3F9FF' : '#E5EFFA',
          flexDirection: 'row',
          paddingHorizontal: 28,
        }}>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              width: 4,
              backgroundColor:
                index !== 0 ? (item.isLocked ? '#DADADA' : '#AFC53E') : '',
              height: 20,
            }}
          />
          <Image
            style={{width: 20, height: 20}}
            resizeMode="contain"
            source={
              item.isLocked
                ? require('../../Assets/filledLock.png')
                : item.completed
                ? require('../../Assets/greenCheckbox.png')
                : require('../../Assets/circularProgress.png')
            }
          />
          {index !== selectedCourse?.episodes.length - 1 ? (
            <View
              style={{
                width: 4,
                backgroundColor: item.isLocked ? '#DADADA' : '#AFC53E',
                height: 20,
              }}></View>
          ) : null}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: item.isLocked ? '400' : '700',
              marginLeft: 10,
              color: '#413D3D',
            }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{flex: 1, backgroundColor: '#FFF', paddingTop: paddingTop}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginTop: 10,
            marginLeft: 20,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            style={{width: 20, height: 20}}
            resizeMode="contain"
            source={require('../../Assets/back.png')}
          />
          <Text style={{color: '#464E5F', fontWeight: '500', marginLeft: 6}}>
            Back
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            marginTop: 14,
            marginBottom: 10,
          }}>
          <Text style={{fontWeight: '600', color: '#464E5F'}}>
            {selectedCourse?.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Text
                style={{fontSize: 12, color: '#0469DE'}}>{`< Previous`}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 8}}>
              <Text style={{fontSize: 12, color: '#0469DE'}}>{`Next >`}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: 'black', width: '100%', height: 250}}>
          {episodeLoaded ? (
            <Video
              resizeMode="contain"
              controls
              source={{
                uri: episodeLoaded.video,
              }}
              ref={videoRef}
              onBuffer={() => {
                console.log('BUFFF');
              }}
              onError={err => {
                console.log('ERR', err);
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
              onLoad={load => {
                setVideoLoaded(load);
              }}
            />
          ) : null}
        </View>
        {selectedCourse?.episodes ? (
          <View>
            <ContentListAccordion title="Content List">
              <View style={{backgroundColor: '#E5EFFA', height: '100%'}}>
                <FlatList
                  data={selectedCourse.episodes}
                  renderItem={renderEpisode}
                />
              </View>
            </ContentListAccordion>
          </View>
        ) : null}
        <TabView
          style={{backgroundColor: '#F2F3F7', flex: 1}}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
        />
      </View>
      <Modal visible={isLoading}>
        <AuthLoading />
      </Modal>
    </>
  );
};

export default CourseDetails;
