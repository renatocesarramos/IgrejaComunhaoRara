import styled from 'styled-components/native'
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize'

export const Container = styled.View`
    align-items: center;
    flex: 1;
    background-color: #202024;
`

export const HeaderInfo = styled.View`
    background-color: #121214;
    width: ${RFPercentage(50)}px;
    height: ${RFValue(120)}px;
`
export const UserContainer = styled.View``