//ETAPA 1
//Deberán modificar el HTML para hacer unos pequeños ajustes. Ahora necesitamos que las etiquetas de imágenes estén envueltas en 
//etiquetas de link. Con la condición de que estas deben tener una clase para luego poder seleccionarlas desde nuestro JavaScript. 
//Ejemplo: Así de sencillo, sin ningún atributo porque se lo agregaremos dinámicamente.

//ETAPA 2
// Sin sus correspondientes “href” nuestros links no van a funcionar, por lo que debemos identificar en nuestro script el momento en que agregamos los “src” a nuestras imágenes. Es ahí donde debemos aprovechar y también indicar los “href” de nuestras . Obviamente tenemos que haberlos captado con su selector previamente.
// Concluida la primera parte de esta etapa, deberán hacer que los links abran las imágenes en una pestaña nueva. Para eso deberán recordar qué atributo es el que determina esta acción e implementarlo. Obviamente esto de manera dinámica, desde el archivo js, no debemos hacerlo en el html.
/* ETAPA 3
- Nodo padre: un contenedor de tipo div, aunque no es el padre directo. Este contiene divs que dan estilo a la tarjeta contenedora del link
- Nodo hijo repetitivo: a (dentro de un div)
- Explicación: crear todo el contenido del contenedor o del body inclusive y luego ubicar las fuentes con variables.
se puede inclusive crear una variable para cada uno de los atributos de las etiquetas para crear un DOM dinamico.
*/

/** Aca el HTML */

let divContenedor = document.createElement("div");
divContenedor.setAttribute("class", "contenedor");
document.body.appendChild(divContenedor)

for(let i =1; i<=3; i++){
let enlase = document.createElement("a");
enlase.setAttribute("class", "enlaseImagen");
enlase.setAttribute("rel", "noopener noreferrer")
divContenedor.appendChild(enlase);

let divTarjeta = document.createElement("div");
divTarjeta.setAttribute("class", "tarjeta");
enlase.appendChild(divTarjeta);

  let img = document.createElement("img");
  img.setAttribute("src", "");
  img.setAttribute("alt", "imagen-"+i);
  img.setAttribute("class", "imagen");
  divTarjeta.appendChild(img);
  
}
console.log(divContenedor);


/** Aca el javascript */
let imagen = document.querySelectorAll(".imagen");
let enlaseImagen = document.querySelectorAll(".enlaseImagen");
// URL para copiar y pegar en cada prompt!
// 

// https://www.latercera.com/resizer/v2/KCV3Q7JXTBEMVAJVBDONB6YIFE.png?quality=80&smart=true&auth=4f985fb0c3a8eab1ec9e2aee0778fc8733dfd7344773246f819ad4d6f2cba079&width=790&height=790

// https://i.scdn.co/image/ab67616d0000b273cfeae645958e9248abff0710

for (let i=0; i < imagen.length; i++){
  let valorIngresado = prompt(`Ingrese la direccion de la imagen ${i+1}: `);
  imagen[i].setAttribute('src', valorIngresado)
  if (i == 0){
    enlaseImagen[i].setAttribute('href', 'https://www.google.com/')
  }else if (i == 1){
    enlaseImagen[i].setAttribute('href', 'https://www.google.com/')

  }else if (i == 2){
    enlaseImagen[i].setAttribute('href', 'https://www.google.com/')
  }
  enlaseImagen[i].setAttribute('target', '_blank')  
}



