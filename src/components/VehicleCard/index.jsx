import React from 'react'
import styled from 'styled-components'
import {createFirstLetterUppercaseOnly} from '../../helpers'
import {BodyText, DesktopBodyText} from '../../style/texts'
import VehicleSpecTags from './VehicleSpecTags'
import {PurpleStar} from '../../style/images'
import purpleStar from '../../assets/images/purple_star.svg'


const VehicleCardContainer = styled.div`
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

const VehicleImageSpecListingContainer = styled.div`
    position: relative;
    width: 327px;
    height: 250px;
    left: calc(50% - 327px/2);
    top: 0;
`

const VehicleImage = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

const VehicleListingTagContainer = styled.div`
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

const VehicleTagText = styled.p`
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

const VehicleDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0;
    position: static;
    width: 333px;
    height: 114px;
    left: 0;
    top: 250px;
`

const VehicleHeadingStarContainer = styled.div`
    position: static;
    width: 333px;
    height: 42px;
    left: 0;
    top: 10px;
`

const HeadingStarContainer = styled.div`
    position: relative;
    width: 333px;
    height: 42px;
`

const VehicleStarContainer = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 10px;
    top: 0;
`

const VehicleHeadingContainer = styled.div`
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

const VehicleHeadingTitle = styled(DesktopBodyText)`
    width: 313px;
    height: 24px;
    left: calc(50% - 313px/2);
    top: 0;
    color: ${props => props.theme.black};
`

const VehicleDescriptionText = styled(BodyText)`
    position: static;
    width: 313px;
    height: 18px;
    left: calc(50% - 313px/2);
    top: 24px;
    color: ${props => props.theme.textGray};
    margin-left: 0;
`


const VehicleCard = ({image, vehicle}) => {
    return (
        <VehicleCardContainer>
            <VehicleImageSpecListingContainer>
                <VehicleListingTagContainer>
                    <VehicleTagText>{createFirstLetterUppercaseOnly(vehicle["advert_classification"])}</VehicleTagText>
                </VehicleListingTagContainer>
                <VehicleImage alt='vehicle' src={image} />
                <VehicleSpecTags vehicle={vehicle} />
            </VehicleImageSpecListingContainer>
            <VehicleDetailsContainer>
                <VehicleHeadingStarContainer>
                    <HeadingStarContainer>
                        <VehicleStarContainer>
                            <PurpleStar img='star' src={purpleStar} />
                        </VehicleStarContainer>
                        <VehicleHeadingContainer>
                            <VehicleHeadingTitle>{`${vehicle["plate"]} ${vehicle["make"]}`}</VehicleHeadingTitle>
                            <VehicleDescriptionText>{`${vehicle["insurance_group"]} ${vehicle["model"]}`}</VehicleDescriptionText>
                        </VehicleHeadingContainer>
                    </HeadingStarContainer>
                </VehicleHeadingStarContainer>
            </VehicleDetailsContainer>
        </VehicleCardContainer>
    )
}

export default VehicleCard
