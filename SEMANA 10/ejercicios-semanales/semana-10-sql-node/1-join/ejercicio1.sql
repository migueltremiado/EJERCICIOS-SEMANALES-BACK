USE ejercicio_sql;
SELECT * FROM usuarios JOIN direcciones ON usuarios.id = direcciones.id_usuario;

/*EJERCICIO2*/
ALTER TABLE usuarios ADD edad INT; 
UPDATE usuarios SET  edad = 25 WHERE id = 1;
UPDATE usuarios SET  edad = 26 WHERE id = 2;
UPDATE usuarios SET  edad = 27 WHERE id = 3;
UPDATE usuarios SET  edad = 28 WHERE id = 4;
UPDATE usuarios SET  edad = 29 WHERE id = 5;

/*EJERCICIO3*/

SELECT MAX(edad) max_edad FROM usuarios;
SELECT nombre, apellidos, edad FROM usuarios where edad = (SELECT MAX(edad) max_edad FROM usuarios);