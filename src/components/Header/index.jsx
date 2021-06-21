import React from 'react'
import styled from 'styled-components'
import {device as devices} from '../../style/devices'


const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    //background: ${props => props.theme.white};
    background: red;
    position: static;
    box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.15);

    @media ${devices.tablet} {
        height: 80px;
    }

    @media ${devices.laptopL} {
        height: 100px;
    }
`


const Header = () => {
    return (
        <HeaderContainer>

        </HeaderContainer>
    )
}

export default Header
