import { Row } from "../../styles/Row";
import {useState} from "react"
import {
    GranualControlSection,
    FlexLayout, 
    Flex1, 
    Flex2, 
    CheckBoxDiv,
    ButtonDiv,
    Scrollable
} from "./styles"
import { InvoiceBox } from "../InvoiceBox";
import { CheckBox } from "../ChexkBox";
import { Button } from "../Button";
import { InvoiceData} from "./InvoiceData"

export const GraualControl: React.FC =() => {
    const [isOneTimeChecked, setIsOneTimeChecked] =useState(true)
    const [isRecurringBillingChecked, setIsRecurringBillingChecked] =useState(true)
    const [isUsageBasedBillingChecked, setIsUsageBasedBillingChecked] =useState(true)
    const [isTieredPricingChecked, setIsTieredPricingChecked] =useState(true)
    const [isPromotionsAndTrialPeriodChecked, setIsPromotionsAndTrialPeriodChecked] =useState(true)
    const [isBillingFrequencyChecked, setIsBillingFrequencyChecked] =useState(true)
    const [dynamicInvoiceData, setDynamicInvoiceData] = useState<any>(InvoiceData)


    type TypedNewDynamicInvoiceData = {
        invoiceId: number,
        itemType: string,
        description: string,
        qty: number,
        price: string,
        amount: string,
        group: any 
    }

    function addToInvoiceDataArray (itemType: string, description: string, quantity: number | null, price: string, amount: string, group: any): void {
            const invoiceId: number = dynamicInvoiceData.length

            if(itemType === "single") {
                function addInvoiceRow () {
                    const NewDynamicInvoiceData: TypedNewDynamicInvoiceData = dynamicInvoiceData.concat({invoiceId: invoiceId, itemType: itemType, description: description, qty: quantity, price: price, amount: amount})
                    setDynamicInvoiceData(NewDynamicInvoiceData)
                }
                addInvoiceRow()
            }else if(itemType === "group") {
                function addInvoiceRow () {
                    const NewDynamicInvoiceData: TypedNewDynamicInvoiceData = dynamicInvoiceData.concat({invoiceId: invoiceId, itemType: itemType, description: description, amount: amount, group: group})
                    setDynamicInvoiceData(NewDynamicInvoiceData)
                }
                addInvoiceRow()
            }else {
                function addInvoiceRow () {
                    const NewDynamicInvoiceData: TypedNewDynamicInvoiceData = dynamicInvoiceData.concat({invoiceId: invoiceId, description: description, amount: amount})
                    setDynamicInvoiceData(NewDynamicInvoiceData)
                }
                addInvoiceRow()
            }
    } 

    function removeFromInvoiceDataArray(description: string): void {
        const newDynamicInvoiceData = dynamicInvoiceData.filter((invoiceRow: any) => invoiceRow.description !== description)
        setDynamicInvoiceData(newDynamicInvoiceData)
    }
    
    return (
       <GranualControlSection>
            <Row>
                <FlexLayout>
                    <Flex1>
                        <span >Granular control</span>
                        <h1>Effortlessly design and test pricing plans</h1>
                        <p>Iterate on your pricing as quickly as you improve your product with Stripe’s flexible subscription billing components.</p>
                        <CheckBoxDiv>
                            <CheckBox 
                                checked={isOneTimeChecked} 
                                onStateChange={()=> setIsOneTimeChecked(prev=> !prev)}
                                addToInvoiceData={()=> addToInvoiceDataArray("single", "Setup-fee", 1, "600.00", "600.00", null)}
                                removeFromInvoiceDataArray={()=> removeFromInvoiceDataArray("Setup-fee")}
                                labelText="One-time"
                                description="Change for one time purchases"
                            />  
                            <CheckBox 
                                checked={isRecurringBillingChecked} 
                                onStateChange={()=> setIsRecurringBillingChecked(prev=> !prev)}
                                addToInvoiceData={()=> addToInvoiceDataArray("single", "Enterprise (per user)", 28, "50", "1400.00", null)}
                                removeFromInvoiceDataArray={()=> removeFromInvoiceDataArray("Enterprise (per user)")}
                                labelText="Recurring Billing"
                                description="Charge a single price on a recurring basis"
                        
                            /> 
                            <CheckBox 
                                checked={isUsageBasedBillingChecked} 
                                onStateChange={()=> setIsUsageBasedBillingChecked(prev=> !prev)}
                                addToInvoiceData={()=> addToInvoiceDataArray("single", "Additional bandwidth (per GB)", 20, "50.00", "1000.00", null)}
                                removeFromInvoiceDataArray={()=> removeFromInvoiceDataArray("Additional bandwidth (per GB)")}
                                labelText="Usage-based billing"
                                description="Calculate billing based on product usage"
                            />  
                            <CheckBox 
                                checked={isTieredPricingChecked} 
                                onStateChange={()=> setIsTieredPricingChecked(prev=> !prev)}
                                addToInvoiceData={()=> addToInvoiceDataArray("group", "Sotorage(perGB)", null, "", "4525.00",  [
                                    {
                                        description: "First 1,000",
                                        qty: 1000,
                                        price: "1.00",
                                        amount: "1000.00"
                                    },
                                    {
                                        description: "Next 1,001 to 10,000",
                                        qty: 9000,
                                        price: "0.50",
                                        amount: "4500.00"
                                    },
                                    {
                                        description: "10,001 and above",
                                        qty: 100,
                                        price: "0.25",
                                        amount: "25"
                                    },
                                ])}
                                removeFromInvoiceDataArray={()=> removeFromInvoiceDataArray("Sotorage(perGB)")}
                                labelText="Tiered pricing"
                                description="Charge different prices bases on  volume tiers"
                            /> 
                            <CheckBox 
                                checked={isPromotionsAndTrialPeriodChecked} 
                                onStateChange={()=> setIsPromotionsAndTrialPeriodChecked(prev=> !prev)}
                                addToInvoiceData={()=> addToInvoiceDataArray("2323", "Discount (referral)", null, "", "-1000",  null)}
                                removeFromInvoiceDataArray={()=> removeFromInvoiceDataArray("Discount (referral)")}
                                labelText="Promotions and trial periods"
                                description="Adjust billing with discounts and train"
                            />  
                            <CheckBox 
                                checked={isBillingFrequencyChecked} 
                                onStateChange={()=> setIsBillingFrequencyChecked(prev=> !prev)}
                                addToInvoiceData={() => console.log}
                                removeFromInvoiceDataArray={()=> console.log}
                                labelText="Billing Frequency"
                                description="Bill daily, weekly, monthly or annually  in advance on in arrears, and  set custom future start dates"
                            /> 
                        </CheckBoxDiv>
                        <ButtonDiv>
                            <Scrollable>
                                <Button
                                    checked={isOneTimeChecked} 
                                    onStateChange={()=> setIsOneTimeChecked(prev=> !prev)}
                                    addToInvoiceData={()=> addToInvoiceDataArray("single", "Setup-fee", 1, "600.00", "600.00", null)}
                                    removeFromInvoiceDataArray={()=> removeFromInvoiceDataArray("Setup-fee")}
                                    text="One-time"
                                />
                                <Button
                                    checked={isRecurringBillingChecked} 
                                    onStateChange={()=> setIsRecurringBillingChecked(prev=> !prev)}
                                    addToInvoiceData={()=> addToInvoiceDataArray("single", "Enterprise (per user)", 28, "50", "1400.00", null)}
                                    removeFromInvoiceDataArray={()=> removeFromInvoiceDataArray("Enterprise (per user)")}
                                    text="Recurring Billing"
                                />
                                <Button
                                    checked={isUsageBasedBillingChecked} 
                                    onStateChange={()=> setIsUsageBasedBillingChecked(prev=> !prev)}
                                    addToInvoiceData={()=> addToInvoiceDataArray("single", "Additional bandwidth (per GB)", 20, "50.00", "1000.00", null)}
                                    removeFromInvoiceDataArray={()=> removeFromInvoiceDataArray("Additional bandwidth (per GB)")}
                                    text="Usage-based billing"
                                />
                                <Button
                                    checked={isTieredPricingChecked} 
                                    onStateChange={()=> setIsTieredPricingChecked(prev=> !prev)}
                                    addToInvoiceData={()=> addToInvoiceDataArray("group", "Sotorage(perGB)", null, "", "4525.00",  [
                                        {
                                            description: "First 1,000",
                                            qty: 1000,
                                            price: "1.00",
                                            amount: "1000.00"
                                        },
                                        {
                                            description: "Next 1,001 to 10,000",
                                            qty: 9000,
                                            price: "0.50",
                                            amount: "4500.00"
                                        },
                                        {
                                            description: "10,001 and above",
                                            qty: 100,
                                            price: "0.25",
                                            amount: "25"
                                        },
                                    ])}
                                    removeFromInvoiceDataArray={()=> removeFromInvoiceDataArray("Sotorage(perGB)")}
                                    text="Tiered pricing"
                                />
                                <Button
                                    checked={isPromotionsAndTrialPeriodChecked} 
                                    onStateChange={()=> setIsPromotionsAndTrialPeriodChecked(prev=> !prev)}
                                    addToInvoiceData={()=> addToInvoiceDataArray("2323", "Discount (referral)", null, "", "-1000",  null)}
                                    removeFromInvoiceDataArray={()=> removeFromInvoiceDataArray("Discount (referral)")}
                                    text="Promotions and trial periods"
                                />
                                <Button
                                    checked={isBillingFrequencyChecked} 
                                    onStateChange={()=> setIsBillingFrequencyChecked(prev=> !prev)}
                                    addToInvoiceData={()=> {}}
                                    removeFromInvoiceDataArray={()=> {}}
                                    text="Billing Frequency"
                                />
                            </Scrollable>
                        </ButtonDiv>
                    </Flex1>
                    <Flex2>
                        <InvoiceBox dynamicInvoiceData={dynamicInvoiceData} isBillingFrequencyChecked={isBillingFrequencyChecked}/>
                    </Flex2>
                </FlexLayout>
            </Row>
       </GranualControlSection>
    );
  }