import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  padding: 0px 5px;
  border-radius: 100%;
  font-size: 10px;
  background: var(--delete-color);
  color: white;

  margin-left: -10px;
`;

const Container = styled.div`
  position: relative;

`;

export function CartControl() {
  const { value } = useLocalStorage('cart-items', []);

  return (
    <Container>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
