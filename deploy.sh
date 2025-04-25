#!/usr/bin/env bash

# Salir en caso de error
set -e

# Generar los archivos de la aplicación
npm run build

# Navegar a la carpeta dist
cd dist

# Inicializar un repositorio Git
git init
git add -A
git commit -m 'Deploy'

# Reemplaza 'usuario' con tu nombre de usuario en GitHub y 'nombre-del-repositorio' con el nombre de tu repo
git push -f https://github.com/usuario/nombre-del-repositorio.git master:gh-pages

# Regresar a la raíz
cd -