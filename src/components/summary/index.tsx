import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {IconDeposit} from '../../assets/icons/deposit';
import {styleDeposit, styleOutflow, styleTotal} from './style';
import {IconOutflow} from '../../assets/icons/outflow';

export const Summary = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToOffsets={[...Array([1, 2, 3].length)].map(
        (_, index) => index * (332 - 32) + (index - 1) * 32,
      )}
      decelerationRate={'fast'}
      scrollEventThrottle={16}
      snapToAlignment="start">
      <View style={styleDeposit.container}>
        <View style={styleDeposit.header}>
          <Text style={styleDeposit.title}>Entradas</Text>
          <View style={styleDeposit.icon}>
            <IconDeposit />
          </View>
        </View>
        <View style={styleDeposit.body}>
          <Text style={styleDeposit.price}>R$ 17.400,00</Text>
          <Text style={styleDeposit.descriptionDate}>
            Última entrada dia 01 de Outubro
          </Text>
        </View>
      </View>
      <View style={styleOutflow.container}>
        <View style={styleOutflow.header}>
          <Text style={styleOutflow.title}>Saídas</Text>
          <View style={styleOutflow.icon}>
            <IconOutflow />
          </View>
        </View>
        <View style={styleOutflow.body}>
          <Text style={styleOutflow.price}>R$ 17.400,00</Text>
          <Text style={styleOutflow.descriptionDate}>
            Última entrada dia 01 de Outubro
          </Text>
        </View>
      </View>
      <View style={styleTotal.container}>
        <View style={styleTotal.header}>
          <Text style={styleTotal.title}>Total</Text>
          <Text style={styleTotal.icon}>$</Text>
        </View>
        <View style={styleTotal.body}>
          <Text style={styleTotal.price}>R$ 17.400,00</Text>
          <Text style={styleTotal.descriptionDate}>
            Última entrada dia 01 de Outubro
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
