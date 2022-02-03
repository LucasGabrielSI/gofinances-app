import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  padding: 19px 23px;
  margin-right: 16px;
  border-radius: 5px;
  width: ${ RFValue(300) }px;
  padding-bottom: ${ RFValue(42) }px;
  background-color: ${ ({ theme }) => theme.colors.shape };
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${ RFValue(14)}px;
  font-family: ${ ({ theme }) => theme.fonts.regular };
  color: ${ ({ theme }) => theme.colors.text_dark };
`;

export const Icon = styled(Feather)`
  font-size: ${ RFValue(40) }px;
  color: ${ ({ theme }) => theme.colors.text_dark };
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  margin-top: 38px;
  font-size: ${ RFValue(32)}px;
  color: ${ ({ theme }) => theme.colors.text_dark };
  font-family: ${ ({ theme }) => theme.fonts.medium };
`;

export const LastTransaction = styled.Text`
  font-size: ${ RFValue(12)}px;
  color: ${ ({ theme }) => theme.colors.text };
  font-family: ${ ({ theme }) => theme.fonts.regular };
`;