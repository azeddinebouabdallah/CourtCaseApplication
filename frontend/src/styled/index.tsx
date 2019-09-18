import styled from "styled-components";
import {
  TextField,
  Label,
  PrimaryButton,
  DetailsList
} from "office-ui-fabric-react";

export const COLORS = {
  BLACK: "#000000",
  LIGHT_GREY: "#C1C1C1",
  WHITE: "#FFFFFF",
  PURPLE: "#5433FF",
  BLUE: "#205BFF",
  LIGHT_BLUE: "#20BDFF",
  LIGHT_GREEN: "#A5FECB",
  RED: "#ff0000",
  PINK: "#ff416c",
  GREEN: "#9ACB9A",
  PRIMARY: "#e62e2e"
};

export const SHADOWS = {
  FORM: "0 0 16px 0px rgba(0, 0, 0, 0.23)"
};
interface ILayout {
  // Layouting
  displayFlex?: boolean;
  flex?: number;
  justifyStart?: boolean;
  justifyEnd?: boolean;
  justifyBetween?: boolean;
  justifyAround?: boolean;
  justifyCenter?: boolean;
  order?: number | string;
  centerText?: boolean;
  // Align
  alignCenter?: boolean;
  alignStart?: boolean;
  alignEnd?: boolean;
  row?: boolean;
  column?: boolean;
  columnToRow?: number;
  // Spacing
  padding?: number | string;
  margin?: number | string;
  marginBottom?: string;
  marginTop?: string;
  // Overflow
  overflow?: "visible" | "hidden";
  zIndex?: number;
  // Style
  backgroundColor?: string;
  flexWrap?: boolean;
  position?: "absolute" | "relative";
  top?: string;
  left?: string;
  maxWidth?: number | string;
  width?: number | string;
  height?: number | string;
  minHeight?: number | string;
  border?: string;
  borderBottom?: number | string;
  borderTop?: number | string;
  borderRadius?: number | string;
  clickable?: boolean;
  marginLeft?: number |string;
  boxShadow?: string;
  fontWeight?: string;
  fontSize?: string;
  textDecoration?: string;

}

export const Layout = styled.div`
  ${(props: ILayout) =>
    props.backgroundColor ? `background-color: ${props.backgroundColor};` : ""}
  // Layouting
  ${(props: ILayout) => (props.displayFlex ? "display: flex;" : "")}
  ${(props: ILayout) => (props.flexWrap ? "flex-wrap: wrap;" : "")}
  ${(props: ILayout) => (props.clickable ? "cursor: pointer;" : "")}
  ${(props: ILayout) =>
    typeof props.flex === "number" ? `flex: ${props.flex};` : ""}
  ${(props: ILayout) =>
    props.justifyStart ? "justify-content: flex-start;" : ""}
  ${(props: ILayout) => (props.justifyEnd ? "justify-content: flex-end;" : "")}
  ${(props: ILayout) =>
    props.justifyBetween ? "justify-content: space-between;" : ""}
  ${(props: ILayout) =>
    props.justifyAround ? "justify-content: space-around;" : ""}
  ${(props: ILayout) => (props.justifyCenter ? "justify-content: center;" : "")}
  ${(props: ILayout) => (props.row ? "flex-direction: row;" : "")}
  ${(props: ILayout) => (props.column ? "flex-direction: column;" : "")}
  ${(props: ILayout) =>
    typeof props.order === "number" ? `order: ${props.order};` : ""}
  ${(props: ILayout) =>
    typeof props.columnToRow === "number"
      ? `
    flex-direction: column;
    @media all and (min-width: ${props.columnToRow}px){
      flex-direction: row;
    }
  `
      : ""}

  ${(props: ILayout) => (props.centerText ? "text-align: center;" : "")}
  ${(props: ILayout) =>
    typeof props.maxWidth !== "undefined"
      ? `max-width: ${props.maxWidth}px;`
      : ""}
  ${(props: ILayout) =>
    typeof props.height !== "undefined" ? `height: ${props.height};` : ""}
  ${(props: ILayout) =>
    typeof props.minHeight !== "undefined"
      ? `min-height: ${props.minHeight};`
      : ""}
  ${(props: ILayout) =>
    typeof props.width !== "undefined" ? `width: ${props.width};` : ""}

  @media all and (min-width: 1024px){
    ${(props): string => (props.columnToRow ? "flex-direction: row;" : "")}
  }
  // Align
  ${(props: ILayout) => (props.alignCenter ? "align-items: center;" : "")}
  ${(props: ILayout) => (props.alignStart ? "align-items: flex-start;" : "")}
  ${(props: ILayout) => (props.alignEnd ? "align-items: flex-end;" : "")}
  // Spacing
  ${(props: ILayout) =>
    typeof props.padding !== "undefined" ? `padding: ${props.padding};` : ""}
  ${(props: ILayout) =>
    typeof props.margin !== "undefined" ? `margin: ${props.margin};` : ""}
  ${(props: ILayout) =>
    typeof props.marginBottom !== "undefined"
      ? `margin-bottom: ${props.marginBottom};`
      : ""}
  ${(props: ILayout) =>
    typeof props.marginTop !== "undefined"
      ? `margin-top: ${props.marginTop};`
      : ""}
  // Overflows
  ${(props: ILayout) => (props.overflow ? `overflow: ${props.overflow};` : "")}
  // Position
  ${(props: ILayout) => (props.position ? `position: ${props.position};` : "")}
  ${(props: ILayout) => (props.zIndex ? `z-index: ${props.zIndex};` : "")}
  // Style
  ${(props: ILayout) =>
    props.borderBottom ? `border-bottom: ${props.borderBottom};` : ""}
  ${(props: ILayout) => (props.top ? `top: ${props.top};` : "")}
  ${(props: ILayout) => (props.left ? `left: ${props.left};` : "")}
  ${(props: ILayout) =>
    props.borderTop ? `border-top: ${props.borderTop};` : ""}
  ${(props: ILayout) =>
    props.borderRadius ? `border-radius: ${props.borderRadius};` : ""}
  ${(props: ILayout) =>
    props.boxShadow ? `box-shadow: ${props.boxShadow};` : ""}
`;

