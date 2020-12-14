const getState = ({ getStore, setStore }) => {
    return {
        store: {
            persona: {
                usuario: "",
                nombre: "",
                apellido: "",
                telefono: "",
                correo: "",
                contraseña: "",
            },
            restaurante: {
                nombre: "",
                direccion: "",
                numero_mesas: "",
                telefono: "",
                cap_lista: "",
            },
            restaurantes: []
            ,
            roles: {
                id_roles: "",
                rol: ""
            },
            getlistaespera:{

            },
            listapersonas: {

            },
            personasEnLista: {
                id_lista: "",
                id_personas: "",
                hora: ""
            }

        },
        actions: {
            onSubmitContraseña: (e, token) => {
                e.preventDefault();
                console.log('se ha enviado contraseña')
                console.log(token)
                const store = getStore();
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(store.persona)
                }
                fetch("https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/restablecer_contraseña", options)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        sessionStorage.setItem("persona_data", JSON.stringify(data))
                    })
                    .catch(error => console.log(error))
            },
            onSubmitCorreo: (e) => {
                e.preventDefault();
                console.log("se ha enviado el correo")
                const store = getStore();
                const { persona } = store
                console.log("la persona ha enviar", persona)
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(persona)
                }
                fetch("https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/olvide_contraseña", options)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
            },
            deleteRestaurant: (index, id) => {
                const store = getStore();
                const { restaurantes } = store;
                const nuevosRestaurantes = restaurantes.filter(function (prueba, i) {
                    return i !== index;
                });
                setStore({ restaurantes: nuevosRestaurantes })

                const config = {
                    "method": "DELETE",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                fetch(`https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/restaurantes/${id}`, config)
            },
            fetchRestaurantes: async () => {
                const login = JSON.parse(sessionStorage.getItem('login'))
                let token = login ? login.token_acceso : ""
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json",
                        'Authorization': `Bearer ${token}`
                    },
                }
                fetch('https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/restaurantes', config)
                    .then(res => res.json())
                    .then(data => {
                        setStore({ restaurantes: data })
                        console.log("data", data)
                    })
                    .catch(error => console.log(error))
            }
            ,
            fetchRestaurante: async (id) => {
                const store = getStore();
                const { restaurantes } = store;
                // const rest= restaurantes
                // const i = rest.map((item,index) =>rest[index].id_restaurante)
                // console.log("ifl", props)

                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                fetch(`https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/restaurantes/${id}`, config)
                    .then(res => res.json())
                    .then(data => {
                        setStore({ restaurante: data.restaurante })
                        console.log("data2", data[id])
                    })
                    .catch(error => console.log(error))

            },
            putRestaurante: (e, id) => {
                e.preventDefault();
                const store = getStore();
                let options = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(store.restaurante)
                }
                fetch(`https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/restaurantes/${id}`, options)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
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
                const { persona } = store;
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(store.persona)
                }

                fetch("https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/registro", options)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        sessionStorage.setItem("login", JSON.stringify({
                            data,
                            login: true,
                        }))

                        setStore({ persona: { login: true }, ...data })
                    })
                    .catch(error => console.log(error))
            },
            loginPersona: (e) => {
                e.preventDefault();
                const store = getStore();
                const { persona } = store;
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(store.persona)
                }

                fetch("https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/ingreso", options)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        //sessionStorage.setItem("persona_data", JSON.stringify(data)) 
                        sessionStorage.setItem("login", JSON.stringify({
                            login: true,
                            token_acceso: data.token_acceso,
                            data
                        }))
                        setStore({ persona: { login: true }, ...data })
                    })
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
                fetch("https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/nuevo_restaurante", options)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
            },
            fetchMenu: async (id) => {
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                fetch(`https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/personas/pagina/${id}`, config)
                    .then(res => res.json())
                    .then(data => {
                        setStore({ roles: data, ...data })
                        console.log("data", data)
                    })
                    .catch(error => console.log(error))
            },
            fetchListasEspera: async (id) => {
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                fetch(`https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/listapersonas/${id}`, config)
                    .then(res => res.json())
                    .then(data => {
                        setStore({ listapersonas: data })
                        console.log("datalista", data)
                    })
                    .catch(error => console.log(error))
            },
            fetchListaEspera: async () => {
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                fetch("https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/listapersonas", config)
                    .then(res => res.json())
                    .then(data => {
                        setStore({ listapersonas: data })
                        console.log("datalista", data)
                    })
                    .catch(error => console.log(error))

            },
            getListasEspera: async () => {
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                fetch("https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/listasespera", config)
                    .then(res => res.json())
                    .then(data => {
                        setStore({ listapersonas: data })
                        console.log("listasdeesperaINFO", data)
                    })
                    .catch(error => console.log(error))

            },
            getListaEspera: async (id) => {
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                fetch(`https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/listasespera/${id}`, config)
                    .then(res => res.json())
                    .then(data => {
                        setStore({ getlistaespera: data })
                        console.log("listadeespera", data)
                    })
                    .catch(error => console.log(error))

            },
            onSubmitpersonaenLista: (x,y,z) => {
                
                const store = getStore();
                const { personasEnLista } = store
                const hola = {"id_lista": x, "id_personas": y, "hora": z}
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(hola)
                }
                fetch("https://5000-d4e0f193-23c8-42da-b953-410afcd69af9.ws-us03.gitpod.io/listas_persona", options)
                    .then(res => res.json())
                    .then(data => console.log("personasEnLista", data))
                    .catch(error => console.log(error))
            },
        }
    }
}
export default getState;