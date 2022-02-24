import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${ ({ theme }) => theme.colors.background };
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  padding-bottom: 19px;
  justify-content: flex-end;
  height: ${ RFValue(113) }px;
  background-color: ${ ({ theme }) => theme.colors.primary };
`;

export const Title = styled.Text`
  font-size: ${ RFValue(18) }px;
  color: ${ ({ theme }) => theme.colors.shape };
  font-family: ${ ({ theme }) => theme.fonts.regular };
`; 

export const Category = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${ RFValue(15) }px;
`;

export const Icon = styled(Feather)`
  font-size: ${ RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-size: ${ RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text };
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;