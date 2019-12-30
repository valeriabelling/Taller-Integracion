export const obtenerStateStorage = () => {
    const herramientasStorage = localStorage.getItem('herramientas');
    if (herramientasStorage === null) {
        return undefined
    }
    return JSON.parse(herramientasStorage);
}

export const guardarStateStorage = state => {
    const herramientasState = JSON.stringify(state);
    localStorage.setItem('herramientas', herramientasState);
}