![javascript](https://img.icons8.com/color/48/000000/javascript.png) ![HTML](https://img.icons8.com/color/48/000000/html-5--v1.png) ![CSS](https://img.icons8.com/color/48/000000/css3.png) ![Jest](https://live.staticflickr.com/65535/51227349411_3796436610_s.jpg) ![Firebase](https://img.icons8.com/color/48/000000/firebase.png)
# Creando una Red Social - Dogbook

## Índice

* [1. Objetivos de aprendizaje](#1-objetivos-de-aprendizaje)
* [2. Consideraciones generales](#2-consideraciones-generales)
* [3. Definición del producto](#3-definición-del-producto)
* [4. Historias de usuario](#4-historias-de-usuario)
* [5. Diseño de la Interfaz de Usuario](#5-diseño-de-la-interfaz-de-usuario)


## 1. Objetivos de aprendizaje

Construir una Single Page Application (SPA) responsiva, que contenga más de una vista en la que se pueda leer y escribir datos.

### HTML y CSS

* [x] Uso de HTML semántico.
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] Uso de flexbox en CSS.

### DOM y Web APIs

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [x] Manipulación dinámica del DOM.
* [ ] History API.
* [x] localStorage.

### JavaScript

* [x] Uso de condicionales.
* [x] Uso de funciones.
* [ ] Manipular arrays.
* [x] Manipular objects.
* [x] Uso ES modules.
* [x] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [x] Uso de callbacks.
* [x] Consumo de Promesas.

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos.
* [x] Uso de identificadores descriptivos.

### Git y Github

* [x] Uso de comandos de git.

### Firebase

* [x] [Firestore.](https://firebase.google.com/docs/firestore)
* [x] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [x] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
 | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 2. Consideraciones generales

* La lógica del proyecto está implementada completamente en JavaScript
  (ES6+), HTML y CSS, sin utilizar _frameworks_ o librerías de CSS y JS.

## 3. Definición del producto

Dogbook, es una red social pensada para los amantes de los perros, como un espacio de interacción con otros dueños de mascotas con quienes compartir fotos y mensajes en nombre de sus mejores amigos caninos.

Los principales usuarios de producto en su mayoría son muejeres con edades entre los 19 y 32 años, seguido de hombres entre los 18 y 27 años, solteros o en parejas pero sin hijos, dueños de perros, ubicado en ciudades donde disponen de parques especiales para pasear o entrenar a su mascotas.

Los perros son animales sociables y afectivos que crean con facilidad vínculos emocionales su dueño, quienes llegan a considerar estas mascotas como más que animales de compañia, un miembro de su familia. Es por esto que los dueños de perros suelen compartir cada detalle de la vida de sus mascotas en  redes sociales ya sea desde sus cuentas personales o creando cuentas exclusivas para el animal.

Dogbook les proveerá a estas personas un espacio único donde esté tipo de publicaciones lleguen a otros contactos con los mismos gustos y aficiones por los caninos, con quienes además podrían compartir consejos de cuidado, moda, alimentación e incluso conseguir el contacto con la pareja adecuada para sus perros.

## 4. Historias de usuario
Historia 1:

  Usuario: Yo como usuario no registardo, quiero poder registarme de manera sencilla para poder compartir  contenido en nombre de mi perro mascota. 

  Criterios de aceptación:
    -Se registrará con todos los datos básicos: Ususario (nombre la mascota), Nombre Humano, correo, contraseña, raza, nacimiento y ubicación.
    -Cada campo del input debe ser validado al momento, para garantizar su correcta escritura.
    -Luego se terminado el formulario debe confirmarse el envíoa la base de datos.
    -Seguido el usuario será redirigido a la vista Login  de la SPA.
    -La vista REGISTRO debe estar adaptada para poder verlo también en dispositivos móbiles.


Historia 2: 

  Usuario: Yo como usuario registrado, quiero loguearme de manera fácil y rápida.

  Criterios de aceptación:
    -Poder ingresar con correo y contraseña.
    -La contraseña no debe ser visible al momento de escribirla (solo puntos de referencia).
    -Al ingresar erróneamente mostrara información bajo input (dato erróneo o faltan datos).
    -La vista INICIO debe estar adaptada para poder verlo también en dispositivos móbiles.


Historia 3:

  Usuario: Yo como usuario registrado quiero poder ver publicaciones realizadas en la red social. 
  
  Criterios de aceptación:
    -Visualización de cada uno de los post realizados por el usuario logeado y no logueados en el centro de la pantalla.
    -No se debe perder la vista a la barra de navegación.
    -Debe tener elementos de interacción (like, comentario)
    -Se debe reconocer el autor del post, la fecha de realización del post, el mensaje y la imágen (si exíste, es opcional).
    -Toda la vista del MURO debe estár adaptada para ser vista también en teléfonos móbiles, siendo prioridad la columna donde se muestran las publicación.


Historia 4:

  Usuario: Yo como usuario registrado quiero poder realizar publicaciones con texto e imágen en nombre de mi perro.
  
  Criterios de aceptación:
    -Debe haber un espacio claro y definido donde el usuario logueado pueda escribir el mensaje que quiera publicar.
    -El usuario deberá tener opción a cargar una imágen si así lo desea.
    -Al momento de cargar la imágen, esta deberá tener un espacio de pre-visualización del documento antes de ser enviado.
    -Luego de enviado el post, con o sin imágen, deberá ser visualizada junto con el resto de las publicación.
    -Se debe considerar el espacio para la creación del post cuando sea adaptado para ver en teléfonos móbiles.


Historia 5:

  Ususario: Yo como usuario registrado quiero poder ver el resumen de mi perfil para llevar el control de mis interacciones

  Criterios de aceptación:
    -El resumen debe estar disponible en la vista principal del muro.
    -Se debe tener acceso al resumen de perfíl desde la barra de navegación cuando sea observado desde un teléfono móbil.
    -Debe contener datos principales del usuario (Usuario, Sub-name, ubicación, cantidad de likes sumados, cantidad de usuarios seguidos y que le siguen).
    -Debe ofrecer al usuario un botón para redireccionar a la vista completa del perfíl.

## 5. Diseño de la Interfaz de Usuario

### 5.1 Prototipo de baja fidelidad
![]()

### 5.2 Inicio
![](https://live.staticflickr.com/65535/51103831408_8566cc5570.jpg)

### 5.3 Registro
![](https://live.staticflickr.com/65535/51104698970_af4288b1ee.jpg)

### 5.4 Muro
![](https://live.staticflickr.com/65535/51103692287_5038beffa2.jpg)

### 5.5 Responsive
![](https://live.staticflickr.com/65535/51103669299_c0b3746166.jpg)
![](https://live.staticflickr.com/65535/51103831338_7039a5442e.jpg)
![](https://live.staticflickr.com/65535/51103831363_8e6986f3e6.jpg)


## 5. Creación de cuenta de usuario e inicio de sesión
Ususario de prueba: dinosiete@gmail.com

