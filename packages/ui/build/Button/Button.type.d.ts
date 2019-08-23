declare enum ButtonType {
    primary = 0,
    secondary = 1,
    success = 2,
    danger = 3,
    warning = 4,
    info = 5,
    dark = 6
}
export interface ButtonProps {
    type?: ButtonType;
}
export {};
