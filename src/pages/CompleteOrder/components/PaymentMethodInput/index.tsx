import { CreditCard } from "phosphor-react";
import { PaymentMethodContainer } from "./styles";

export function PaymenteMethodInput() {
  return (
    <PaymentMethodContainer>
      <CreditCard size={16}/>
      Cartão de crédito
    </PaymentMethodContainer>
  )
}