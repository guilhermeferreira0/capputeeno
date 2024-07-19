import styled from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: none;
  padding: 10px 16px;
  background: var(--bg-secondary);

  font-family: inherit;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  color: var(--text-dark);

  @media (min-width: ${props => props.theme.deviceBreakpoint.small}) {
    font-size: 12px;
    line-height: 20px;
  }

  @media (min-width: ${props => props.theme.deviceBreakpoint.medium}) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 190px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (min-width: ${props => props.theme.deviceBreakpoint.small}) {
    width: 250px;
  }

  @media (min-width: ${props => props.theme.deviceBreakpoint.medium}) {
    width: 352px;
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string,
  handleChange: (value: string) => void;
}

export function PrimaryInputWSearchIcon(props: InputProps) {
  return (
    <InputContainer>
      <PrimaryInput
        onChange={(event) => props.handleChange(event.target.value)}
        {...props}
      />
      <SearchIcon />
    </InputContainer>
  );
}

