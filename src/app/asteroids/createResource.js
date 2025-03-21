/**
 * Función para crear un 'resource' con una promesa.
 *    - Si la promesa está pendiente, al llamar .read() lanza la promesa => Suspense fallback
 *    - Si falla, lanza el error => Cae en un ErrorBoundary(React) o un error.jsx (Next.js con App Router).
 *    - Si se resuelve, devuelve la data.
 */
export default function createResource(asteroidsFetch) {
    // Definimos el estado inicial como 'pending' (pendiente de resolver)
    let status = 'pending';
  
    // Variables para almacenar los resultados o errores
    let result;
    let error;
  
    // Ejecutamos la función asíncrona y almacenamos la promesa
    const promise = asteroidsFetch().then(
      (res) => {
        // Si la promesa se resuelve correctamente, guardamos el resultado
        status = 'success'; // Cambiamos el estado a 'success'
        result = res; // Guardamos los datos obtenidos
      },
      (err) => {
        // Si la promesa falla, capturamos el error
        status = 'error'; // Cambiamos el estado a 'error'
        error = err; // Guardamos el error
      }
    );
  
    // Retornamos un objeto con la función read(), que permite acceder a los datos
    return {
      read() {
        // Si la promesa aún no ha terminado, lanzamos la promesa para que Suspense la detecte
        if (status === 'pending') {
          throw promise; // ⬅ Suspense atrapará la promesa y mostrará el fallback
        }
  
        // Si hubo un error en la carga de datos, lanzamos el error
        if (status === 'error') {
          throw error; // ⬅ Un ErrorBoundary o Next.js manejarán este error
        }
  
        // Si la promesa ya se resolvió, devolvemos el resultado
        return result; // ⬅ Los datos están listos, se pueden usar en el componente
      },
    };
  }
  