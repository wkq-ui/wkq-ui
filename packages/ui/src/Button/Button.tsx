
import * as React from 'react'
import { ButtonProps } from './Button.type'
const Button = ({ type }: ButtonProps): React.ReactElement => {
    return (
        <button className={`btn-${type}`} >
            {type}
        </button>
    )
}
export default Button