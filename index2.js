const math = require('./modules/matematica');
console.log(`El area de un círculo con radio 3cm es ${math.verArea(3)}cm2`);

console.log(`El perímetro de un círculo con diámetro 6cm es ${math.verPerimetro(6)}cm`);

console.log(`El radio de un círculo con diámetro 6cm es ${math.verRadioSegunDiametro(6)}cm`);

console.log(`El diámetro de un círculo con radio 3cm es ${math.verDiametroSegunRadio(3)}cm`);