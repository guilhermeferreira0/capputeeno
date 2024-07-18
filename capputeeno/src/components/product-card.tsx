/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/utils/format-price";
import styled from "styled-components";

interface ProductCardProps {
  title: string,
  image: string,
  price: number,
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  width: 256px;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0;

    span {
      padding: 0;
      width: 228px;
      height: 1px;
      margin: 8px 0;
      background: var(--shapes);
    }
  }

  img {
    width: 100%;
    height: 300px;
  }

  h3 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    color: var(--shapes-dark);
  }
`;

export function ProductCard(props: ProductCardProps) {
  const price = formatPrice(props.price);

  return (
    <Card>
      <img src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <span></span>
        <p>{price}</p>
      </div>
    </Card>
  );
}
