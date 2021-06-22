import React from 'react'
import styled from 'styled-components'
import {exampleJSON} from '../../helpers/exampleJson'
import vehicleOne from '../../assets/images/vehicle_image_one.svg'
import vehicleTwo from '../../assets/images/vehicle_image_two.svg'
import vehicleThree from '../../assets/images/vehicle_image_three.svg'
import MobileVehicleCard from '../../components/MobileVehicleCard'


const PageContainer = styled.div`
    position: relative;
    width: 100vw;
`

const VehicleListContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 30px;
    width: 100%;
    left: 0;
    top: 165px;
`


const SearchPage = () => {

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

    return (
        <PageContainer>
            <VehicleListContainer>
                {renderMobileCards()}
            </VehicleListContainer>
        </PageContainer>
    )
}

export default SearchPage
