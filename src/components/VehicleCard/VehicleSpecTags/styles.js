import styled from 'styled-components'
import {BodyText} from '../../../style/texts'


export const TagTextContainerOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1px 10px;
    position: static;
    width: 75px;
    height: 20px;
    left: 0;
    top: 0;
    background: ${props => props.theme.darkOne};
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    margin-left: 5px;
`

export const VehicleSpecTagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    position: absolute;
    width: 254px;
    height: 20px;
    left: 10px;
    bottom: 10px;

    ${TagTextContainerOne}:nth-child(1) {
        margin-left: 0;
    }
`

export const TagTextOne = styled(BodyText)`
    position: static;
    width: 55px;
    height: 18px;
    left: calc(50% - 55px/2);
    top: 1px;
    color: ${props => props.theme.white};
    margin-left: 0;
`

export const TagTextContainerTwo = styled(TagTextContainerOne)`
    width: 58px;
    left: 80px;
`

export const TagTextTwo = styled(TagTextOne)`
    width: 38px;
    left: calc(50% - 38px/2);
`

export const TagTextContainerThree = styled(TagTextContainerOne)`
    width: 78px;
    left: 143px;
`

export const TagTextThree = styled(TagTextOne)`
    width: 58px;
    left: calc(50% - 58px/2);
`