interface IFabricInput {
  marginBottom?: number;
}
export const FabricInput = styled(TextField)<IFabricInput>`
  && {
    ${props =>
      props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ""}
  }
`;
interface IFabricLabel {
  marginBottom?: number;
  marginTop?: number;
  center?: boolean;
  fontSize?: number;
  fontWeight?: string;
  bold?: boolean;
  color?: string;
  pointer?: boolean;
}

export const FabricLabel = styled(Label)<IFabricLabel>`
  && {
    ${props => (props.center ? `margin: auto` : "")}
    ${props => (props.pointer ? `cursor: pointer;` : "")}
    ${props =>
      props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ""}
      ${props => (props.marginTop ? `margin-top: ${props.marginTop}px;` : "")}
    ${props => (props.color ? `color: ${props.color};` : "")}
    ${props => (props.fontSize ? `font-size: ${props.fontSize}px;` : "")}
    ${props => (props.fontWeight ? `font-weight: ${props.fontWeight};` : "")}
    ${props => (props.bold ? `font-weight: bold;` : "")}
  }
`;

interface IFabricButton {
  color?: string;
  marginBottom?: number;
  marginTop?: number,
  fontSize?: number;
  width?: string;
}
export const FabricButton = styled(PrimaryButton)<IFabricButton>`
  && {
    ${props => (props.color ? `background-color: ${props.color}` : "")}
    ${props =>
      props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ""}
    ${props => (props.fontSize ? `font-size: ${props.fontSize}px;` : "")}
    ${props => (props.width ? `width: ${props.width};` : "")}
    ${props =>
      props.marginTop ? `margin-top: ${props.marginTop}px;` : ""}

  }
  .root-48:hover {
    background-color: rgb();
    color: rgb(255, 255, 255);
}
`;

interface IFabricDetailsList {
  reverse?: boolean;
}
export const FabricDetailsList = styled(DetailsList)<IFabricDetailsList>`
  && {
    ${props =>
      props.reverse
        ? `
    .ms-FocusZone {
      display: flex;
      flex-direction: column;
      height: auto;
      max-width: 100px;
    }
    .ms-DetailsRow-fields {
      display: flex;
      flex-direction: column;
      height: auto;
    }
    [role="grid"] {
      display: flex;
      overflow: hidden;
    }
   
    `
        : ` .ms-Viewport {
          width: max-content;
        }`}
    .ms-DetailsHeader-cellName {
      font-size: 15px;
    }
    .ms-DetailsRow-cell {
      font-size: 15px;
    }
    .ms-DetailsList {
      overflow: hidden;
    }
  }
`;
export const TextFieldNew = styled(TextField)`
   {
    && {
      [name="description"] {
        height: 200px;
      }
      [name="verdict"] {
        height: 200px;
      }
    }
  }
`;
