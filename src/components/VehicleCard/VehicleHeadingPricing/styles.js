import React from 'react'
import {createPriceText} from '../../../helpers'
import purpleStar from '../../../assets/images/purple_star.svg'
import {PurpleStar} from '../../../style/images'
import {HeadingStarContainer, VehicleFinanceLabel, VehicleHeadingContainer, VehicleHeadingStarContainer, VehicleHeadingTitle, VehiclePrice, VehiclePriceCalculate, VehiclePriceContainer, VehiclePricingContainer, VehicleStarContainer} from './index'
import {VehicleDescriptionText} from '../../MobileVehicleCard/MobileVehicleHeading/styles'


const VehicleHeadingPricing = ({vehicle}) => {
    return (
        <>
            <VehicleHeadingStarContainer>
                <HeadingStarContainer>
                    <VehicleStarContainer>
                        {/* eslint-disable-next-line react/jsx-max-depth */}
                        <PurpleStar img='star' src={purpleStar} />
                    </VehicleStarContainer>
                    <VehicleHeadingContainer>
                        {/* eslint-disable-next-line react/jsx-max-depth */}
                        <VehicleHeadingTitle>{`${vehicle["plate"]} ${vehicle["make"]}`}</VehicleHeadingTitle>
                        {/* eslint-disable-next-line react/jsx-max-depth */}
                        <VehicleDescriptionText>{`${vehicle["insurance_group"]} ${vehicle["model"]}`}</VehicleDescriptionText>
                    </VehicleHeadingContainer>
                </HeadingStarContainer>
            </VehicleHeadingStarContainer>
            <VehiclePricingContainer>
                <span>&pound;550.90<VehicleFinanceLabel>/mo (PCP)</VehicleFinanceLabel></span>
                <VehiclePriceContainer>
                    <VehiclePrice>&pound;{createPriceText(vehicle)}</VehiclePrice>
                    <VehiclePriceCalculate>Calculate</VehiclePriceCalculate>
                </VehiclePriceContainer>
            </VehiclePricingContainer>
        </>
    )
}

export default VehicleHeadingPricing
