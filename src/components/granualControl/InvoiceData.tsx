export const InvoiceData = [
    {
        invoiceId: 0,
        itemType: "single", 
        description: "Setup-fee", 
        qty: 1, 
        price: "600.00", 
        amount: "600.00", 
    },
    {
        invoiceId: 1,
        itemType: "single", 
        description: "Enterprise (per user)",
        qty: 28, 
        price: "50.00", 
        amount: "140.00", 
    },
    {
        invoiceId: 2, 
        itemType: 'single', 
        description: 'Additional bandwidth (per GB)', 
        qty: 20, 
        price: '50.00',
        amount: "1000.00"
    },
    {
        invoiceId: 3, 
        itemType: 'group',
        description: 'Sotorage(perGB)', 
        amount: '4525.00', 
        group: [
            {
                description: 'First 1,000', 
                qty: 1000, 
                price: '1.00', 
                amount: '1000.00'
            },
            {
                description: 'Next 1,001 to 10,000', 
                qty: 9000, 
                price: '0.50', 
                amount: '4500.00'
            }, 
            {
                description: '10,001 and above', 
                qty: 100, 
                price: '0.25', 
                amount: '25'
            }
        ]
    },
    {
        invoiceId: 4, 
        description: 'Discount (referral)', 
        amount: '-1000'
    }
]