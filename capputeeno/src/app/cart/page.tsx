'use client';
import { BackButton } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-item";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/products-response";
import { formatPrice } from "@/utils/format-price";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${props => props.theme.deviceBreakpoint.large}) {
    padding: 34px 160px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: ${({theme}) => theme.deviceBreakpoint.medium}){
    grid-template-columns: 1fr minmax(100px, 240px);
  }
`;

const CartListContainer = styled.div`
  margin-top: 24px;

  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 300;
    line-height: 150%;
    font-size: 16px;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`;

const CartList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;


  list-style-type: none;
  list-style-position: inside;
`;

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  height: 100%;
  padding: 12px 16px;

  ul {
    list-style-type: none;
    list-style-position: inside;
    text-transform: uppercase;
    text-decoration: underline;
    color: var(--text-dark);

    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const TotalItem = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  span {
    display: block;
    width: 100%;
    height: 1px;
    background: var(--shapes);
  }

  strong {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  button {
    border: none;
    width: 100%;
    border-radius: 4px 0px 0px 0px;
    background-color: #51B853;
    color: white;
    padding: 10px 24px;
    margin: 20px 0;
    cursor: pointer;

    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    transition: all .3s ease;

    &:hover {
      transform: translate(-5px, -5px);
    }
  }
`;

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage('cart-items', []);

  const calculateTotal = (value: ProductInCart[]) => {
    const total = value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0);
    return total;
  }
  const cartTotal = calculateTotal(value);
  const frete = 4000;


  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item: ProductInCart) => {
      if (item.id !== id) return item;
      return {...item, quantity: quantity}
    })

    updateLocalStorage(newValue);
  }

  const handleDeleteItem = (id: string) => {
    const newList = value.filter((item: ProductInCart) => {
      if (item.id !== id) return item;
    })

    updateLocalStorage(newList);
  }

  return (
    <PageWrapper>
      <Container>
        <div>
          <BackButton />
          <CartListContainer>
            <h3>Seu Carrinho</h3>
            <p>
              Total {value.length} Produtos
              <span>{formatPrice(cartTotal)}</span>
            </p>

            <CartList>
              {value && value.map((item: ProductInCart) =>
              <CartItem
                product={item}
                key={item.id}
                handleDelete={handleDeleteItem}
                handleUpdateQuantity={handleUpdateQuantity}
              />)}
            </CartList>
          </CartListContainer>
        </div>
        <CartResultContainer>
          <TotalItem>
            <h3>Resumo do pedido</h3>
            <div>
                <p>Subtotal de Produtos</p>
                <p>{formatPrice(cartTotal) ?? ''}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>{formatPrice(frete) ?? ''}</p>
            </div>
            <span></span>
            <strong>
              Total
              <p>
                {formatPrice(frete+cartTotal)}
              </p>
            </strong>
            <button>Finalizar a compra</button>
          </TotalItem>
          <div>
            <ul>
              <li>Ajuda</li>
              <li>Reembolsos</li>
              <li>Entrega e frete</li>
              <li>Trocas e devoluções</li>
            </ul>
          </div>
        </CartResultContainer>
      </Container>
    </PageWrapper>
  );
}
