export enum BrandColor {
  Blue = "#286767",
  Green = "#2E614F",
  Orange = "#FA9989",
  Pink = "#E7DAE1",
  Snow = "#F6F1F4",
}

// We used class rather than enums since enums don't support computed values
export class Color {
  public static readonly Black = "black";
  public static readonly White = "white";

  public static readonly GrayXLight = "#F8F8F8";
  public static readonly GrayLight = "#EBEBEB";
  public static readonly Gray = "#BDBDBD";
  public static readonly GrayDark = "#757575";
  public static readonly GrayXDark = "#525252";

  public static readonly Primary = BrandColor.Blue;
  public static readonly Secondary = BrandColor.Green;
  public static readonly Accessory = BrandColor.Orange;
  public static readonly Accessory2 = BrandColor.Pink;
  public static readonly Accessory3 = BrandColor.Snow;
  public static readonly Neutral = Color.GrayDark;
  public static readonly CallToAction = BrandColor.Orange;

  public static readonly Alert = "#DC2729";
  public static readonly Warning = "#F5A623";
  public static readonly Success = "#1ABC9C";
}

export enum FontFamily {
  Primary = "Raleway",
}

export enum FontWeight {
  Medium = 500,
  Bold = "bold",
  Normal = "normal",
  Lighter = 300,
}

export enum FontSize {
  XXSmall = "12px",
  XSmall = "14px",
  Small = "16px",
  Medium = "24px",
  Large = "32px",
  XLarge = "48px",
  XXLarge = "62px",
}

export enum Spacing {
  XSmall = "4px",
  Small = "16px",
  Medium = "24px",
  Large = "32px",
  XLarge = "48px",
  XXLarge = "96px",
}

export const HeaderHeight = {
  Mobile: "64px",
  Desk: "80px",
};

export enum IconSize {
  Small = "12px",
  Medium = "16px",
  Large = "20px",
}

export enum FaIconSize {
  XSmall = "xs",
  Large = "lg",
  Small = "sm",
  X1 = "1x",
  X2 = "2x",
  X3 = "3x",
  X4 = "4x",
  X5 = "5x",
  X6 = "6x",
  X7 = "7x",
  X8 = "8x",
  X9 = "9x",
  X10 = "10x",
}

export const DrawerWidth = "256px";

export const Navbar = {
  a: "1",
};

export const FieldHeight = "48px";
export const TransitionDuration = ".3s";

export const Border = {
  Color: Color.GrayLight,
  Width: "1px",
  Radius: "4px",
  RadiusLarge: "200px",
};

// Security recommendation: Failing to enforce passwords of at least 7 characters, a complexity
// of at least alpha and numeric characters increases the risk of a brute force attack.
export enum PasswordLength {
  Max = 18,
  Min = 7,
}

export enum AspectRatio {
  Square = 1,
}

export const Breakpoint = {
  xs: 0, // px
  sm: 576, // px
  md: 768, // px
  lg: 992, // px
  xl: 1200,
  xxl: 1600,
};

export enum ZIndex {
  ground = 0,
  first = 1,
  second = 2,
  third = 3,
  top = 4,
}

export const Shadow = {
  Small: "0px 2px 2px 0px rgba(0,0,0,0.2)",
};
