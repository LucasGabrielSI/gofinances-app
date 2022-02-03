import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${ ({ theme }) => theme.colors.background };
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: ${ RFPercentage(42) }px;
  background-color: ${ ({ theme }) => theme.colors.primary };
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  border-radius: 10px;
  width: ${ RFValue(48) }px;
  height: ${ RFValue(48) }px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  font-size: ${ RFValue(18)}px;
  color: ${ ({ theme }) => theme.colors.shape };
  font-family: ${ ({ theme }) => theme.fonts.regular };
`;

export const  UserName = styled.Text`
  font-size: ${ RFValue(18)}px;
  color: ${ ({ theme }) => theme.colors.shape };
  font-family: ${ ({ theme }) => theme.fonts.bold };
`;

export const Icon = styled(Feather)`
  color: ${ ({ theme }) => theme.colors.secondary };
  font-size: ${ RFValue(24) }px;
`;

export const HighlightCards = styled.ScrollView``;