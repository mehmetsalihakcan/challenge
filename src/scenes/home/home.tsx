import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  Image,
  Alert,
  Text,
} from 'react-native';

//interfaces
import {ICustomer} from '../../modules/home/reducers/reducers';
// redux actions
import {getCards} from '../../modules/home/actions/actions';
import {useDispatch, useSelector} from 'react-redux';

//constants
import {COLORS, SIZES} from '../../constants/index';
const SWIPE_TRESHOLD = SIZES.width * 0.25;
const SWIPE_OUT_DURATION = 250;
const SCREEN_WIDTH = SIZES.width;
const SCREEN_HEIGHT = SIZES.height;

const PanResponderExample = () => {
  const defaultProps = {
    //default props
    onSwipeRight: (item: string) => {
      console.log(' default onSwipeRight : ', item);
    },
    onSwipeLeft: (item: string) => {
      console.log(' default onSwipeLeft : ', item);
    },
  };

  //Global state
  const dispatch = useDispatch();
  const home = useSelector((state: {home: ICustomer}) => state.home);
  const cardArray = home.data;

  if (home.error !== '') {
    Alert.alert('Bir Sorun Oluştu!', '' + home.error);
  }

  const [position, setPosition] = useState(new Animated.ValueXY());
  const [index, setIndex] = useState(0);
  const [panResponder, setPanResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_TRESHOLD) {
          forceSwipe('right');
        } else if (gesture.dx < -SWIPE_TRESHOLD) {
          forceSwipe('left');
        } else {
          resetPosition();
        }
      },
      onPanResponderEnd: () => {
        //  console.log('onPanResponderEnd');
      },
    }),
  );

  useEffect(() => {
    if (home.data.url === undefined || home.data.url === '') {
      dispatch(getCards());
    }
  }, [dispatch]);

  const forceSwipe = (direction: string) => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: {x: x, y: 0},
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => {
      onSwipeComplete(direction);
    });
  };

  const onSwipeComplete = (direction: string) => {
    const {onSwipeRight, onSwipeLeft} = defaultProps;
    const item = cardArray[index];
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);

    dispatch(getCards()).then(() => {
      // iteration new card position
      position.setValue({x: 0, y: 0});
      setIndex((index) => index + 1);
    });
  };
  const resetPosition = () => {
    Animated.spring(position, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
  };
  function getCardStyle() {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg'],
    });
    return {
      ...position.getLayout(),
      transform: [{rotate}],
    };
  }
  const RenderCard = ({item: string, cardIndex: number}) => {
    return <Image style={styles.image} source={{uri: item}} />;
  };

  const renderCards = () => {
    return cardArray.map((item, i) => {
      // handle finished swipe
      if (index === cardArray.length) {
        //biterse baştan başlat
        setIndex(0);
      }

      if (i < index) {
        return null;
      }
      if (i === index) {
        return (
          <Animated.View
            key={i}
            style={getCardStyle()}
            {...panResponder.panHandlers}>
            <Image style={styles.image} source={{uri: item.url}} />
          </Animated.View>
        );
      }

      return <RenderCard key={i} item={item.url} cardIndex={i} />;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>source</Text>
      <Text style={styles.description}>{cardArray[0].url}</Text>
      <View style={styles.content}>{renderCards()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  content: {marginVertical: 20},
  image: {
    //position: 'absolute',
    height: SCREEN_HEIGHT * 0.7,
    width: SCREEN_WIDTH * 0.8,
    borderRadius: 20,
  },
  title: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: SIZES.h1,
    margin: 10,
  },
  description: {color: COLORS.primary, fontSize: SIZES.h4, margin: 10},
});

export default PanResponderExample;
