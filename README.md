# Descripción
Este es un repositorio autogenerado por react-mirror y mirror-server, el cmd script para generarlo es este:

```
cd react-mirror
copy /Y main.js ..\MirrorProduction\
copy /Y .env ..\MirrorProduction\
start cmd.exe @cmd /k "npm run build & xcopy /E /Y build\*.* ..\MirrorProduction\html\ & exit"
cd ..
cd mirror-server
start cmd.exe @cmd /k "npm run build & xcopy /E /Y lib\*.* ..\MirrorProduction\server\ & exit"
```

# Requisitos

Tener instalado base de datos mariadb y nodejs >= 14.0 

# Instalación

Se instala con nodejs con el siguiente comando:
`npm install`

# Uso

Primero fijese que este corriendo su servidor mariadb y este las credenciales correctas 
en el archivo .env ; Este archivo tiene varios scripst para facilitar el uso del espejo,
para abrir todos los componentes es el siguiente comando:

##### `npm run all`

Con este comando arranca el server, el socket y la app del espejo. Si desea abrirlo por parte
se hace con los siguientes comandos:

1. `npm run server`
2. `npm run socket`
3. `npm run mirror`



