import React from 'react';
import {Text, TouchableOpacity, View, KeyboardAvoidingView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {theme} from '../../styles/theme';
import {IconClose} from '../../assets/icons/close';
import {Input} from '../../components/input';
import {IconDeposit} from '../../assets/icons/deposit';
import {IconOutflow} from '../../assets/icons/outflow';

interface Props {
  navigation: NavigationProp<any>;
}

export const NewTransaction = ({navigation}: Props) => {
  return (
    <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#00000066',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            backgroundColor: theme.background,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            padding: 16,
          }}>
          <View style={{gap: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: 8,
              }}>
              {/*TODO -> Alterar cor do titulo */}
              <Text style={{fontSize: 18, fontWeight: '600', color: '#363F5F'}}>
                Cadastrar transação
              </Text>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{padding: 4}}>
                <IconClose height={24} width={24} />
              </TouchableOpacity>
            </View>
            <View style={{gap: 10}}>
              <Input placeholder="Nome" />
              <Input placeholder="Preço" keyboardType="numeric" />
              <View style={{flexDirection: 'row', gap: 8}}>
                {/*TODO -> Separar botoes para ir a pasta de components */}
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 0.2,
                    borderRadius: 3,
                    flex: 1,
                    padding: 10,
                    justifyContent: 'center',
                    gap: 12,
                    backgroundColor: theme.background,
                  }}>
                  <View
                    style={{
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: theme.green,
                    }}>
                    <IconDeposit height={24} width={24} />
                  </View>
                  <Text style={{fontSize: 16, color: theme.blackFont}}>
                    Entrada
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 0.2,
                    borderRadius: 3,
                    flex: 1,
                    padding: 10,
                    justifyContent: 'center',
                    gap: 12,
                    backgroundColor: theme.background,
                  }}>
                  <View
                    style={{
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: theme.red,
                    }}>
                    <IconOutflow height={24} width={24} />
                  </View>
                  <Text style={{fontSize: 16, color: theme.blackFont}}>
                    Saída
                  </Text>
                </TouchableOpacity>
              </View>
              {/*TODO -> Criar component select */}
              <Input placeholder="Categoria" />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: theme.green,
                alignItems: 'center',
                borderRadius: 3,
                padding: 14,
              }}>
              <Text
                style={{color: theme.white, fontSize: 16, fontWeight: '600'}}>
                Cadastrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
