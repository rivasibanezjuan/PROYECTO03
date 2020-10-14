Creamos un nuevo proyecto y dentro de esa carpeta:

    npm init --yes 

    npm install typescript -D npx 

    tsc --init 
A continuación se genera el fichero tsconfig.json en el que tendremos que realizar las siguiente modificaciones: '"target": "es6",', '"outDir": "./dist",' y en la linea 68 añadimos: }, "exclude": [ "node_modules" ]

En el .gitignore escribimos dist node_modules

Instalamos el mongoose:

    npm install mongoose

Con esto typescript puede reconocer los tipos de mongoose:

    npm install @types/mongoose

Creamos src y dentro index.ts, donde irán los programas

Para compilar:

    npx tsc -w

y creará el dist Para ejecutar lo que hemos compilado usamos node dist o node dist/index

Creamos la carpeta view y añadimos los archivos 'entradaTeclado' y 'menuPral'

Creamos un fichero llamado README.md, este en concreto donde explicaremos lo que hemos hecho para realizar el proyecto.

Ahora lo subimos a un repositorio:

    git init

Creamos el repositorio en Github con el mismo nombre del proyecto.

Ahora subimos nuestro proyecto a Github:

    git add .

    git commit -m "first commit" 

    git remote add origin https://github.com/... 

    git push -u origin master 

En este proyecto emplearemos las clases. Una clase es un tipo de dato, las clases tienen campos y métodos

Los campos deben ser privados para que solo nos puedamos referir a ellos dentro de la clase Fuera de la clase accedo a ellos a través de los métodos

El método constructor se invoca cuando creamos un objeto o variable del tipo de la clase que se hace con el operador new seguido del método que tiene el mismo nombre de la clase y los parámetros del constructor.

Nuestro objetivo en este proyecto es poder calcular el area y el perimetro de un paralelogramo utilizando las clases de typescript.