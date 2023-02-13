export { };

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    orange: SimplePaletteColorOptions;
    yellow: SimplePaletteColorOptions;
    kakao_yellow: SimplePaletteColorOptions;
    brown: SimplePaletteColorOptions;
    blue: SimplePaletteColorOptions;
    white: SimplePaletteColorOptions;
    gray_0: SimplePaletteColorOptions;
    gray_1: SimplePaletteColorOptions;
    gray_2: SimplePaletteColorOptions;
    gray_3: SimplePaletteColorOptions;
    gray_4: SimplePaletteColorOptions;
    gray_5: SimplePaletteColorOptions;
    gray_6: SimplePaletteColorOptions;
    gray_7: SimplePaletteColorOptions;
    black: SimplePaletteColorOptions;
    navy: SimplePaletteColorOptions;

    [key: string]: Palette['primary'];
  }
  interface PaletteOptions {
    orange: SimplePaletteColorOptions;
    yellow: SimplePaletteColorOptions;
    kakao_yellow: SimplePaletteColorOptions;
    brown: SimplePaletteColorOptions;
    blue: SimplePaletteColorOptions;
    white: SimplePaletteColorOptions;
    gray_0: SimplePaletteColorOptions;
    gray_1: SimplePaletteColorOptions;
    gray_2: SimplePaletteColorOptions;
    gray_3: SimplePaletteColorOptions;
    gray_4: SimplePaletteColorOptions;
    gray_5: SimplePaletteColorOptions;
    gray_6: SimplePaletteColorOptions;
    gray_7: SimplePaletteColorOptions;
    black: SimplePaletteColorOptions;
    navy: SimplePaletteColorOptions;
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    orange: true;
    brown: true;
    yellow: true;
    kakao_yellow: true;
    blue: true;
    white: true;
    gray_0: true;
    gray_1: true;
    gray_2: true;
    gray_3: true;
    gray_4: true;
    gray_5: true;
    gray_6: true;
    gray_7: true;
    black: true;
    navy: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    orange: true;
    brown: true;
    yellow: true;
    kakao_yellow: true;
    blue: true;
    white: true;
    gray_0: true;
    gray_1: true;
    gray_2: true;
    gray_3: true;
    gray_4: true;
    gray_5: true;
    gray_6: true;
    gray_7: true;
    black: true;
    navy: true;
  }
}
declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupPropsColorOverrides {
    orange: true;
    brown: true;
    yellow: true;
    kakao_yellow: true;
    blue: true;
    white: true;
    gray_0: true;
    gray_1: true;
    gray_2: true;
    gray_3: true;
    gray_4: true;
    gray_5: true;
    gray_6: true;
    gray_7: true;
    black: true;
    navy: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    xxxsm: true;
    xxsm: true;
    xsm: true;
    sm: true;
    smd: true;
    md: true;
    lg: true;
    xl: true;
  }
}
