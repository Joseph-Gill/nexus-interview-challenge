import React from 'react'
import {createFirstLetterUppercaseOnly} from '../../../helpers'
import purpleStar from '../../../assets/images/purple_star.svg'
import {PurpleStar} from '../../../style/images'
import {HeadingListingStarContainer, ListingContainer, MobileStarContainer, MobileTagContainer,
    TagText, VehicleDescriptionText, VehicleTitleText} from './styles'


const MobileVehicleHeading = ({vehicle}) => {
    return (
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
    )
}

export default MobileVehicleHeading
