import styled from "styled-components";
import { ArrowIcon } from "./icons/arrow-icon";
import { useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";
import { ArrowLeftIcon } from "./icons/arrorw-left-icon";
import { ArrowRightIcon } from "./icons/arrow-right-icon";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: inherit;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;
    color: var(--text-dark);

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 10px;
    }
  }

  @media (min-width: ${props => props.theme.deviceBreakpoint.small}) {
    button {
      font-size: 12px;
    }
  }
`;

const PriorityFilter = styled.ul`
  position: absolute;
  width: 150px;
  background: #FFFFFF;
  box-shadow: 0px 4px 12px #0000003e;
  border-radius: 4px;
  padding: 12px 16px;
  z-index: 999;

  list-style-type: none;
  list-style-position: inside;

  top: 30%;
  right: 25%;

  li {
    color: var(--text-dark);
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    cursor: pointer;
  }

  li + li {
    margin-top: 4px;
  }

  @media (min-width: ${props => props.theme.deviceBreakpoint.small}) {
    right: 0;
    width: 250px;

    li {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;

const FilterPerPage = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;

  button {
    width: 15px;
    height: 32px;
    border-radius: 8px 0px 0px 0px;

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #737380;
    background-color: #E9E9F0;

    svg {
      margin: auto;
    }
  }

  @media (min-width: ${(props) => props.theme.deviceBreakpoint.medium}) {
    button {
      width: 32px;
    }
  }
`;

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority, setPage, page } = useFilter();

  const handleOpen = () => setIsOpen(prev => !prev);
  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value);
    setIsOpen(false);
  }

  const handleProductPage = (page: number) => {
    setPage(page);
  }

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Orgarnizar por
        <ArrowIcon />
      </button>
      {isOpen &&
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais Vendidos</li>
        </PriorityFilter>
      }
      <FilterPerPage>
        <button onClick={() => handleProductPage(0)}>1</button>
        <button onClick={() => handleProductPage(1)}>2</button>
        <button onClick={() => handleProductPage(2)}>3</button>
        <button onClick={() => handleProductPage(3)}>4</button>
        <button onClick={() => handleProductPage(4)}>5</button>
        <button onClick={() => handleProductPage(page - 1)}>
          <ArrowLeftIcon />
        </button>
        <button onClick={() => handleProductPage(page + 1)}>
          <ArrowRightIcon />
        </button>
      </FilterPerPage>
    </FilterContainer>
  );
}
