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
  UserWrapper
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
      <HighlightCard />
    </Container>
  )
}
