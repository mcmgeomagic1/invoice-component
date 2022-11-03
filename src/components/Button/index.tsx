import {StyledButton} from "./styles"

interface ButtonProps {
    checked: boolean
    onStateChange: ()=> void
    text: string
    addToInvoiceData: ()=> void
    removeFromInvoiceDataArray: ()=> void
}

export const Button: React.FC<ButtonProps>=({checked, onStateChange, addToInvoiceData, text, removeFromInvoiceDataArray}) => {

    const clickHundler: ()=> void =()=> {
        checked ? (
            onStateChange(),
            removeFromInvoiceDataArray()
        ) : (
            onStateChange(),
            addToInvoiceData()
        )
    }

    return(
        <StyledButton onClick={clickHundler} checked={checked}>{text}</StyledButton>
    )
}