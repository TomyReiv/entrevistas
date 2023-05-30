function limitTime(fn, t) {
    return async function (...args) {
      const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject("Time Limit Exceeded");
        }, t);
      });
  
      const resultPromise = fn(...args);
  
      try {
        await Promise.race([timeoutPromise, resultPromise]);
        return resultPromise;
      } catch (error) {
        throw error;
      }
    };
  }
  
  /* 
  
  La función limitTime acepta dos argumentos: fn, que es la función asíncrona original, y t, que es el tiempo límite en milisegundos.

Dentro de la función de envoltura, se crea una promesa timeoutPromise que se rechaza después de t milisegundos con el mensaje "Time Limit Exceeded". Esta promesa actuará como el límite de tiempo.

También se crea una promesa resultPromise llamando a la función fn con los argumentos proporcionados.

Luego, se utiliza Promise.race para esperar la primera promesa que se resuelva, ya sea timeoutPromise o resultPromise. Si timeoutPromise se resuelve primero, significa que la función tardó más de t milisegundos en completarse, por lo que se rechaza con el mensaje "Time Limit Exceeded". Si resultPromise se resuelve primero, significa que la función se completó dentro del límite de tiempo y se devuelve el resultado.

Se utiliza un bloque try/catch para capturar cualquier error que se produzca durante la ejecución de la función y se lanza el error sin modificar.

  */