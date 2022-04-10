# Ejercicio join

Usando la base de datos que creamos en los ejercicios de la semana pasada, selecciona todos los datos de los usuarios, incluida toda la información de su dirección.


# Ejercicio update

Actualiza la tabla de usuarios para añadir una columna para la edad. A continuacion, rellena esa columna para los 5 usuarios que existen.


# Ejercicio subconsulta

Selecciona el nombre y la edad del/los usuario/s más mayores.


# Ejercicio Node

Crea un script de node que salude y pregunte por el estado de ánimo.

Habrá la opción de añadir un nombre como argumento. Si se añade, el script mostrará "Hola *nombre*" por la consola. Si no, solamente "Hola".

A continuación preguntará "¿Qué tal estás?" y permitirá al usuario introducir una respuesta. En base a ella se mostrarán mensajes diferentes.

Contempla mínimo las respuestas "bien" y "mal"; no hay máximo, ¡puedes añadir todas las que se te ocurran! No debe distinguir entre mayúsculas y minúsculas.

Si la respuesta no está contemplada mostrará el mensaje "Lo siento, no te he entendido" y volverá a preguntar hasta que se introduzca una respuesta válida o se salga del programa con ctrl+C. En ningún caso deben saltar errores.

Nota: Se incluye un archivo js y un package.json que ya incluyen los módulos necesarios para poder hacer preguntas al usuario (prompt-sync, permite usar promt en la consola) y leer fácilmente los argumentos (minimist). Recuerda hacer npm install para instalarlos y poder usarlos en el proyecto.


# Ejercicio extra de SQL

Realiza una única consulta que devuleva todos los datos de los usuarios que vivan en el país en el que más usuarios hay (debe ser dinámico y seguir funcionando aunque cambien los datos).

Este ejercicio es bastante complejo y combina varias mecánicas de SQL. Si lo intentas y no te sale, no te desanimes. Recuerda que este es un bootcamp de JavaScript y podemos ayudarnos de él para encadenar varias consultas.
Intenta pensar en cuáles deberías hacer para obtener, combinando la lógica de JS, el resultado deseado.