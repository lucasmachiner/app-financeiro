import React from 'react';
import {View} from 'react-native';
import {Header} from './header';
import {Summary} from './summary';
import {TransactionList} from './transaction-list';
import {theme} from '../../styles/theme';

export const Home = () => {
  return (
    <View style={{backgroundColor: theme.background}}>
      <Header />
      <Summary />
      <TransactionList />
    </View>
  );
};
