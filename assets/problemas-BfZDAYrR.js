const a=`{\r
    "data": {\r
        "Sumar": [\r
            "Tengo 5 perros, 4 gatos y 6 gallinas. ¿Cuántos animales hay en total?",\r
            "En el cole hay 5 balones de baloncesto, 4 de fútbol y 3 de espuma. ¿Cuántas pelotas hay en total?",\r
            "María tiene 5 manzanas, Pedro tiene 8 peras y Ana tiene 3 melocotones. ¿Cuántas piezas de fruta tienen entre los tres?",\r
            "En un aparcameinto hay 22 coches. Han llegado 12 más. ¿Cuántos coches hay en total?",\r
            "Ana ha leído 14 libros y Juan ha leído 10 libros. ¿Cuántos han leído entre en total?",\r
            "Andrés tiene 12 cromos y le han regalado 10 más. ¿Cuántos tiene en total?",\r
            "Un pastor tiene 14 ovejas, 12 corderos y 3 perros. ¿cuántos animales tiene en total?",\r
            "En un autobús van 13 niñas y 8 niños. ¿cuántos estudiantes hay en total?",\r
            "En un bolsa hay 6 pelotas de tenis y en otra 10. ¿Cuántas pelotas de tenis hay en total?",\r
            "En un frutero hay 14 mandarinas y en otro hay 7. ¿cuántas mandarinas ay entre los dos fruteros?",\r
            "En un campo hay dos filas de árboles. En una hay 5 árboles y en la otra 3. ¿cuántos árboles hay en el campo?",\r
            "Concha leyó 23 páginas un día, 36 otro y 15 el tercer día. ¿cuántas páginas ha leído en total?",\r
            " Mi padre compró un ventilador que costaba 135 euros y una lavadora cuyo precio era 428€. ¿Cuánto dinero pagó en total?",\r
            " En un tren viajaban 46 personas. Si subieron 47 personas más, ¿cuántas viajan ahora?",\r
            " Tenía 49 € y mi abuelo me regaló 37 € más, ¿Cuánto dinero tengo ahora?",\r
            "En una estantería de un almacén había una caja con 56 latas de tomate. Si Metí 42 latas más, ¿cuántas latas de tomate hay ahora en la caja?",\r
            "En un bar vendieron un fin de semana, 257 refrescos el sábado y 364 el domingo, ¿cuántos refrescos vendieron en total?",\r
            "En una granja crían gallinas y patos. Si hay 415 gallinas y 328 patos, ¿cuántos animales crían en la granja?",\r
            "Vicente y Alex están coleccionando cromos de Pokemon. Vicente tiene 493 y Alex tiene 123 cromos más que Vicente. ¿Cuántos cromos de Pokemon tiene Alex?",\r
            "Durante este año he ahorrado 495€. Si hubiese reunido 28€ más tendría el mismo dinero que tiene mi hermano ¿Cuánto dinero tiene mi hermano?",\r
            "Unos zapatos cuestan 78 euros, si unas botas costaran 13 euros menos costarían lo mismo que los zapatos, ¿cuánto dinero cuestan las botas?"\r
        ],\r
        "Restar": [\r
            "Andrés tiene en la nevera 15 helados y se ha comido 7. ¿Cuántos le quedan?",\r
            "En la piscina hay 16 niños y se salen 5. ¿Cuántos quedan?",\r
            "Juan tiene 18 magdalenas y le da una a cada uno de sus 6 amigos. ¿Cuántas magdalenas le quedan?",\r
            "Tengo 23 perras. Yo me he comido 5 y mi hermana se ha comido 7. ¿Cuántas peras quedan?",\r
            "Un cartero tiene que entregar 27 cartas. Ya ha entregado 14. ¿Cuántas le faltan por entregar?",\r
            "En un estanque hay 17 patos. Si se van volando 5 patos, ¿cuántos quedan en el estanque?",\r
            "Jose necesita 24 copas y solo tiene 12. ¿cuántas le faltan?",\r
            "Silvia debe subir 30 escalones para llegar a su casa. Si ya ha subido 8, ¿cuántos le faltan?",\r
            "Carlos debe leer un libro que tiene 96 páginas. Ya ha leído 45. ¿Cuántas le quedan?",\r
            "María quiere comprar una colección de vídeos que cuesta 54 Euros. Si tiene 23 €, ¿cuánto le falta?",\r
            "Un jardín tiene 19 árboles y se talan 8. ¿Cuántos quedan?",\r
            "Laura tiene 18 canicas y Antonio 7 canicas. ¿cuántas canicas tiene Laura más que Antonio?",\r
            "En una pecera hay 15 peces y en otra 10. ¿cuántos peces más hay en una pecera que en la otra?",\r
            "Antonio ha resuelto 21 problemas y Catalina ha resuelto 10. ¿Cuántos problemas más ha resuelto Antonio que Catalina?",\r
            "Carmen tiene 57 pegatinas y Enrique 43. ¿Cuántas pegatina más tiene Carmen que Enrique? ",\r
            "En una granja hay 57 ovejas y 43 vacas. ¿cuántas ovejas  más que vacas hay en la granja?",\r
            "Un televisor cuesta 450 euros y una lavadora 397 euros, ¿cuánto cuesta el televisor más que la lavadora?",\r
            "Candela recorrió 697 metros en una carrera y Daniel 586, ¿cuántos metros recorrió Candela más que Daniel?",\r
            "De los 89 cromos de fútbol que tenía repetidos le regalé a mi hermano 47. ¿Con cuántos cromos me quedé?",\r
            "Un televisor cuesta 350 euros y una lavadora cuesta 295 euros. ¿Cuánto cuesta la lavadora menos que el televisor?",\r
            "Una camioneta pesa 835 kg. , si un coche pesara 137 kilogramos más pesaría lo mismo que la camioneta. ¿Cuánto pesa el coche?"\r
        ],\r
        "Multiplicar": [\r
            "Un paquete de gominolas cuesta 75 céntimos, ¿cuánto cuestan 8 paquetes iguales?",\r
            "¿Cuántas bolas hay en 5 cajas de 8 bolas cada una?",\r
            "Cristian tiene 7 años y su primo tiene el triple, ¿qué edad tiene su primo?",\r
            "Mi tío compró una bicicleta a cada uno de mis primos. Si cada bicicleta costó 125 euros y tengo 3 primos, ¿cuánto dinero se gastó mi tío?",\r
            "El padre de mi vecino es pastor de cabras. Su rebaño tiene 96 animales, si cada una come 7 kilos de pienso cada semana, ¿cuántos kilos comerán las 96 cabras en una semana?",\r
            "En un recipiente caben 6 huevos ( media docena ), ¿cuántos huevos cabrán en 123 recipientes iguales?",\r
            "Unos pescadores, en un día de pesca, han llenado 8 cajas de pescado. Si en cada caja caben 97 kilos, ¿cuántos kilos caben en las 8 cajas?  ",\r
            "Tengo ahorrado 240 Euros y mi hermano ha ahorrado el doble, ¿cuánto dinero tiene?",\r
            "Si una moto tiene dos ruedas, ¿cuántas ruedas tendrán 200 motos?",\r
            "En una caja hay 356 clips. ¿Cuántos hay en 2 cajas iguales?",\r
            "Para mi fiesta he comprado 2 bolsas de caramelos. Si cada una tiene 56 caramelos, ¿Cuántos hay en total?",\r
            "Un televisor cuesta 243 Euros. ¿Cuánto cuestan dos televisores iguales?",\r
            "Una gallina pone en un mes 30 huevos. ¿Cuántos pondrá en 9 meses?",\r
            "En el colegio hay 14 clases y cada una tiene 4 ventanas. ¿Cuántas ventanas hay en total?",\r
            "Se construye un edificio de 14 plantas y en cada una hay 6 viviendas. ¿cuántas viviendas hay en total?",\r
            "Si compré 139 paquetes de arroz a 54 céntimos cada uno, ¿cuánto me costaron todos los paquetes?",\r
            "En una finca hay 246 árboles . Si cada uno tiene 23 manzanas, ¿cuántas manzanas hay en total?",\r
            "Un colegio compró 234 libros a 14 Euros cada uno. ¿Cuánto dinero gastó en total?",\r
            "En un recipiente caben 6 huevos, ¿cuántos huevos cabrán en 123 recipientes iguales?",\r
            "Una caja tiene 425 bolas. ¿Cuántas bolas hay en 20 cajas?",\r
            "Antonio ha enviado 80 cartas con 15 tarjetas en el interior de cada una. ¿Cuántas tarjetas ha enviado en total?"\r
          ]\r
    },\r
    "type": "text"\r
}`;export{a as default};
