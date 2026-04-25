# Práctica DevOps - Hola Mundo con Docker

## Descripción

Aplicación web sencilla de “Hola Mundo” creada con Node.js para practicar el ciclo básico de DevOps.

La práctica incluye:

- Creación de una aplicación web
- Creación de un Dockerfile
- Construcción de una imagen Docker
- Ejecución del contenedor localmente
- Subida de la imagen a Docker Hub
- Publicación de la página en GitHub Pages

## Tecnologías utilizadas

- Node.js
- Docker
- Docker Hub
- GitHub
- GitHub Pages

## Estructura del proyecto

```bash
devops-hola-mundo-docker/
│
├── app.js
├── index.html
├── package.json
├── Dockerfile
├── .dockerignore
└── README.md
```

## Crear imagen Docker

```bash
docker build -t devops-hola-mundo .
```

## Ejecutar contenedor

```bash
docker run -p 3000:3000 devops-hola-mundo
```

Abrir en el navegador:

```bash
http://localhost:3000
```

## Subir imagen a Docker Hub

```bash
docker tag devops-hola-mundo yeliana267/devops-hola-mundo:latest
docker push yeliana267/devops-hola-mundo:latest
```

## Enlaces del proyecto

Repositorio de GitHub:

```text
https://github.com/yeliana267/devops-hola-mundo-docker
```

Imagen en Docker Hub:

```text
https://hub.docker.com/r/yeliana267/devops-hola-mundo
```

Página publicada en GitHub Pages:

```text
https://yeliana267.github.io/devops-hola-mundo-docker/
```

## Resultado

Se completó el ciclo básico de DevOps creando una aplicación web, generando su imagen Docker, ejecutándola en un contenedor, subiendo la imagen a Docker Hub y publicando la página en GitHub Pages.