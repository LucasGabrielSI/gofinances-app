import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  margin-top: 20px;
  padding: 18px 16px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${ ({ theme }) => theme.colors.shape };
`;

export const Category = styled.Text`
  font-size: ${ RFValue(14) }px;
  color: ${ ({ theme }) => theme.colors.text };
  font-family: ${ ({ theme }) => theme.fonts.regular };
`; 

export const Icon = styled(Feather)`
  font-size: ${ RFValue(20) }px;
  color: ${ ({ theme }) => theme.colors.text };
`;