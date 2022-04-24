import React from 'react';

import {
  Container,
  Header,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  HighlightCards,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import HighlightCard from '../../components/HIghlightCard';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/44279943?v=4' }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Adrian</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril' />
        <HighlightCard
          type='down'
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última saída dia 15 de abril' />
        <HighlightCard
          type='total'
          title='Total'
          amount='R$ 21.123,00'
          lastTransaction='01 à 16 de abril' />
      </HighlightCards >
    </Container>
  )
}
