import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

//constants
import {COLORS, SIZES} from '../../constants/index';
const SCREEN_WIDTH = SIZES.width;
const SCREEN_HEIGHT = SIZES.height;

//interfaces
import {ICustomer} from '../../modules/home/reducers/reducers';
// redux actions
import {changeCardSize} from '../../modules/home/actions/actions';
import {useDispatch, useSelector} from 'react-redux';

export type Item = {
  id: number;
  name: string;
};

export type RadioGroupProps = {
  items: Item[];
  selected?: Item;
  onSelected(item: Item): void;
};

export type RadioButtonProps = {
  item: Item;
  selected?: Item;
  onSelected(item: Item): void;
};

export const RadioGroup = (props: RadioGroupProps) => {
  const {items, selected, onSelected} = props;

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <RadioButton
            item={item}
            selected={selected}
            onSelected={onSelected}
          />
        )}
      />
    </View>
  );
};

export const RadioButton = (props: RadioButtonProps) => {
  const {item, selected, onSelected} = props;

  return (
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => onSelected(item)}>
      <Text>{item.name}</Text>
      <View style={styles.button}>
        {selected?.id === item.id && <View style={styles.selectedButton} />}
      </View>
    </TouchableOpacity>
  );
};

const Settings = () => {
  //Global state
  const dispatch = useDispatch();
  const home = useSelector((state: {home: ICustomer}) => state.home);
  const [selected, setSelected] = useState<Item>();

  //console.log('home.cardSize', home.cardSize);

  const items: Item[] = [
    {id: 1, name: '800x600'},
    {id: 2, name: '600x1000'},
    {id: 3, name: '800x800'},
  ];

  const onSelected = (item: Item) => {
    dispatch(changeCardSize(item.name));
    setSelected(item);
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Ayarlar</Text>
        <Text style={styles.header}>Burası tam olarak bitmedi</Text>
      </View>

      <View style={{flex: 1}}>
        <Text style={styles.header}>
          Swiper Boyutu Seçin : {selected ? selected.name : 'Birşey Seçilmedi!'}
        </Text>
        <RadioGroup selected={selected} onSelected={onSelected} items={items} />
      </View>
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

  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 12,
    backgroundColor: COLORS.white,
  },
  button: {
    height: 24,
    width: 24,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: COLORS.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  selectedButton: {
    width: 14,
    height: 14,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
  },
  header: {
    padding: 10,

    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: SIZES.h3,
  },
});

export default Settings;
