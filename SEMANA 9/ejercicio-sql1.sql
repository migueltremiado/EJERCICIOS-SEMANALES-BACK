CREATE DATABASE ejercicio_sql;
USE ejercicio_sql;
/*EJERCICIO1*/
 CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY,
    dni CHAR(9) UNIQUE NOT NULL,
    telefono INT UNSIGNED,
    email VARCHAR(100) UNIQUE NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    pais VARCHAR(30),
    codigo_postal VARCHAR(5) NOT NULL,
    direccion VARCHAR (100) NOT NULL,
    direccion2 VARCHAR(100)
    
    
);

/*EJERCIO2*/
CREATE TABLE direcciones (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT UNSIGNED NOT NULL,
    pais VARCHAR(30),
    codigo_postal VARCHAR(5) NOT NULL,
    direccion VARCHAR (100) NOT NULL,
    direccion2 VARCHAR(100),
    FOREIGN KEY (id_usuario) REFERENCES usuarios (id)
    
);
ALTER TABLE usuarios DROP COLUMN pais, DROP COLUMN codigo_postal, DROP COLUMN direccion, DROP COLUMN direccion2;

/*EJERCICIO3*/

INSERT INTO usuarios VALUES (1,"279948941",993870144,"ilethem0@google.com.au","Irvin","Lethem");
INSERT INTO direcciones VALUES (1,1,"Indonesia","83297","98339 Loftsgordon Road","Babakanbandung");
INSERT INTO usuarios VALUES (2,"497494899",748551874,"kmungan1@howstuffworks.com","Kylie","Mungan");
INSERT INTO direcciones VALUES (2,2,"Philippines","44455","74641 Dwight Avenue","Bilar");
INSERT INTO usuarios VALUES (3,"776631050",215649413,"ydibbert2@businesswire.com","Dibbert","Yul");
INSERT INTO direcciones VALUES (3,3,"Indonesia","62965","9510 Milwaukee Street","Sumberejo");
INSERT INTO usuarios VALUES (4,"921948685",617064473,"tmcgorley3@studiopress.com","Tamra","Mc Gorley");
INSERT INTO direcciones VALUES (4,4,"Norway","54756","8902 Doe Crossing Alley","Steinkjer");
INSERT INTO usuarios VALUES (5,"178988896","304168000","eimbrey4@cpanel.net","Elmira","Imbrey");
INSERT INTO direcciones VALUES (5,5,"United States","51471","8616 Stephen Hill","Charleston");

/*EJERCCIO4*/
SELECT nombre, apellidos, telefono FROM usuarios ORDER BY apellidos;

SELECT pais, COUNT(pais) FROM direcciones GROUP BY pais;
