import React, { createContext, useEffect, useState } from "react";
import { InvoiceData } from "../components/granualControl/InvoiceData";

export const AppContext = createContext({} as AppContextData)

export function useAppContext() {
	return React.useContext(AppContext);
}

type TypedNewDynamicInvoiceData = {
	invoiceId: number,
	itemType: string,
	description: string,
	qty: number,
	price: string,
	amount: string,
	group: any 
}

export function AppProvider({ children }: any) {
	const [dynamicInvoiceData, setDynamicInvoiceData] = useState<TypedNewDynamicInvoiceData | any>(InvoiceData)

	const addToInvoiceDataArray = (itemType: string, description: string, quantity: number | null, price: string, amount: string, group: any)=> {
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

	const provided = {
		dynamicInvoiceData,
		addToInvoiceDataArray,
		removeFromInvoiceDataArray
	};

	return (
		<>
			<AppContext.Provider value={provided}>{children}</AppContext.Provider>
		</>
	);

}

type AppContextData = {
	dynamicInvoiceData: any
	addToInvoiceDataArray: any
	removeFromInvoiceDataArray: any
}