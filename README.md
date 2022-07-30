# test-work-frontend
[TEST JAVASCRIPT]

Realice un script que auto-cargue un objecto, por ejem. MyEngine, con el comportamiento:

En una función "init();":

* Agregue de forma automática al documento un canvas de dimensiones 500px x 500px (configurable).
* El canvas debe ser insertado centro a centro de la pantalla.
* Por defecto el canvas deberá tener un colo de fondo: negro, y además ocultar el puntero del mouse 
al pasar por encima.

Además el objeto debe tener el siguiente ciclo de ejecución:

1. Al cargarse la página entrará en un loop infinito de ejecución (sin bloquear otros elementos de la página).
2. En cada iteracción del ciclo ejecutará un evento definido por el usuario (sólo si este evento 
existe) * Se explica más adelante.
3. En cada iteracción luego de ejecutar el evento definido por el usuario, ejecutará otro evento 
(para el dibujado en el canvas) * Se explica más adelante.
4. Calculará internamente los FPS (frames per second) usando la fórmula:
fps = # frames / (current time - start time)
   Y ese valor debe ser siempre consultable, ejem: MyEngine.getFPS();
   
Además el objecto deberá tener los siguientes métodos/eventos:

//Inicializa el objecto y el canvas
MyEngine.init();

//Detiene el ciclo, crea una "pausa visual"
MyEngine.pause();

//Restaura el ciclo
MyEngine.resume();

//Evento que el usuario puede customizar para ejecutar cualquier cosa dentro del ciclo
MyEngine.onUpdate = () => {}

//Evento que el usuario puede customizar para dibujar cualquier cosa en el canvas, dentro de cada ciclo
MyEngine.onRender = (gfx) => {}  //en donde gfx es entregado por el objeto principal a este evento y 
permite interactuar con funciones básicas del canvas como:

//Borra la pantalla (deja un color de fondo negro por defecto, pero se le puede pasar opcional el color 
en formato hexadecimal)
gfx.clear(color?);

//Dibuja un cuadrado/rectángulo con relleno (de color especificado) en la posición X,Y y con el tamaño especificado
gfx.drawBox (x,y,width,height,color);

//Dibuja un texto
gfx.drawText (text,x,y,color);

//Obtiene el tamaño en ancho del canvas (tamaño dibujable)
gfx.getWidth();

//Obtiene el tamaño en alto del canvas (tamaño dibujable)
gfx.getHeight();


El script una vez terminado deberá permitir que se pueda realizar una animación simple usando sus métodos.

Suma puntos si se realiza de forma extra lo siguiente:

1. Usando el script generar una animación por código.
2. Servir como una app web el index.html y el script con NodeJS.
