const Alumno = require('./modules/alumno');

let listaAlumnos = [
    new Alumno("Vito", "48230001"),
    new Alumno("Popi", "48230012")
]

listaAlumnos.forEach(alumno => {
    console.log(`El alumno ${alumno.nombre} tiene el DNI ${alumno.dni}`);
});