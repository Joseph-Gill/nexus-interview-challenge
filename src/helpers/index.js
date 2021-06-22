// Used in vehicle cards to convert key/value when value is fully uppercase
export const createFirstLetterUppercaseOnly = value => {
        const word = value
        const firstLetter = word.charAt(0).toUpperCase()
        return firstLetter.concat(word.slice(1).toLowerCase())
}

// Used in vehicle cards to create the correct odometer text value to display
export const createOdometerText = vehicle => vehicle["odometer_value"].toString().slice(0,2).concat('k miles')

// Used in vehicle cards to get price without decimals
export const createPriceText = vehicle => vehicle["price_ex_vat"].slice(0, -3)
