import styled from 'styled-components'


export const PageContainer = styled.div`
    position: relative;
    width: 100vw;
`

export const MobileVehicleListContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 30px;
    width: 100%;
    left: 0;
    top: 165px;
`

export const TabletVehicleListContainer = styled.div`
    position: absolute;
    width: 669px;
    left: 50px;
    top: 110px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
`

export const DesktopVehicleListContainer = styled.div`
    position: absolute;
    width: 1029px;
    left: 380px;
    top: 267px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
`
