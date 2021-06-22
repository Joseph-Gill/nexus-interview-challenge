import styled from 'styled-components'


export const MobileVehicleCardContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 211px;
`

export const MobileVehicleImageGalleryContainer = styled.div`
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

export const MobileVehicleImage = styled.img`
    width: 113px;
    height: auto;
    border-radius: 16px;
    margin-left: 5px;
`

export const MobileVehicleImageGallery = styled.div`
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


export const MobileVehicleDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    width: 375px;
    height: 127px;
    left: 0;
    top: 84px;
    flex: none;
`

export const MobileSpecPricingContainer = styled.div`
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

export const MobileHeadingContainer = styled.div`
    position: static;
    width: 335px;
    height: 39px;
    left: 20px;
    top: 20px;
`
