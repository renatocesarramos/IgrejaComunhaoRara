import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import { Image } from 'react-native';

export const Container = styled.View`
    align-items: center;
    flex:1;
    background-color: #202024;
`

export const Header = styled.View`
    background-color: #121214;
    height: ${RFValue(80)}px;
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ImageProfile = styled(Image)`
    width: 40px;
    height: 40px;
    border-radius: 20px;

    position: absolute;
    right: 20px;
`