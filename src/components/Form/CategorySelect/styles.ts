import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${ ({ theme }) => theme.colors.shape };
`;

export const Category = styled.Text``; 

export const Icon = styled(Feather)``;