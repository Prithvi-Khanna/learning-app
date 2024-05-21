import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Animated,
  Image,
} from 'react-native';
import { EpisodeType } from '../../Assets/data';

type PropsType = {
  title: string;
  setExpandedCallback?: (expanded: boolean) => void;
  children: React.ReactNode;
};

const ContentListAccordion = ({
  title,
  setExpandedCallback,
  children,
}: PropsType) => {
  const [expanded, setExpanded] = useState(false);

  const handleOnExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
    if (setExpandedCallback) setExpandedCallback(!expanded);
  };

  return (
    <View
      style={{
        width: '100%',
      }}>
      <TouchableOpacity
        onPress={handleOnExpand}
        style={{
          backgroundColor: '#E5EFFA',
          paddingVertical: 10,
          paddingHorizontal: 28,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <Image
            style={{width: 20, height: 20}}
            resizeMode="contain"
            source={require('../../Assets/bulletHamburger.png')}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: '700',
              color: '#0469DE',
              marginLeft: 8,
            }}>
            {title}
          </Text>
        </View>
        <Image
          style={{width: 34, height: 34}}
          resizeMode="contain"
          source={
            expanded
              ? require('../../Assets/arrowUp.png')
              : require('../../Assets/arrowDown.png')
          }
        />
      </TouchableOpacity>
      {expanded ? children : null}
    </View>
  );
};

export default ContentListAccordion;
