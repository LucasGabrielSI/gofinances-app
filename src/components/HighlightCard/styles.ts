import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  padding: 19px 23px;
  border-radius: 5 px;
  width: ${ RFValue(300) }px;
  padding-bottom: ${ RFValue(42) };
  background-color: ${ ({ theme }) => theme.colors.shape };
`;

export const Header = styled.View``;

export const Title = styled.Text``;

export const Icon = styled(Feather)``;

export const Footer = styled.View``;

export const Amount = styled.Text``;

export const LastTransaction = styled.Text``;