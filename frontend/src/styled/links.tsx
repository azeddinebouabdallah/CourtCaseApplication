import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../styled/colors';

export const LinkStyle = styled(Link)`
  && {
    color: ${COLORS.PANEL_BLACK};
    text-decoration: none;
  }
`;
