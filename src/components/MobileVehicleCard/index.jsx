import React from 'react'
import styled from 'styled-components'
import {BodyText} from '../../style/texts'


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
                        <span>&pound;550.90 <BodyText>/mo (PCP)</BodyText></span>
                        <MobilePrice>&pound;{vehicle["price_ex_vat"]}</MobilePrice>
                    </MobilePricingContainer>
                </MobileSpecPricingContainer>
            </MobileVehicleDetailsContainer>
        </MobileVehicleCardContainer>
    )
}

export default MobileVehicleCard
