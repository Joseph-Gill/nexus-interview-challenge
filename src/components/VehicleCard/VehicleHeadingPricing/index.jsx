import styled from 'styled-components'
import {BodyText, DesktopBodyText} from '../../../style/texts'


export const VehicleHeadingStarContainer = styled.div`
    position: static;
    width: 333px;
    height: 42px;
    left: 0;
    top: 10px;
`

export const HeadingStarContainer = styled.div`
    position: relative;
    width: 333px;
    height: 42px;
`

export const VehicleStarContainer = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 10px;
    top: 0;
`

export const VehicleHeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;
    position: absolute;
    width: 333px;
    height: 42px;
    left: 0;
    top: 0;
`

export const VehicleHeadingTitle = styled(DesktopBodyText)`
    width: 313px;
    height: 24px;
    left: calc(50% - 313px/2);
    top: 0;
    color: ${props => props.theme.black};
`

export const VehicleDescriptionText = styled(BodyText)`
    position: static;
    width: 313px;
    height: 18px;
    left: calc(50% - 313px/2);
    top: 24px;
    color: ${props => props.theme.textGray};
    margin-left: 0;
`

export const VehiclePricingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 10px;
    position: static;
    width: 186.5px;
    height: 42px;
    left: 0;
    top: 0;

    span {
        display: flex;
        position: static;
        width: 143.5px;
        height: 24px;
        left: calc(50% - 143.5px/2);
        top: 0;
        font-family: ${props => props.theme.overpassFontFamily};
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 24px;
        color: ${props => props.theme.black};
    }
`

export const VehicleFinanceLabel = styled(BodyText)`
    margin-top: 2.5px;
`

export const VehiclePriceContainer = styled.div`
    display: flex;
`

export const VehiclePrice = styled(BodyText)`
    position: static;
    width: 48px;
    height: 18px;
    left: calc(50% - 48px/2 - 49.25px);
    top: 0;
    color: ${props => props.theme.black};
    margin-left: 0;
`

export const VehiclePriceCalculate = styled(BodyText)`
    position: static;
    width: 53px;
    height: 18px;
    left: calc(50% - 53px/2 + 9.25px);
    top: 0;
    color: ${props => props.theme.primaryPurple};
`
