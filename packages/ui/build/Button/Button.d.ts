import * as React from 'react';
import { ButtonProps } from './Button.type';
declare const Button: ({ type }: ButtonProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export default Button;
