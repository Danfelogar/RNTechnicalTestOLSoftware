//dependencies
import React, {useState} from 'react';
import {View} from 'react-native';
import {MultipleSelectList} from 'react-native-dropdown-select-list';

export function InputSelect() {
  const [selected, setSelected] = useState('');

  const data = [
    {key: '1', value: 'Mobiles'},
    {key: '2', value: 'Appliances'},
    {key: '3', value: 'Cameras'},
    {key: '4', value: 'Computers'},
    {key: '5', value: 'Vegetables'},
    {key: '6', value: 'Diary Products'},
    {key: '7', value: 'Drinks'},
  ];
  return (
    <View style={{width: '100%', paddingHorizontal: 20, paddingTop: 20}}>
      <MultipleSelectList
        setSelected={(val: any) => {
          setSelected(val);
          console.log({val});
        }}
        data={data}
        label={'CATEGORIES'}
        onSelect={() => {
          console.log(selected);
        }}
        boxStyles={{borderColor: 'green'}}
        labelStyles={{color: 'orange'}}
        fontFamily="regular"
        notFoundText="No data exists"
        disabledCheckBoxStyles={{backgroundColor: 'black'}}
        disabledItemStyles={{backgroundColor: 'red'}}
        disabledTextStyles={{color: 'green'}}
        badgeStyles={{backgroundColor: 'orange'}}
        save="value"
      />
    </View>
  );
}
