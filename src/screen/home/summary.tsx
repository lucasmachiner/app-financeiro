import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {IconDeposit} from '../../assets/icons/deposit';
import {IconOutflow} from '../../assets/icons/outflow';
import {theme} from '../../styles/theme';

export const Summary = () => {
  return (
    <View
      style={{
        marginTop: -90,
        height: 200,
      }}>
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
    </View>
  );
};

const styleDeposit = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    height: 180,
    width: 332 - 32,
    borderRadius: 5,
    elevation: 10,
    padding: 16,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {fontSize: 18, color: theme.blackFont},
  icon: {
    borderWidth: 1.5,
    borderRadius: 50,
    height: 35,
    width: 35,
    borderColor: theme.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {flex: 1, justifyContent: 'center', paddingTop: 20},
  price: {fontSize: 30, color: theme.blackFont},
  descriptionDate: {
    fontSize: 14,
    color: theme.grayLightFont,
  },
});

const styleOutflow = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    height: 180,
    width: 332 - 32,
    borderRadius: 5,
    elevation: 10,
    padding: 16,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {fontSize: 18, color: theme.blackFont},
  icon: {
    borderWidth: 1.5,
    borderRadius: 50,
    height: 35,
    width: 35,
    borderColor: theme.red,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {flex: 1, justifyContent: 'center', paddingTop: 20},
  price: {fontSize: 30, color: theme.blackFont},
  descriptionDate: {
    fontSize: 14,
    color: theme.grayLightFont,
  },
});

const styleTotal = StyleSheet.create({
  container: {
    backgroundColor: theme.green,
    height: 180,
    width: 332 - 32,
    borderRadius: 5,
    elevation: 10,
    padding: 16,
    marginHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {fontSize: 18, color: theme.white},
  icon: {
    borderWidth: 1.5,
    borderRadius: 50,
    height: 35,
    width: 35,
    borderColor: theme.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: theme.white,
    fontSize: 24,
    fontWeight: '600',
  },
  body: {flex: 1, justifyContent: 'center', paddingTop: 20},
  price: {fontSize: 30, color: theme.white},
  descriptionDate: {
    fontSize: 14,
    color: theme.white,
  },
});
