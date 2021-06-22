import React from 'react'
import {createFirstLetterUppercaseOnly, createOdometerText, createPriceText} from '../../../helpers'
import {BodyText} from '../../../style/texts'
import {MobilePrice, MobilePricingContainer, MobileSpecContainer, MobileSpecs, SpecsRowContainer, SpecsRowSpacer} from './styles'


const MobileVehicleSpecPricing = ({vehicle}) => {
    return (
        <>
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
                <MobilePrice>&pound;{createPriceText(vehicle)}</MobilePrice>
            </MobilePricingContainer>
        </>
    )
}

export default MobileVehicleSpecPricing
