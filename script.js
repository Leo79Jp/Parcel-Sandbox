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
// https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg

// https://i.pinimg.com/736x/ed/a5/53/eda5531538101e2e5e3babbd75f811eb.jpg

// https://i.pinimg.com/474x/6f/a8/15/6fa815b16e921cd93a59fdd2d9816989.jpg

for (let i=0; i < imagen.length; i++){
  let valorIngresado = prompt(`Ingrese la direccion de la imagen ${i+1}: `);
  // carga las imagenes por defecto
  if (i==0 && valorIngresado === ""){
    valorIngresado = 'https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg'
  }
  if (i==1 && valorIngresado === ""){
    valorIngresado = 'https://i.pinimg.com/736x/ed/a5/53/eda5531538101e2e5e3babbd75f811eb.jpg'
  }
  if (i==2 && valorIngresado === ""){
    valorIngresado = 'https://i.pinimg.com/474x/6f/a8/15/6fa815b16e921cd93a59fdd2d9816989.jpg'
  }

  imagen[i].setAttribute('src', valorIngresado)
  // carga la direccion de los enlases
  if (i == 0){
    enlaseImagen[i].setAttribute('href', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F899101513088882697%2F&psig=AOvVaw3GeEu98cVfiAP4pB49A8bH&ust=1725476892643000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPj-_b28p4gDFQAAAAAdAAAAABAE')
  }else if (i == 1){
    enlaseImagen[i].setAttribute('href', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F222928250282939928%2F&psig=AOvVaw2tVxnLx4DwkoQ563FFJyrn&ust=1725477032457000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjJq5u9p4gDFQAAAAAdAAAAABAP')

  }else if (i == 2){
    enlaseImagen[i].setAttribute('href', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F564498134536053564%2F&psig=AOvVaw2tVxnLx4DwkoQ563FFJyrn&ust=1725477032457000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjJq5u9p4gDFQAAAAAdAAAAABAJ')
  }
  enlaseImagen[i].setAttribute('target', '_blank')  
}



