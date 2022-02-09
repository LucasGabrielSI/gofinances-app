import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TransactionProps {
  type: "positive" | "negative";
}

export const Container = styled.View`
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
  background-color: ${ ({ theme }) => theme.colors.shape };
`;

export const Title = styled.Text`
  font-size: ${ RFValue(14) }px;
  font-family: ${ ({ theme }) => theme.fonts.regular };
`;

export const Amount = styled.Text<TransactionProps>`
  margin-top: 2px;
  font-size: ${ RFValue(20) }px;
  font-family: ${ ({ theme }) => theme.fonts.regular };
  color: ${ ({ theme, type }) => 
    type === "positive" ? theme.colors.success : theme.colors.attention};
`;

export const Footer = styled.View`
  margin-top: 19px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${ RFValue(20) }px;
  color: ${ ({ theme }) => theme.colors.text };
`;

export const CategoryName = styled.Text`
  margin-left: 17px;
  font-size: ${ RFValue(14) }px;
  color: ${ ({ theme }) => theme.colors.text };
  font-family: ${ ({ theme }) => theme.fonts.regular };

`;

export const Date = styled.Text`
  font-size: ${ RFValue(14) }px;
  color: ${ ({ theme }) => theme.colors.text };
  font-family: ${ ({ theme }) => theme.fonts.regular };
`;
