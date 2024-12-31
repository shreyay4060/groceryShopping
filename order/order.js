// Handle form submission
document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const address = document.getElementById('address').value;
  
    // Validate form
    if (!name || !email || !product || !quantity || !address) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (isNaN(quantity) || quantity < 1) {
      alert('Please enter a valid quantity.');
      return;
    }
  
    // Calculate total price
    const productPrices = {
      Santoor_Soap: 33,
      No1_Soap: 30,
      Nim_Soap: 50,
      Sugar: 40,
      Gold_Tea: 30,
      Milk: 70,
      Wheel_Soap: 10,
      Wheel_Nirma: 60,
      Oziva: 300,
    };
    const price = productPrices[product];
    const totalPrice = price * quantity;
  
    // Display order summary
    const summaryText = `
      <strong>Order Details:</strong><br>
      Name: ${name}<br>
      Email: ${email}<br>
      Product: ${product}<br>
      Quantity: ${quantity}<br>
      Total Price: Rs ${totalPrice}<br>
      Shipping Address: ${address}<br><br><br>
      <b><i style="color: aqua font-size:30px margin-left:100px";>Your product is aarived in 1hr<i></b><br><br><br>
      <b><i> Cash on delivery, Plaese keep change of ${totalPrice} Rs</i></b>
    `;
    document.getElementById('summaryText').innerHTML = summaryText;
  
    // Clear form (optional)
    document.getElementById('orderForm').reset();
  });