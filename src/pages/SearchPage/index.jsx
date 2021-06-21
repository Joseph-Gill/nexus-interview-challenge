import React from 'react'
import styled from 'styled-components'
import {exampleJSON} from '../../helpers/exampleJson'
import vehicleOne from '../../assets/images/vehicle_image_one.svg'
import MobileVehicleCard from '../../components/MobileVehicleCard'


const PageContainer = styled.div`
    //padding-top: 60px;
    position: relative;
    width: 100vw;
    //min-height: 100vh;
    //width: 100%;
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
    return (
        <PageContainer>
            <VehicleListContainer>
                <MobileVehicleCard
                    image={vehicleOne}
                    vehicle={exampleJSON}
                />
                {/*<VehicleCard*/}
                {/*    image={vehicleOne}*/}
                {/*    vehicle={exampleJSON}*/}
                {/*/>*/}
                {/*<VehicleCard*/}
                {/*    image={vehicleOne}*/}
                {/*    vehicle={exampleJSON}*/}
                {/*/>*/}
                {/*<VehicleCard*/}
                {/*    image={vehicleOne}*/}
                {/*    vehicle={exampleJSON}*/}
                {/*/>*/}
                {/*<VehicleCard*/}
                {/*    image={vehicleOne}*/}
                {/*    vehicle={exampleJSON}*/}
                {/*/>*/}
                {/*<VehicleCard*/}
                {/*    image={vehicleOne}*/}
                {/*    vehicle={exampleJSON}*/}
                {/*/>*/}
                {/*<VehicleCard*/}
                {/*    image={vehicleOne}*/}
                {/*    vehicle={exampleJSON}*/}
                {/*/>*/}
            </VehicleListContainer>
        </PageContainer>
    )
}

export default SearchPage
