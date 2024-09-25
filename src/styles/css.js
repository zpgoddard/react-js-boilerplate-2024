import styled from 'styled-components';

/** 
 * Add these to hex code strings to alter their alpha accordingly. 
 * E.g. ${color.white}${hexAlphaCodes[20]} 
 * */
export const hexAlphaCodes = {
  '0': '00',
  '5': '0C',
  '10': '19',
  '15': '26',
  '20': '33',
  '25': '3F',
  '30': '4C',
  '35': '59',
  '40': '66',
  '45': '72',
  '50': '7F',
  '55': '8C',
  '60': '99',
  '65': 'A5',
  '70': 'B2',
  '75': 'BF',
  '80': 'CC',
  '85': 'D8',
  '90': 'E5',
  '95': 'F2',
  '100': 'FF',
};

/**
 * Re-usable custom scrollbar to be sed across application for consistency.
 */
export const CustomScrollable = styled.div`
  overflow: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.primary};
    border-radius: 10px; 
  } 

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accent};
    border-radius: 10px;
  }
`;

export default { CustomScrollable, hexAlphaCodes };