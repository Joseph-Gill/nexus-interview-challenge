import React from 'react'
import MobileVehicleHeading from './MobileVehicleHeading'
import MobileVehicleSpecPricing from './MobileVehicleSpecPricing'
import {MobileHeadingContainer, MobileSpecPricingContainer, MobileVehicleCardContainer,
    MobileVehicleDetailsContainer, MobileVehicleImage, MobileVehicleImageGallery,
    MobileVehicleImageGalleryContainer} from './styles'


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
                    <MobileVehicleHeading vehicle={vehicle} />
                </MobileHeadingContainer>
                <MobileSpecPricingContainer>
                    <MobileVehicleSpecPricing vehicle={vehicle} />
                </MobileSpecPricingContainer>
            </MobileVehicleDetailsContainer>
        </MobileVehicleCardContainer>
    )
}

export default MobileVehicleCard
