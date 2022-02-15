import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TextInput`
  width: 100%;
  padding: 16px 18px;
  margin-bottom: 8px;
  border-radius: 5px;
  font-size: ${ RFValue(14) }px;
  color: ${ ({ theme }) => theme.colors.text_dark };
  font-family: ${ ({ theme }) => theme.fonts.regular };
  background-color: ${ ({ theme }) => theme.colors.shape };
`;