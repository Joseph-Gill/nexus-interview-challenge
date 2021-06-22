import React from 'react'
import VehicleCard from '../../components/VehicleCard'
import MobileVehicleCard from '../../components/MobileVehicleCard'
import {useWindowDimensions} from '../../hooks'
import {exampleJSON} from '../../helpers/exampleJson'
import vehicleOne from '../../assets/images/vehicle_image_one.svg'
import vehicleTwo from '../../assets/images/vehicle_image_two.svg'
import vehicleThree from '../../assets/images/vehicle_image_three.svg'
import {DesktopVehicleListContainer, MobileVehicleListContainer, PageContainer, TabletVehicleListContainer} from './styles'


const SearchPage = () => {
    const windowDimensions = useWindowDimensions()

    const vehiclesToRender = [
        {id: 10, image: vehicleOne, vehicleInfo: exampleJSON},
        {id: 11, image: vehicleTwo, vehicleInfo: exampleJSON},
        {id: 12, image: vehicleThree, vehicleInfo: exampleJSON},
        {id: 13, image: vehicleOne, vehicleInfo: exampleJSON},
        {id: 14, image: vehicleTwo, vehicleInfo: exampleJSON},
        {id: 15, image: vehicleThree, vehicleInfo: exampleJSON},
    ]


    const renderMobileCards = () => vehiclesToRender.map(vehicle => (
        <MobileVehicleCard
            image={vehicle.image}
            key={vehicle.id}
            vehicle={vehicle.vehicleInfo}
        />
    ))

    const renderFullSizeCards = () => vehiclesToRender.map(vehicle => (
        <VehicleCard
            image={vehicle.image}
            key={vehicle.id}
            vehicle={vehicle.vehicleInfo}
        />
    ))

    const decideCardsRendered = () => {
        if (windowDimensions.width < 768){
            return (
                <MobileVehicleListContainer>
                    {renderMobileCards()}
                </MobileVehicleListContainer>
            )
        } else if (windowDimensions.width >= 1440) {
            return (
                <DesktopVehicleListContainer>
                    {renderFullSizeCards()}
                </DesktopVehicleListContainer>
            )
        } else {
            return (
                <TabletVehicleListContainer>
                    {renderFullSizeCards()}
                </TabletVehicleListContainer>
            )
        }
    }

    return (
        <PageContainer>
            {decideCardsRendered()}
        </PageContainer>
    )
}

export default SearchPage
