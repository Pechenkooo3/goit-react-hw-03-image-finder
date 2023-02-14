import styled from 'styled-components';
export const ImageGalleryItemWrp = styled.li`
  flex-basis: calc((100% - 3 * 20px) / 4);
  border-radius: 4px;
  
`;

export const ImageGalleryItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  background-color: #f5f5fc87;

  transition: 250ms transform ease-in-out, 300ms box-shadow ease-out,
    150ms color ease-in;
  &:hover,
  &:focus {
    transform: scale(1.04);
    cursor: zoom-in;
  }
`;
