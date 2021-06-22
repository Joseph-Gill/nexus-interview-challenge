import styled from 'styled-components'
import {BodyText} from '../../../style/texts'


export const HeadingListingStarContainer = styled.div`
    position: relative;
    width: 335px;
    height: 39px;
`

export const MobileStarContainer = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 0;
    top: 0;
`

export const MobileTagContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1px 8px;
    position: absolute;
    width: 46px;
    height: 20px;
    right: 34px;
    top: 0;
    background: ${props => props.theme.darkOne};
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 8px;
`

export const TagText = styled(BodyText)`
    position: static;
    width: 26px;
    height: 18px;
    left: calc(50% - 26px/2);
    top: 1px;
    color: ${props => props.theme.white};
    margin-left: 0;
`

export const ListingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    position: absolute;
    width: 349px;
    height: 39px;
    left: 0;
    top: 0;
`

export const VehicleTitleText = styled(BodyText)`
    line-height: 21px;
    position: static;
    width: 349px;
    height: 21px;
    left: calc(50% - 349px/2);
    top: 0;
    color: ${props => props.theme.black};
`

export const VehicleDescriptionText = styled(BodyText)`
    position: static;
    width: 349px;
    height: 18px;
    left: calc(50% - 349px/2);
    top: 21px;
    color: ${props => props.theme.textGray};
`
