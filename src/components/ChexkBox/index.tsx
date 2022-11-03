import {BillingOptionRow, HiddenCheckbox, Label, StyledCheckBox} from "./styles"


interface CheckBoxProps {
    checked: boolean
    onStateChange: ()=> void
    labelText: string
    description: string
    addToInvoiceData: ()=> void
    removeFromInvoiceDataArray: ()=> void
}

export const CheckBox: React.FC<CheckBoxProps>=({checked, onStateChange, addToInvoiceData, labelText, description, removeFromInvoiceDataArray})=> {

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
        <BillingOptionRow  onClick={clickHundler}>
            <div>
                <HiddenCheckbox checked={checked} onChange={clickHundler}/>
            </div>
            <div>
                <Label htmlFor="oneTime" checked={checked}>{labelText}</Label>
                <p>{description}</p>
            </div>
        </BillingOptionRow>
    )
}