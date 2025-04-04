const { countries, currencies } = require('country-data');

const obtenerMoneda = (codigoPais) => {
  const pais = countries[codigoPais];

  if (!pais || !pais.currencies || pais.currencies.length === 0) {
    return "País o moneda no encontrada";
  }
  const codigoMoneda = pais.currencies[0];
  const moneda = currencies[codigoMoneda];

  return moneda ? moneda.name : "Nombre de moneda no disponible";
}

module.exports = obtenerMoneda;