
interface StyledProps {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    href?: string
}


type StandardProps<
    T = React.HtmlHTMLAttributes<HTMLDivElement>,
    Ref = HTMLDivElement,
    O extends string = ''
    > = {
        className?: string
        style?: React.CSSProperties
    } & Omit<T, O> & {
        ref?: React.Ref<Ref>
    }