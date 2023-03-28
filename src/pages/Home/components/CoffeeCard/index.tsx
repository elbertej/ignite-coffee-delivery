import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatNumber } from "../../../../utils/formatNumber";
import { CoffeeCardContainer, Tags, Name, Description, CardFooter, AddCartWrapper } from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}
export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity ] = useState(1);
  const formattedPrice = formatNumber(coffee.price);
  const { addCoffeeToCart } = useCart();

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
      setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity
    }
    addCoffeeToCart(coffeeToAdd);
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`}/>
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>
        {coffee.description}
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput 
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button>
            <ShoppingCart onClick={handleAddToCart} size={22} weight="fill"/>
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}