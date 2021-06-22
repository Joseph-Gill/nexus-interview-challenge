import React from 'react'
import VehicleSpecTags from './VehicleSpecTags'
import VehicleHeadingPricing from './VehicleHeadingPricing/styles'
import {createFirstLetterUppercaseOnly} from '../../helpers'
import {VehicleCardContainer, VehicleDetailsContainer, VehicleImage, VehicleImageSpecListingContainer,
    VehicleListingTagContainer, VehicleTagText} from './styles'


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
                <VehicleHeadingPricing vehicle={vehicle} />
            </VehicleDetailsContainer>
        </VehicleCardContainer>
    )
}

export default VehicleCard
