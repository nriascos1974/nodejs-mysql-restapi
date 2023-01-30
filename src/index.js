import {PORT} from './config.js'
import app from './app.js'

/* Lo pongo a escuchar por el puerto 3000 */
app.listen(PORT);
console.log("Escuchando por el puerto ", PORT);
