import React from 'react'
import styled from 'styled-components'
import {BodyText} from '../../style/texts'


const MobileVehicleCardContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 211px;
    background: rebeccapurple;
`

const MobileVehicleImageGalleryContainer = styled.div`
    position: relative;
    width: 365px;
    height: 84px;
    left: calc(50% - 365px/2);
    top: 0;
    overflow-x: scroll;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
        display: none;
    };
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
    width: 703px;
    height: 84px;
    left: 0;
    top: 0;

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
    background: darkgreen;
`

const MobileHeadingContainer = styled.div`
    position: static;
    width: 335px;
    height: 39px;
    left: 20px;
    top: 20px;
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
