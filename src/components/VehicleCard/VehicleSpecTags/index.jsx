import React from 'react'
import {createFirstLetterUppercaseOnly, createOdometerText} from '../../../helpers'
import {TagTextContainerOne, TagTextContainerThree, TagTextContainerTwo, TagTextOne, TagTextThree,
    TagTextTwo, VehicleSpecTagsContainer} from './styles'


const VehicleSpecTags = ({vehicle}) => {
    return (
        <VehicleSpecTagsContainer>
            <TagTextContainerOne>
                <TagTextOne>{createOdometerText(vehicle)}</TagTextOne>
            </TagTextContainerOne>
            <TagTextContainerTwo>
                <TagTextTwo>{vehicle["fuel_type"]}</TagTextTwo>
            </TagTextContainerTwo>
            <TagTextContainerThree>
                <TagTextThree>{createFirstLetterUppercaseOnly(vehicle["transmission"])}</TagTextThree>
            </TagTextContainerThree>
        </VehicleSpecTagsContainer>
    )
}

export default VehicleSpecTags
