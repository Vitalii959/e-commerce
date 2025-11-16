export type PaymentMethod = "card" | "paypal" | "applePay";
export type PaymentFormValues = {
  paymentMethod: PaymentMethod;
  cardNumber: string;
  cardName: string;
  cardExpiry: string;
  cardCvv: string;
};
