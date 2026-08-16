// User-defined function to calculate the bill
function generateBill() {

    // Variables and Data Types
    let qty1 = Number(document.getElementById("qty1").value);
    let price1 = Number(document.getElementById("price1").value);

    let qty2 = Number(document.getElementById("qty2").value);
    let price2 = Number(document.getElementById("price2").value);

    let qty3 = Number(document.getElementById("qty3").value);
    let price3 = Number(document.getElementById("price3").value);

    // Calculate individual product amounts
    let amount1 = qty1 * price1;
    let amount2 = qty2 * price2;
    let amount3 = qty3 * price3;

    // Operator: Addition
    let total = amount1 + amount2 + amount3;

    // Literal: 2000 is the discount threshold
    let discount = 0;

    // Selection statement
    if (total > 2000) {
        discount = total * 0.10;   // 10% discount
    }

    // Calculate final amount
    let finalAmount = total - discount;

    // Display result
    document.getElementById("result").innerHTML = `
        <h3>Bill Details</h3>
        Product 1: ₹${amount1.toFixed(2)} <br>
        Product 2: ₹${amount2.toFixed(2)} <br>
        Product 3: ₹${amount3.toFixed(2)} <br>
        <hr>
        <b>Total Bill: ₹${total.toFixed(2)}</b><br>
        Discount: ₹${discount.toFixed(2)}<br>
        <b>Final Payable Amount: ₹${finalAmount.toFixed(2)}</b>
    `;
}