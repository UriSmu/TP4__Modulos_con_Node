const url = require('url');

class Url{
    constructor(ur)
    {
        this.host = ur.host,
        this.pathname = ur.pathname,
        this.parametros = ur.search
    }
}


const parsearUrl = (dir) => {
    const ur = url.parse(dir, true);
    
    const obj = new Url(ur);

    return obj;
}

const parsearUrlConError = (dir) => {
    try {
        const ur = new URL(dir);
        const obj = new Url(ur);
        return obj;
    } catch (error) {
        console.error("Error: La URL proporcionada no es válida.", error.message);
        return null;
    }
}


module.exports = {parsearUrl, parsearUrlConError};