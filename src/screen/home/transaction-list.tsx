import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../styles/theme';

export const TransactionList = () => {
  const array = [1, 2, 3, 4];
  return (
    <View style={{paddingVertical: 16}}>
      <View style={styles.header}>
        <Text style={styles.title}>Listagem</Text>
        <Text style={styles.subTitle}>4 Itens</Text>
      </View>
      <View
        style={{
          padding: 16,
          maxHeight: '70%',
        }}>
        <FlatList
          data={array}
          keyExtractor={item => String(item)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={() => <TransactionCard />}
        />
      </View>
    </View>
  );
};

const TransactionCard = () => {
  return (
    <View style={stylesCard.container}>
      <Text style={stylesCard.title}>Desenvolvimento de sites</Text>
      <Text style={stylesCard.price}>R$ 12.000,00</Text>
      <View style={stylesCard.footer}>
        <Text style={stylesCard.footerDescription}>Vendas</Text>
        <Text style={stylesCard.footerDescription}>03/10/2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {fontSize: 18, color: theme.blackFont},
  subTitle: {fontSize: 16, color: theme.grayFont},
});

const stylesCard = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    padding: 16,
    justifyContent: 'space-between',
    height: 130,
    elevation: 3,
    borderRadius: 5,
    marginVertical: 10,
    width: 340,
  },
  title: {fontSize: 16, color: theme.blackFont},
  price: {fontSize: 22, color: theme.greenLight},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerDescription: {fontSize: 14, color: theme.grayFont},
});
