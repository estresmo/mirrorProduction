# Descripción
Este es un repositorio autogenerado por react-mirror y mirror-server, el bashscript para generarlo es este:

##### ```
cd react-mirror
copy /Y main.js ..\MirrorProduction\
copy /Y .env ..\MirrorProduction\
start cmd.exe @cmd /k "npm run build & xcopy /E /Y build\*.* ..\MirrorProduction\html\ & exit"
cd ..
cd mirror-server
start cmd.exe @cmd /k "npm run build & xcopy /E /Y lib\*.* ..\MirrorProduction\server\ & exit"
```

# Instalación
