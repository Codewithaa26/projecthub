// Open demo preview page
function openDemo(page) {
  window.open(page, "_blank");
}

// Razorpay payment function
function payNow(codeId) {
  var options = {
    key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key
    amount: 4900, // ₹49 in paise
    currency: "INR",
    name: "Project Hub",
    description: "Unlock Project Code",

    handler: function (response) {
      alert("Payment Successful 🎉 Code Unlocked!");

      // Show download section after payment
      document.getElementById(codeId).classList.remove("hidden");
    },

    theme: {
      color: "#ff4f8b",
    },
  };

  var rzp = new Razorpay(options);
  rzp.open();
}
