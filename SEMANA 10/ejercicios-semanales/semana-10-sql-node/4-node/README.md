# Ejercicio Node

Crea un script de node que salude y pregunte por el estado de ánimo.

Habrá la opción de añadir un nombre como argumento. Si se añade, el script mostrará "Hola *nombre*" por la consola. Si no, solamente "Hola".

A continuación preguntará "¿Qué tal estás?" y permitirá al usuario introducir una respuesta. En base a ella se mostrarán mensajes diferentes.

Contempla mínimo las respuestas "bien" y "mal"; no hay máximo, ¡puedes añadir todas las que se te ocurran! No debe distinguir entre mayúsculas y minúsculas.

Si la respuesta no está contemplada mostrará el mensaje "Lo siento, no te he entendido" y volverá a preguntar hasta que se introduzca una respuesta válida o se salga del programa con ctrl+C. En ningún caso deben saltar errores.

Nota: Se incluye un archivo js y un package.json que ya incluyen los módulos necesarios para poder hacer preguntas al usuario (prompt-sync, permite usar promt en la consola) y leer fácilmente los argumentos (minimist). Recuerda hacer npm install para instalarlos y poder usarlos en el proyecto.