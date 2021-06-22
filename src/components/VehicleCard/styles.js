import styled from 'styled-components'


export const VehicleCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    position: static;
    width: 327px;
    height: 364px;
    left: 0;
    top: 0;
    background: ${props => props.theme.white};
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
`

export const VehicleImageSpecListingContainer = styled.div`
    position: relative;
    width: 327px;
    height: 250px;
    left: calc(50% - 327px/2);
    top: 0;
`

export const VehicleImage = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

export const VehicleListingTagContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 2px 10px;
    position: absolute;
    width: 57px;
    height: 29px;
    left: 10px;
    top: 10px;
    background: ${props => props.theme.darkOne};
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    z-index: 1;
`

export const VehicleTagText = styled.p`
    position: static;
    width: 37px;
    height: 27px;
    left: calc(50% - 37px/2);
    top: 1px;
    font-family: ${props => props.theme.overpassFontFamily};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 27px;
    color: ${props => props.theme.white};
    `

export const VehicleDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px 0;
    position: static;
    width: 333px;
    height: 114px;
    left: 0;
    top: 250px;
`
