/* eslint-disable @next/next/no-img-element */
'use client';
import { BackButton } from "@/components/back-button";
import { ShopBagIcon } from "@/components/icons/shop-bag-icon";
import { useProduct } from "@/hooks/useProduct";
import { formatPrice } from "@/utils/format-price";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);
  gap: 24px;

  @media (min-width: ${props => props.theme.deviceBreakpoint.large}) {
    padding: 34px 160px;
  }

  section {
    display: flex;
    width: 100%;
    gap: 32px;

    img {
      max-width: 640px;
      width: 50%;
    }

    > div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      button {
        background-color: #115D8C;
        mix-blend-mode: multiply;
        border-radius: 4px;
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px 0;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
    }
  }
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  h2 {
    font-weight: 400;
    line-height: 150%;
    color: var(--text-dark-2);
    margin-top: 12px;
  }

  span:nth-of-type(2) {
    font-size: 20px;
    font-weight: 600;
    color: var(--shapes-dark);
    margin-bottom: 24px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: var(--text-dark-2);
  }

  div {
    margin-top: 24px;
    h3 {
      text-transform: uppercase;
      color: var(--text-dark);
      font-weight: 500;
      font-size: 16px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: var(--text-dark-2);
    }
  }
`;

export default function ProductDetailPage({searchParams}: { searchParams: {id: string} }) {
  const { data } = useProduct(searchParams.id);

  return (
    <Container>
      <BackButton />
      <section>
        <img src={data?.image_url} alt={data?.name} />
        <div>
          <ProductInfo>
            <span>{data?.category}</span>
            <h2>{data?.name}</h2>
            <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
            <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
            <div>
              <h3>Descrição</h3>
              <p>{data?.description}</p>
            </div>
          </ProductInfo>
          <button>
            <ShopBagIcon />
            Adicionar ao carrinho
          </button>
        </div>
      </section>
    </Container>
  );
}
