function splitBill(costs, numPeople) {
    const totalBill = costs.reduce((acc, cost) => acc + cost, 0);
    const billPerPerson = totalBill / numPeople;
    
    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

const costs = [150, 250, 100];
const numPeople = 4;
const result = splitBill(costs, numPeople);
console.log(result); 
// Output: { totalBill: 500, billPerPerson: 125 }