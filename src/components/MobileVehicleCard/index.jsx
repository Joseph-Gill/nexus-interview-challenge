import React from 'react'
import styled from 'styled-components'


const MobileVehicleCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    position: static;
    width: 375px;
    height: 211px;
    left: 0;
    top: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

const MobileVehicleImageGalleryContainer = styled.div`
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 84px;
    left: calc(50% - 349px/2);
    top: 0;
    border-radius: 16px;
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
    width: 100vw;
    height: 84px;
    left: 0;
    top: 0;
    overflow-x: scroll;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    };

    ${MobileVehicleImage}:nth-child(1){
        margin-left: 0;
    }
`


const MobileVehicleDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    width: 375px;
    height: 127px;
    left: 0;
    top: 84px;
    background: rebeccapurple;
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
    background: aqua;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 6px 0;
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
    flex: none;
    order: 1;
    flex-grow: 1;
    margin: 0 6px;
    background: coral;
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
    flex: none;
    order: 0;
    flex-grow: 1;
    margin: 0 6px;
    background: darkgreen;
`

const MobileHeadingContainer = styled.div`
    position: static;
    width: 335px;
    height: 39px;
    left: 20px;
    top: 20px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 6px 0;
    background: gray;
`


const MobileVehicleCard = ({image, vehicle}) => {
    console.log(vehicle)

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

                </MobileHeadingContainer>
                <MobileSpecPricingContainer>
                    <MobileSpecContainer>

                    </MobileSpecContainer>
                    <MobilePricingContainer>

                    </MobilePricingContainer>
                </MobileSpecPricingContainer>
            </MobileVehicleDetailsContainer>
        </MobileVehicleCardContainer>
    )
}

export default MobileVehicleCard
