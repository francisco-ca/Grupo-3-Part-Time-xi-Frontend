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
                fetch("http://127.0.0.1:5000/restablecer_contraseña", options)
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
                const {persona} = store
                console.log("la persona ha enviar", persona)
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(persona)
                }
                fetch("http://127.0.0.1:5000/olvide_contraseña", options)
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
                fetch(`http://127.0.0.1:5000/restaurantes/${id}`, config)
            },
            fetchRestaurantes: async () => {
                const persona_data=JSON.parse(sessionStorage.getItem('persona_data'))
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json",
                        'Authorization': `Bearer ${persona_data.token_acceso}`
                    },
                }
                fetch('http://127.0.0.1:5000/restaurantes', config)
                    .then(res => res.json())
                    .then(data => {setStore({ restaurantes: data })
                                   console.log("data",data)})
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
                fetch(`http://127.0.0.1:5000/restaurantes/${id}`, config)
                    .then(res => res.json())
                    .then(data => {setStore({ restaurante: data.restaurante })
                                   console.log("data2",data[id])})
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
                fetch(`http://127.0.0.1:5000/restaurantes/${id}`, options)
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
                const {persona}= store;
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(store.persona)
                }
                //fetch("https://5000-cc105e22-f107-4aad-8d4b-e6a586143baa.ws-us02.gitpod.io/registro", options)
                fetch("http://127.0.0.1:5000/registro", options)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        sessionStorage.setItem("signup", JSON.stringify({
                            data,
                            signup: true,
                            }))

                        setStore({ persona: {signup: true}, ...data })    
                    })
                    .catch(error => console.log(error))
            },
            loginPersona: (e) => {
                e.preventDefault();
                const store = getStore();
                const {persona}= store;
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(store.persona)
                }
                fetch("https://5000-d9edb2e7-6407-420f-b188-08f085ad1dcf.ws-us02.gitpod.io/ingreso", options)
                //fetch("http://127.0.0.1:5000/ingreso", options)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        //sessionStorage.setItem("persona_data", JSON.stringify(data)) 
                        sessionStorage.setItem("login", JSON.stringify({
                            login: true,
                            token_acceso: data.token_acceso,
                            data
                        })) 
                        setStore({ persona: {login: true}, ...data })
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
                fetch("http://127.0.0.1:5000/nuevo_restaurante", options)
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
                fetch(`http://127.0.0.1:5000/personas/pagina/${id}`, config)
                    .then(res => res.json())
                    .then(data => {setStore({ roles: data, ...data })
                        console.log("data",data)
                    })
                    .catch(error => console.log(error))
            }
        }
    };
}
export default getState;