#   Angular Effects Version 2022
```
    Estructura de Directorios preferida
    src
        -   App
            -   Models
            -   Services
            -   Shared
            -   Stores
            -   Modulo de Usuarios ( users )

```

##  Que son los effectos NGRX - 2022
```
    No todas las acciones van a disparar effectos solo las que necesitemos
    Los effectos escucha acciones disparadas en el NGRX Store es parte de ese paquete y lo expande
    la idea es que los componenetes se encuentren los mas ligeros posibles.
    tambien que se encargue de taras asynchronas y synchronas.

    Ciclo comun de Redux ( circulo de Redux )
    Estado -> Componenete -> Accion -> Reducer -> Nuevo Estado
    Ciclo comun de Redux usando Effectos
    Estado -> Componente -> Accion -> 
                            Effecto -> Servicio -> Servidor -> Servicio -> Effecto -> Nuevo Estado -> Componenete
    
```