import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Input} from '../input';
import {IconArrowDown} from '../../assets/arrow-down';
import {IconArrowUp} from '../../assets/arrow-up';
import {theme} from '../../styles/theme';

interface Select {
  category: {
    value: number;
    label: string;
  };
}

interface SelectCategoryProps {
  onChangeSelect: (data: {value: number; label: string}) => void;
  onChangeText: (text: string) => void;
}

export const SelectCategory = ({
  onChangeSelect,
  onChangeText,
}: SelectCategoryProps) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState<Select>({} as Select);

  function handleSelect(category: {value: number; label: string}) {
    setSelect({...select, category: category});
    setOpen(false);
  }

  const optionsCategory = [
    {value: 1, label: 'Venda'},
    {value: 2, label: 'Compra'},
  ];
  return (
    <View style={{width: '100%'}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => setOpen(!open)}
          style={{
            backgroundColor: '#adaeb1',
            justifyContent: 'space-around',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: open ? 0 : 5,
            padding: 6,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
            width: 100,
          }}>
          <Text style={{color: theme.blackFont}}>
            {select.category?.label ?? ' Categoria'}
          </Text>
          {!open ? (
            <IconArrowDown height={20} width={20} />
          ) : (
            <IconArrowUp height={20} width={20} />
          )}
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Input
            placeholder="Descrição da categoria"
            onChangeText={text => onChangeText(text)}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#E7E9EE',
          width: 100,
          alignItems: 'center',
          borderBottomEndRadius: 5,
        }}>
        {open
          ? optionsCategory.map(item => (
              <TouchableOpacity
                key={item.value}
                onPress={() => {
                  handleSelect(item);
                  onChangeSelect(item);
                }}
                style={{paddingVertical: 6}}>
                <Text style={{color: theme.blackFont}}>{item.label}</Text>
              </TouchableOpacity>
            ))
          : null}
      </View>
    </View>
  );
};
