import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.grayDark};
  font-size: ${({ theme }) => theme.medium};
  display: block;
  &::placeholder {
    color: ${({ theme }) => theme.grey3};
  }
`;

const Prefix = styled.div`
  margin-right: 16px;
`;

const Suffix = styled.div`
  margin-left: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.gray2};
  border-radius: 24px;
  padding: 0 30px;
`;

export { Prefix, Suffix, InputContainer };

export default StyledInput;
