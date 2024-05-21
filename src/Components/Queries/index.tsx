import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import SignInTextInput from '../SignInTextInput';
import {useCourses} from '../../Contexts/CoursesContext';

const Queries = () => {
  const {selectedCourse, addQuery} = useCourses();
  const [query, setQuery] = useState('');
  const [queriesArray, setQueriesArray] = useState<Array<object>>([]);
  const handleTextChange = (text: string) => {
    setQuery(text);
  };

  useEffect(() => {
    if (selectedCourse && selectedCourse.queries) {
      setQueriesArray(selectedCourse.queries);
    }
  }, [selectedCourse]);

  const handleSubmitQuery = () => {
    if (selectedCourse) addQuery(selectedCourse.name, query);
    setQuery('');
  };

  return (
    <ScrollView style={{flex: 1, paddingTop: 14}}>
      <View
        style={{
          backgroundColor: '#F2F3F7',
          borderBottomStartRadius: 12,
          paddingHorizontal: 20,
        }}>
        <SignInTextInput
          placeHolder={`Ask you queries here...\nA mentor will respond to it in 24Hrs.
        `}
          value={query}
          handleOnChangeText={handleTextChange}
          multiline
        />
        <TouchableOpacity
          onPress={handleSubmitQuery}
          style={{
            height: 36,
            paddingVertical: 8,
            paddingHorizontal: 4,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            backgroundColor: '#0469DE',
            width: '40%',
            alignSelf: 'flex-end',
            marginTop: 14,
          }}>
          <Text style={{color: '#FFF', fontWeight: '600'}}>Submit Query</Text>
        </TouchableOpacity>
      </View>
      {queriesArray.length ? (
        <View
          style={{
            marginTop: 20,
            backgroundColor: '#FFF',
            flex: 1,
            padding: 20,
          }}>
          <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 20}}>
            Asked Queries
          </Text>
          {queriesArray.map(queryAsked => (
            <View
              style={{
                padding: 12,
                borderRadius: 10,
                backgroundColor: '#F7F8FC',
                marginBottom: 14,
              }}>
              <Text style={{color: '#747272'}}>{queryAsked?.query}</Text>
            </View>
          ))}
        </View>
      ) : null}
    </ScrollView>
  );
};

export default Queries;
