import styled from 'styled-components';

export const SearchbarWrp = styled.header`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;

  background-color: #6057df89;
  padding: 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
  background-color: #c3c2da88;

  cursor: pointer;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  background-color: transparent;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchFormBtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  background-color: transparent;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  color: #fff;
  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: #fff;
  }
`;
