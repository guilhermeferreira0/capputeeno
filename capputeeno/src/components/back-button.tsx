'use client';
import styled from "styled-components";
import { BackwardIcon } from "./icons/backward-icon";
import { useRouter } from "next/navigation";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  transition: scale 300ms ease-in-out;

  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: var(--secondary-text);

  &:hover {
    scale: 1.1;
  }
`;

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  }

  return (
    <Button onClick={handleBack}>
      <BackwardIcon />
      Voltar
    </Button>
  );
}
