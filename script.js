const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price elements
    const priceElements = document.querySelectorAll(".price");
    let total = 0;
    
    // Calculate total price
    priceElements.forEach(priceElement => {
        total += parseFloat(priceElement.textContent) || 0;
    });
    
    // Create a new row
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    newCell.setAttribute("colspan", "2"); // Span across both columns
    newCell.textContent = `Total Price: Rs ${total}`;
    newRow.appendChild(newCell);
    
    // Append the new row to the table
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

