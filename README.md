# Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

## 1. Preámbulo



## 2. Resumen del proyecto



## 3. Objetivos de aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application) responsiva
 (con más de una vista / página) en la que se pueda leer y escribir datos.

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)
* [ ] [History API.](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
* [ ] [localStorage.](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [x] Manipular objects (key | value)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.
* [x] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [x] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [ ] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [ ] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y Github

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
* [ ] Organización en Github (projects | issues | labels | milestones)

### Firebase

* [x] [Firestore.](https://firebase.google.com/docs/firestore)
* [x] [Firebase Auth.](https://firebase.google.com/docs/auth/web/start)
* [ ] [Firebase security rules.](https://firebase.google.com/docs/rules)
* [ ] Observadores. ([onAuthStateChanged](https://firebase.google.com/docs/auth/web/manage-users?hl=es#get_the_currently_signed-in_user)
 | [onSnapshot](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection))

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales

* La lógica del proyecto debe estar implementada completamente en JavaScript
  (ES6+), HTML y CSS, sin utilizar _frameworks_ o librerías de CSS y JS.

## 5. Definición del producto

En el `README.md` cuéntanos brevemente cómo descubriste las necesidades de los
usuarios y cómo llegaste a la definición final de tu producto. Es importante
que detalles:

* Quiénes son los principales usuarios de producto.
* Qué problema resuelve el producto / para qué le servirá a estos usuarios.

### 5.2 Historias de usuario
Historia I:
  -Usuario: Yo como usuario no registardo, quiero poder registarme de manera sencilla para poder compartir  contenido en nombre de mi perro mascota. 

  -Criterios de aceptación:
    *Se registrará con todos los datos básicos: Ususario (nombre la mascota), Nombre Humano, correo, contraseña, raza, nacimiento y ubicación.
    *Cada campo del input debe ser validado al momento para garantizar su correcta escritura.
    *Luego se terminado el formulario debe confirmarse el envío.
    *Terminado el paso anterior el usuario será redirigido a la vista Login  de la SPA.
    *La vista debe estar adaptada para poder verlo también en dispositivos móbiles.

Historia II: 
  -Usuario: Yo como usuario registrado, quiero loguearme de manera fácil y rápida.

  -Criterios de aceptación:
    *Poder ingresar con correo y contraseña.
    *La contraseña no debe ser visible al momento de escribirla (solo puntos de referencia).
    *Al ingresar erróneamente mostrara información bajo input (dato erróneo o faltan datos).
    *La vista debe estar adaptada para poder verlo también en dispositivos móbiles.

Historia III :
  -Usuario: Yo como usuario registrado quiero poder ver publicaciones realizadas en la red socual. 
  
  -Criterios de aceptación:
    *Visualización de cada uno de los post realizados por el usuario logeado y no logueados en el centro de la pantalla.
    *No se debe perder la vista a la barra de navegación.
    *Debe tener elementos de interacción (like, comentario)
    *Se debe reconocer el autor del post, la fecha de realización del post, el mensaje y la imágen (si exíste, es opcional).
    *Toda la vista del muro debe estár adaptada para ser vista también en teléfonos móbiles, siendo prioridad la vista a las publicación.

Historia IV :
  -Usuario: Yo como usuario registrado quiero poder realizar publicaciones con texto e imágen en nombre de mi mascotas.
  
  -Criterios de aceptación:
  *Debe haber un espacio claro y definido donde el usuario logueado pueda escribir el mensaje que quiera publicar.
  *El usuario deberá tener opción a cargar una imágen si así lo desea.
  *Al momento de cargar la imágen, esta deberá tener un espacio de pre-visualización del documento antes de ser enviado.
  *Luego de enviado el post, con o sin imágen, deberá ser visualizada junto con el resto de las publicación.
  *Se debe considerar el espacio para la creación del post cuando sea adaptado para ver en teléfonos móbiles.

Historia V :
  -Ususario: Yo como usuario registrado quiero poder ver el resumen de mi perfil para llevar el control de mis interacciones

  -Criterios de aceptación:
  *El resumen debe estar disponible en la vista principal del muro.
  *Se debe tener acceso al resumen de perfíl desde la barra de navegación cuando sea observado desde un teléfono móbil.
  *Debe contener datos principales del usuario (Usuario, Sub-name, ubicación, cantidad de likes sumados, cantidad de usuarios seguidos y que le siguen).
  *Debe ofrecer al usuario un botón para redireccionar a la vista completa del perfíl.

### 5.3 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)



### 5.4 Responsive


### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión


#### Muro/timeline