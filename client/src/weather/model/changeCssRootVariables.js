const components = [
    'body-background',
    'components-background',
    'card-background',
    'card-shadow',
    'text-color'
];

export function changeCssRootVariables(theme) {
    const root = document.querySelector(':root');
    components.forEach(component => {
        root.style.setProperty(
            `--${component}-default`,
            `var(--${component}-${theme})`
        );
    });
}
