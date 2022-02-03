import react from 'react';

import { HighlightCard } from '../../components/HighlightCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
} from './styles'

export function Dashboard() {
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://avatars.githubusercontent.com/u/29556004?v=4" }} />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Lucas Gabriel</UserName>
            </User>
          </UserInfo> 

          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighlightCards horizontal showsHorizontalScrollIndicator={false}>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  )
}