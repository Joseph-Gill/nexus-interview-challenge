import React from 'react'
import styled from 'styled-components'
import {BodyText} from '../../style/texts'
import purpleStar from '../../assets/images/purple_star.svg'
import {PurpleStar} from '../../style/images'
import {createFirstLetterUppercaseOnly, createOdometerText} from '../../helpers'


const MobileVehicleCardContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 211px;
`

const MobileVehicleImageGalleryContainer = styled.div`
    position: relative;
    width: 365px;
    height: 84px;
    left: calc(50% - 365px/2);
    top: 0;
    overflow-x: scroll;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    };
`

const MobileVehicleImage = styled.img`
    width: 113px;
    height: auto;
    border-radius: 16px;
    margin-left: 5px;
`

const MobileVehicleImageGallery = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    position: absolute;
    width: 703px;
    height: 84px;
    left: 0;
    top: 0;

    ${MobileVehicleImage}:nth-child(1){
        margin-left: 0;
    }
`


const MobileVehicleDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    width: 375px;
    height: 127px;
    left: 0;
    top: 84px;
    flex: none;
`

const MobileSpecPricingContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    position: static;
    width: 349px;
    height: 42px;
    left: 20px;
    top: 65px;
`

const MobilePricingContainer = styled.div`
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

const MobilePrice = styled(BodyText)`
    position: static;
    left: calc(50% - 48px/2 - 61.75px);
    top: 0;
    margin-left: 0;
`

const MobileSpecs = styled(BodyText)`
    color: ${props => props.theme.textGray};
`


const MobileSpecContainer = styled.div`
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

const SpecsRowContainer = styled.div`
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

const SpecsRowSpacer = styled(BodyText)`
    position: static;
    width: 4px;
    height: 18px;
    left: calc(50% - 4px/2 - 23.75px);
    top: 0;
    color: ${props => props.theme.spacerGray};
`

const MobileHeadingContainer = styled.div`
    position: static;
    width: 335px;
    height: 39px;
    left: 20px;
    top: 20px;
`

const HeadingListingStarContainer = styled.div`
    position: relative;
    width: 335px;
    height: 39px;
`

const MobileStarContainer = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    right: 0;
    top: 0;
`

const MobileTagContainer = styled.div`
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

const TagText = styled(BodyText)`
    position: static;
    width: 26px;
    height: 18px;
    left: calc(50% - 26px/2);
    top: 1px;
    color: ${props => props.theme.white};
    margin-left: 0;
`

const ListingContainer = styled.div`
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

const VehicleTitleText = styled(BodyText)`
    line-height: 21px;
    position: static;
    width: 349px;
    height: 21px;
    left: calc(50% - 349px/2);
    top: 0;
    color: ${props => props.theme.black};
`

const VehicleDescriptionText = styled(BodyText)`
    position: static;
    width: 349px;
    height: 18px;
    left: calc(50% - 349px/2);
    top: 21px;
    color: ${props => props.theme.textGray};
`


const MobileVehicleCard = ({image, vehicle}) => {

    const renderGallery = () => {
        const result = []
        for (let i = 0; i < 6; i++) {
            result.push(<MobileVehicleImage alt='vehicle image' key={i} src={image} />)
        }
        return result
    }

    return (
        <MobileVehicleCardContainer>
            <MobileVehicleImageGalleryContainer>
                <MobileVehicleImageGallery>
                    {renderGallery()}
                </MobileVehicleImageGallery>
            </MobileVehicleImageGalleryContainer>
            <MobileVehicleDetailsContainer>
                <MobileHeadingContainer>
                    <HeadingListingStarContainer>
                        <ListingContainer>
                            <VehicleTitleText>{`${vehicle["plate"]} ${vehicle["make"]}`}</VehicleTitleText>
                            <VehicleDescriptionText>{`${vehicle["insurance_group"]} ${vehicle["model"]}`}</VehicleDescriptionText>
                        </ListingContainer>
                        <MobileTagContainer>
                            <TagText>{createFirstLetterUppercaseOnly(vehicle["advert_classification"])}</TagText>
                        </MobileTagContainer>
                        <MobileStarContainer>
                            <PurpleStar alt='star' src={purpleStar} />
                        </MobileStarContainer>
                    </HeadingListingStarContainer>
                </MobileHeadingContainer>
                <MobileSpecPricingContainer>
                    <MobileSpecContainer>
                        <SpecsRowContainer>
                            <MobileSpecs>{createOdometerText(vehicle)}</MobileSpecs>
                            <SpecsRowSpacer>|</SpecsRowSpacer>
                            <MobileSpecs>{vehicle["fuel_type"]}</MobileSpecs>
                        </SpecsRowContainer>
                        <SpecsRowContainer>
                            <MobileSpecs>{createFirstLetterUppercaseOnly(vehicle["transmission"])}</MobileSpecs>
                            <SpecsRowSpacer>|</SpecsRowSpacer>
                            <MobileSpecs>{vehicle["body_type"]}</MobileSpecs>
                        </SpecsRowContainer>
                    </MobileSpecContainer>
                    <MobilePricingContainer>
                        <span>&pound;550.90 <BodyText>/mo (PCP)</BodyText></span>
                        <MobilePrice>&pound;{vehicle["price_ex_vat"]}</MobilePrice>
                    </MobilePricingContainer>
                </MobileSpecPricingContainer>
            </MobileVehicleDetailsContainer>
        </MobileVehicleCardContainer>
    )
}

export default MobileVehicleCard
