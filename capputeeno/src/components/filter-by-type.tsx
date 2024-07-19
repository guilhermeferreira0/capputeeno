'use client';
import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import styled from "styled-components";

interface FilterItemProps {
  selected: boolean,
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  list-style-position: inside;

  gap: 20px;

  @media (min-width: ${props => props.theme.deviceBreakpoint.small}) {
    gap: 40px;
  }
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${props => props.selected ? '600' : '400'};
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
  cursor: pointer;

  border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};

  @media (min-width: ${props => props.theme.deviceBreakpoint.small}) {
    font-size: 12px;
  }

  @media (min-width: ${props => props.theme.deviceBreakpoint.medium}) {
    font-size: 16px;
  }
`;

export function FilterByType() {
  const {type, setType} = useFilter();

  const handleChangeType = (value: FilterType) => {
    setType(value);
  }

  return (
    <FilterList>
      <FilterItem
        selected={type === FilterType.ALL}
        onClick={() => handleChangeType(FilterType.ALL)}
      >
        Todos os produtos
      </FilterItem>
      <FilterItem
        selected={type === FilterType.SHIRT}
        onClick={() => handleChangeType(FilterType.SHIRT)}
      >
          Camisetas
      </FilterItem>
      <FilterItem
        selected={type === FilterType.MUG}
        onClick={() => handleChangeType(FilterType.MUG)}
      >
        Canecas
      </FilterItem>
    </FilterList>
  );
}
