import { IPanelStyleProps, IPanelStyles } from 'office-ui-fabric-react';
import { IStyleFunctionOrObject } from 'office-ui-fabric-react/lib/Utilities';
import COLORS from '../styled/colors';

export const sidebarStyles: IStyleFunctionOrObject<
  IPanelStyleProps,
  IPanelStyles
> = {
  root: {
    backgroundColor: COLORS.CYAN_BLUE
  }
};
