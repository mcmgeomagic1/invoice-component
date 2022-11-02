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

    const clickHunder: ()=> void =()=> {
        if(checked) {
            onStateChange()
            removeFromInvoiceDataArray()
        }else {
            onStateChange()
            addToInvoiceData()
        }
    }
    return(
        <BillingOptionRow  onClick={clickHunder}>
            <div>
                <HiddenCheckbox checked={checked} onChange={clickHunder}/>
            </div>
            <div>
                <Label htmlFor="oneTime" checked={checked}>{labelText}</Label>
                <p>{description}</p>
            </div>
        </BillingOptionRow>
    )
}