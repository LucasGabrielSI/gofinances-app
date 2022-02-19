import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;
  padding: 16px;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border: 1.5px solid ${ ({ theme }) => theme.colors.text }

  ${ ({ isActive, type }) => isActive && type === "up" && css`
    background-color: ${ ({ theme }) => theme.colors.Success_light };
  `}

  ${ ({ isActive, type }) => isActive && type === "down" && css`
    background-color: ${ ({ theme }) => theme.colors.attention_light };
  `}
`;

export const Icon = styled(Feather)<IconProps>`
  margin-right: 12px;
  font-size: ${ RFValue(24) }px;
  color: ${ ({ theme, type }) => 
    type === "up"? theme.colors.success : theme.colors.attention };
`;

export const Title  = styled.Text`
  font-size: ${ RFValue(14) }px;
  font-family: ${ ({ theme }) => theme.fonts.regular };
  color: ${ ({ theme }) => theme.colors.text_dark };
`;