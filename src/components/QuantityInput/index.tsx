import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QantityInputContainer } from "./styles";

export function QuantityInput() {
  return (
    <QantityInputContainer>
      <IconWrapper>
        <Minus size={14} weight="fill"/>
      </IconWrapper>
      <input type="number" readOnly value={1}/>
      <IconWrapper>
        <Plus size={14} weight="fill"/>
      </IconWrapper>
    </QantityInputContainer>
  )
}