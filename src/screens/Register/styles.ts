import styled from 'styled-components/native';

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

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  justify-content: space-between;
`;

export const Fields = styled.View``;

export const TransactionsTypes = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
`;