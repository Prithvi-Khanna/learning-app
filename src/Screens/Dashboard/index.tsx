import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CourseType} from '../../Assets/data';
import InProgressCarousel from '../../Components/InProgressCarousel';
import {useCourses} from '../../Contexts/CoursesContext';
import RecentlyCompletedCarousel from '../../Components/RecentlyCompletedCarousel';
import LinearProgressBar from '../../Components/LinearProgressBar';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const {courses, updateSelectedCourse} = useCourses();
  const [paddingTop, setPaddingTop] = useState(0);
  const [inProgressCourses, setInProgressCourses] = useState<Array<CourseType>>(
    [],
  );
  const [completedCourses, setCompletedCourses] = useState<Array<CourseType>>(
    [],
  );

  useEffect(() => {
    if (courses.length) {
      const inProgCourses = courses.filter(course => course.status === 'PROG');
      setInProgressCourses(inProgCourses);
      const completedCourses = courses.filter(
        course => course.status === 'COM',
      );
      setCompletedCourses(completedCourses);
    }
  }, [courses]);

  useEffect(() => {
    if (insets.top <= 30) {
      setPaddingTop(50);
    } else {
      setPaddingTop(20);
    }
  }, []);

  const navigateToDetails = (courseName: string) => {
    updateSelectedCourse(courseName);
    setTimeout(() => {
      console.log('NAVIVIVI');

      navigation.navigate('Details');
    }, 50);
  };

  const renderFlatlistItem = courseItem => {
    const {item, index} = courseItem;
    return (
      <TouchableOpacity
        onPress={() => navigateToDetails(item?.name)}
        disabled={item?.isLocked}
        key={index}
        style={{
          height: 80,
          borderRadius: 12,
          backgroundColor: '#FFFFFF',
          padding: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 12,
          elevation: 1,
          shadowColor: '#38476D',
          shadowOpacity: 0.15,
          shadowRadius: 4,
          opacity: item?.isLocked ? 0.5 : 1,
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
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 14, color: '#5B5757', fontWeight: '600'}}>
            {item?.name}
          </Text>
          {item?.isLocked ? (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#DADADA',
                flexDirection: 'row',
                maxWidth: 80,
                paddingVertical: 6,
                borderRadius: 8,
              }}>
              <Image
                style={{width: 12, height: 12}}
                resizeMode="contain"
                source={require('../../Assets/lock.png')}
              />
              <Text
                style={{
                  color: '#5B5757',
                  fontSize: 12,
                  fontWeight: '500',
                  marginLeft: 4,
                }}>
                Locked
              </Text>
            </View>
          ) : (
            <>
              <Text
                style={{
                  color: '#0469DE',
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                {item?.description}
              </Text>
              <LinearProgressBar progress={item.progresPercent} />
            </>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const handleOnLogOut = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => navigation.navigate('RegistrationStackScreens'),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F2F3F7', paddingTop: paddingTop}}>
      <TouchableOpacity
        onPress={handleOnLogOut}
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
          Back To Login
        </Text>
      </TouchableOpacity>
      {inProgressCourses ? (
        <>
          <InProgressCarousel
            handleOnClickItem={navigateToDetails}
            coursesToDisplay={inProgressCourses}
          />
        </>
      ) : null}
      {completedCourses ? (
        <>
          <RecentlyCompletedCarousel
            handleOnClickItem={navigateToDetails}
            coursesToDisplay={completedCourses}
          />
        </>
      ) : null}
      <View
        style={{
          backgroundColor: '#FFF',
          paddingVertical: 20,
          marginTop: 24,
          paddingHorizontal: 20,
        }}>
        <Text style={{color: '#5B5757', fontSize: 16, fontWeight: '700'}}>
          Upcoming Modules
        </Text>
      </View>
      <FlatList
        data={courses}
        style={{backgroundColor: '#FFF'}}
        renderItem={renderFlatlistItem}
        contentContainerStyle={{paddingHorizontal: 20}}
      />
    </View>
  );
};

export default Dashboard;
