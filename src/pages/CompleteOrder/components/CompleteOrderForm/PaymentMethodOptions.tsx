import { PaymenteMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionsContainer } from "./styles";

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      <PaymenteMethodInput />
      <PaymenteMethodInput />
      <PaymenteMethodInput />
    </PaymentMethodOptionsContainer>
  )
}