import styled from 'styled-components'
import {BodyText} from '../../../style/texts'


export const MobilePricingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    position: static;
    width: 171.5px;
    height: 42px;
    left: 177.5px;
    top: 0;

    span {
        height: 24px;
        display: flex;
        left: calc(50% - 171.5px/2);
        top: 0;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;

        ${BodyText} {
            margin-left: 5px;
        }
    }
`

export const MobilePrice = styled(BodyText)`
    position: static;
    left: calc(50% - 48px/2 - 61.75px);
    top: 0;
    margin-left: 0;
`

export const MobileSpecs = styled(BodyText)`
    color: ${props => props.theme.textGray};
`


export const MobileSpecContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    position: static;
    width: 171.5px;
    height: 42px;
    left: 0;
    top: 0;
`

export const SpecsRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    position: static;
    width: 171.5px;
    height: 18px;
    left: 0;
    top: 3px;
`

export const SpecsRowSpacer = styled(BodyText)`
    position: static;
    width: 4px;
    height: 18px;
    left: calc(50% - 4px/2 - 23.75px);
    top: 0;
    color: ${props => props.theme.spacerGray};
`
