import { useEffect, useState } from "react"
import { useAppContext } from "../../context/AppContext"
import {
    InvoiceBoxDiv, 
    InvoiceHeader, 
    InvoiceBody, 
    FirstColumn, 
    SecondColumn, 
    ThirdColumn, 
    FourthColumn,
    ItemRow,
    InvoiceFooter,
    ColumnTitle,
    InvoiceNote,
    DescountRow,
    InvoiceRows
} from "./style"


interface invoiceBoxProps {
    isBillingFrequencyChecked: boolean
}
export const InvoiceBox: React.FC<invoiceBoxProps>=({isBillingFrequencyChecked}) => {
    const[totalPrice, setTotalPrice] = useState(5265)
    const[billingFrequencyData, setBillingFrequencyDate] = useState("")
    const {dynamicInvoiceData} = useAppContext()

    useEffect(()=> {
        findTotal()
    },[dynamicInvoiceData])

    useEffect(()=> {
        addBillingFrequency()
    },[isBillingFrequencyChecked])
   
    function findTotal(): void {
        setTotalPrice(dynamicInvoiceData.reduce((a: any, b: any) => a + parseInt(b.amount), 0))
    }

    function addBillingFrequency(): void {
        if(isBillingFrequencyChecked) {
            setBillingFrequencyDate("15th, 2021 to April 14th")
        }else {
            setBillingFrequencyDate("1st, 2021 to March 31st")
        }
    }

    return (
        <InvoiceBoxDiv>
            <InvoiceHeader>
                <h3>Invoice</h3>
                <p>Billing period from March {billingFrequencyData}</p>
            </InvoiceHeader>
            <InvoiceBody>
                <ColumnTitle>
                    <FirstColumn>
                        <ItemRow itemType="single">
                            <h4>Description</h4>
                        </ItemRow>
                    </FirstColumn>
                    <SecondColumn>
                        <ItemRow itemType="single">
                            <h4>Qty</h4>
                        </ItemRow>
                    </SecondColumn>
                    <ThirdColumn>
                        <ItemRow itemType="single">
                            <h4>Price</h4>
                        </ItemRow>
                    </ThirdColumn>
                    <FourthColumn>
                        <ItemRow itemType="single">
                            <h4>Amount</h4>
                        </ItemRow>
                    </FourthColumn>
                </ColumnTitle>

                    {
                        dynamicInvoiceData.map((item: any)=> (
                            <>
                                {
                                    item.itemType === "single" ?
                                        <InvoiceRows itemType={item.itemType} key={item.invoiceId}>
                                            <FirstColumn>
                                                <ItemRow itemType={item.itemType}>
                                                    <p>{item.description}</p>
                                                </ItemRow>
                                            </FirstColumn>
                                            <SecondColumn>
                                                <ItemRow itemType={item.itemType}>
                                                    <p>{item.qty}</p>
                                                </ItemRow>
                                            </SecondColumn>
                                            <ThirdColumn>
                                                <ItemRow itemType={item.itemType}>
                                                    <p>${item.price}</p>
                                                </ItemRow>
                                            </ThirdColumn>
                                            <FourthColumn>
                                                <ItemRow itemType={item.itemType}>
                                                    <p>${parseInt(item.amount)}</p>
                                                </ItemRow>
                                            </FourthColumn>
                                        </InvoiceRows>
                                    :   item.itemType === "group" ?
                                        <>
                                            <InvoiceNote>
                                                <h4>{item.description}</h4>
                                            </InvoiceNote>
                                            {
                                                item.group.map((groupItem: any)=> (
                                                    <InvoiceRows itemType={item.itemType} key={groupItem.description}>
                                                        <FirstColumn>
                                                            <ItemRow itemType={item.itemType}>
                                                                <p>{groupItem.description}</p>
                                                            </ItemRow>
                                                        </FirstColumn>
                                                        <SecondColumn>
                                                            <ItemRow itemType={item.itemType}>
                                                                <p>{groupItem.qty}</p>
                                                            </ItemRow>
                                                        </SecondColumn>
                                                        <ThirdColumn>
                                                            <ItemRow itemType={item.itemType}>
                                                                <p>${groupItem.price}</p>
                                                            </ItemRow>
                                                        </ThirdColumn>
                                                        <FourthColumn>
                                                            <ItemRow itemType={item.itemType}>
                                                                <p>${parseInt(groupItem.amount)}</p>
                                                            </ItemRow>
                                                        </FourthColumn>
                                                    </InvoiceRows>
                                                ))
                                            }
                                        </>
                                    :
                                        <DescountRow>
                                            <p>{item.description}</p>
                                            <p>{item.amount}</p>
                                        </DescountRow>
                                }
                            </>
                        ))
                    }
            </InvoiceBody>
            <InvoiceFooter>
                <div>
                    <span>Total</span>
                </div>
                <div>
                    <span>${totalPrice}</span>
                </div>
            </InvoiceFooter>
        </InvoiceBoxDiv>    
    )
}