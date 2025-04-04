const fs = require('fs');
const copiarArchivo = (archivo1, archivo2) =>
{
    fs.readFile(archivo1, 'utf8', (err, data) => {
        if (err) {
            console.log('El archivo no existe o hay un error:', err);
        }
        fs.writeFile(archivo2, data, (err) => {
            if (err) {
                console.log('Error escribiendo en el archivo:', err);
                return;
            }
            console.log('Archivo copiado correctamente.');
    
            fs.readFile(archivo2, 'utf8', (err, nuevoData) => {
                if (err) {
                    console.log('Error leyendo el archivo después de escribir:', err);
                } else {
                    console.log('Contenido final del archivo:\n', nuevoData);
                }
            });
        });
    });
}

module.exports = copiarArchivo;