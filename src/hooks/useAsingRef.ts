export function assignRef(ref: any, index: number, value: any) {
    if (ref && ref.current) {
        ref.current[index] = value
    }
}