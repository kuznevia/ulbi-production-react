type Mods = Record<string, boolean>;

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([, value]) => value)
            .map(([cls]) => cls)
    ]
    .join(' ')
}