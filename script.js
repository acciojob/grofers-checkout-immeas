const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price elements
    const priceElements = document.querySelectorAll(".price");
    let total = 0;
    
    // Calculate total price
    priceElements.forEach(priceElement => {
        total += parseFloat(priceElement.textContent) || 0;
    });
    
    // Check if a total row already exists and remove it
    const existingTotalRow = document.getElementById("totalRow");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }
    
    // Create a new row
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    newRow.setAttribute("id", "totalRow");
    const newCell = document.createElement("td");
    newCell.setAttribute("colspan", "2"); // Span across both columns
    newCell.textContent = `Total Price: Rs ${total}`;
    newRow.appendChild(newCell);
    
    // Append the new row to the table
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
