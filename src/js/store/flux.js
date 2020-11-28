const getState = ({ getStore, setStore }) => {
    return {
        store: {
            persona: {
                usuario: "",
                nombre: "",
                apellido: "",
                telefono: "",
                correo: "",
                contraseña: ""
            },
            restaurante: {
                nombre: "",
                direccion: "",
                numero_mesas:"",
                telefono: "",
                cap_lista: ""
            },
            restaurantes: [
                {
                    nombre:"Restaurant 1",
                    cantidad_maxima:10,
                    espera:2,
                    direccion:"",

                },
                {
                    nombre:"Restaurant 2",
                    cantidad_maxima:20,
                    espera:0
                },
                {
                    nombre:"Restaurant 3",
                    cantidad_maxima:6,
                    espera:1
                }
            ]
        },
        actions: {
            deleteRestaurant: (index)=>{
                const store = getStore();
                const {restaurantes} = store;
                const nuevosRestaurantes = restaurantes.filter( function(prueba, i ) {
                    return i !== index;
                });
                setStore({restaurantes:nuevosRestaurantes})
                console.log(nuevosRestaurantes)
                console.log(store)
            },
            onChangeUser: (e) => {
                const store = getStore();
                const { persona } = store
                persona[e.target.name] = e.target.value
                setStore({ persona })
                console.log(e.target.name)
                console.log(store.persona)
            },
             onChangeRest: (e) => {
                const store = getStore();
                const { restaurante } = store
                restaurante[e.target.name] = e.target.value
                setStore({ restaurante })
                console.log(store.restaurante)
                
            },
            onSubmitPersona: (e) => {
                e.preventDefault();
                const store = getStore();
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(store.persona)
                }
                fetch("https://5000-af813d8d-e368-4c42-97fc-0982c980b30f.ws-us02.gitpod.io/signup", options)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
            },
            onSubmitRest: (e) => {

                e.preventDefault();
                const store = getStore();
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(store.restaurante)
                }
                fetch("ingresarruta/editar", options)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
            }
            //(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()

        }
    };
};

export default getState;