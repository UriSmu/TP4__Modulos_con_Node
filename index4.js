const copiarArchivo = require('./modules/archivo');
const archivo = 'archivo_fs.txt'; //El archivo que ya existe
const nuevoArchivo = 'archivo_fs_copia.txt';

copiarArchivo(archivo, nuevoArchivo);