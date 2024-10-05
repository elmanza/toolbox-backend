# Toolbox Prueba Técnica - Backend

Este proyecto contiene la implementación del lado del backend de la prueba técnica para Toolbox. El backend está construido con **Node.js** y Express, utilizando una arquitectura orientada a servicios (SOA) dividida en componentes. El componente principal es el de "Files", el cual gestiona las operaciones de archivos según las especificaciones del reto.

## Requisitos

- Instalar [**Node.js 14**](https://nodejs.org/en/). Es importante usar esta versión para asegurar la compatibilidad del proyecto.
- Descargar el repositorio desde [**GitHub**](https://github.com/elmanza/toolbox-backend).

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/elmanza/toolbox-backend.git
   ```

2. **Navegar a la carpeta del proyecto:**

   ```bash
   cd toolbox-backend
   ```

3. **Instalar dependencias necesarias:**

   ```bash
   npm install
   ```

4. **Inicializar el proyecto:**
* Para ejecutar el servidor de backend y comenzar a trabajar en el entorno de desarrollo, usa el siguiente comando:

   ```bash
    npm start
    ```
* Esto levantará el servidor en el puerto `4000`.


5. **Instalar dependencias necesarias:**
* Si deseas trabajar en modo de desarrollo, puedes utilizar el siguiente comando:<br> 
  
   ```bash
   npm install
   ```


## Uso de la API

El backend proporciona dos endpoints principales para trabajar con archivos:

### Listar todos los títulos de archivos

Obtiene una lista con los nombres de los archivos disponibles.

```http
GET http://localhost:4000/files/list
```

```http
  GET http://localhost:4000/files/list
  Respuesta
    {
        "files": [
            "test1.csv",
            "test2.csv",
            "test3.csv",
            "test18.csv",
            "test4.csv",
            "test5.csv",
            "test6.csv",
            "test9.csv",
            "test15.csv"
        ]
    }
```

- Obtener todos los archivos

```http
  GET http://localhost:4000/files/data
  Respuesta
    [
        {
            "file": "test1.csv",
            "lines": []
        },
        {
            "file": "test2.csv",
            "lines": [
                {
                    "file": "test2.csv",
                    "text": "ByQPNHRFOQTpctTvRqxoWKwUfwaay",
                    "number": "557123060",
                    "hex": "78fbad6e63af35b0deba1132560285da"
                }
            ]
        },
        {
            "file": "test3.csv",
            "lines": [
                {
                    "file": "test3.csv",
                    "text": "HHdwkCnzJEgUPxWikZ",
                    "number": "399073",
                    "hex": "9c53a193d84aeb71ebd6eeedc4ece54e"
                },
                {
                    "file": "test3.csv",
                    "text": "YTbtKBYbDjmlfNCucgKLFCi",
                    "number": "8487",
                    "hex": "501e74cf2d71df58da7cd492eea22e3b"
                }
            ]
        }
        ...
    ]
```

- Obtener un solo archivo

```http
  GET http://localhost:4000/files/data?fileName=test2.csv
  Respuesta
    [
        {
            "file": "test2.csv",
            "lines": [
                {
                    "file": "test2.csv",
                    "text": "xqXbZaOxUgoJeYeopssZOQ",
                    "number": "6584",
                    "hex": "9c1eabfd685037741aedf7d431d6cca2"
                }
            ]
        }
    ]
```
<br>

## Pruebas
<p>Para ejecutar las pruebas del backend y asegurarte de que la lógica de negocio se comporte según las especificaciones, usa el siguiente comando:<p>

```bash
npm run test
```
#### Las pruebas verifican:

1. El tipo de datos recibido por los servicios.
2. La estructura de los arrays devueltos.
3. Comprobaciones específicas para algunos archivos, como asegurarse de que el archivo test3.csv contenga exactamente 3 elementos en su array lines.

> Las pruebas se encuentran en la carpeta services de cada componente y siguen la convención de nombres terminando con spec.js.