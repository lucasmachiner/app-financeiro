import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {ButtonNewTransaction} from '../../components/button';
import {Logo} from '../../components/logo';
import {Header} from '../../components/header';
import {IconDeposit} from '../../assets/icons/deposit';
import {Summary} from '../../components/summary';

export const Home = () => {
  const array = [1, 2, 3, 4];
  return (
    <View style={{backgroundColor: '#F5F5F5'}}>
      <View style={{height: 200, backgroundColor: '#5429CC'}}>
        <Header />
      </View>
      <View
        style={{
          marginTop: -90,
          height: 200,
        }}>
        <Summary />
      </View>
      <View style={{paddingVertical: 16}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
          }}>
          <Text style={{fontSize: 18, color: '#000'}}>Listagem</Text>
          <Text style={{fontSize: 16, color: '#727272'}}>4 Itens</Text>
        </View>
        <View
          style={{
            padding: 16,
            maxHeight: '70%',
          }}>
          <FlatList
            data={array}
            keyExtractor={item => String(item)}
            // style={{maxHeight: '80%'}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}
            renderItem={() => (
              <View
                style={{
                  backgroundColor: '#FFFF',
                  padding: 16,
                  justifyContent: 'space-between',
                  height: 130,
                  elevation: 3,
                  borderRadius: 5,
                  marginVertical: 10,
                  width: 340,
                }}>
                <Text style={{fontSize: 16, color: '#000'}}>
                  Desenvolvimento de sites
                </Text>
                <Text style={{fontSize: 22, color: '#12A454'}}>
                  R$ 12.000,00
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 14, color: '#727272'}}>Vendas</Text>
                  <Text style={{fontSize: 14, color: '#727272'}}>
                    03/10/2023
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};
