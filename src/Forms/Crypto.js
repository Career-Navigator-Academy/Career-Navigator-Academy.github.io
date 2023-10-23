// CryptoPaymentWidget.js
import React, { useState } from "react";
import axios from "axios";

const CryptoPaymentWidget = () => {
  const [invoiceId, setInvoiceId] = useState(null);

  const createPayment = async () => {
    try {
      // Replace 'YOUR_API_KEY' with your CoinGate API key
      const apiKey = "YOUR_API_KEY";
      const response = await axios.post(
        "https://api.coingate.com/v2/orders",
        {
          order_id: "unique_order_id",
          price: 100, // Amount in your preferred currency (e.g., USD)
          currency: "USD",
          receive_currency: "BTC", // Crypto currency to receive
          callback_url: "https://your-callback-url.com",
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      if (response.data.id) {
        setInvoiceId(response.data.id);
      }
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  };

  return (
    <div>
      {invoiceId ? (
        <div>
          <p>Payment ID: {invoiceId}</p>
          <p>Send your cryptocurrency to the provided address.</p>
        </div>
      ) : (
        <button onClick={createPayment}>Create Payment</button>
      )}
    </div>
  );
};

export default CryptoPaymentWidget;
