const pi = Math.PI;

const verPerimetro = (diametro) => {
    return pi*diametro;
}

const verArea = (radio) => {
    return radio*radio*pi;
}

const verRadioSegunDiametro = (diametro) => {
    return diametro/2;
}

const verDiametroSegunRadio = (radio) => {
    return radio*2;
}

module.exports = {
    verPerimetro,
    verArea,
    verRadioSegunDiametro,
    verDiametroSegunRadio
};