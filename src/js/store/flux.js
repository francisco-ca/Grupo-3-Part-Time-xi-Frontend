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
        },
        actions: {

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
                fetch(`https://5000-b1f83105-e24d-4340-a3cf-45e41758461b.ws-us03.gitpod.io/restaurantes/${id}`, config)
            },
            fetchRestaurantes: async () => {
                const config = {
                    "method": "GET",
                    "headers": {
                        "Content-type": "application/json"
                    },
                }
                fetch('https://5000-b1f83105-e24d-4340-a3cf-45e41758461b.ws-us03.gitpod.io/restaurantes', config)
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
                fetch(`https://5000-b1f83105-e24d-4340-a3cf-45e41758461b.ws-us03.gitpod.io/restaurantes/${id}`, config)
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
                fetch(`https://5000-b1f83105-e24d-4340-a3cf-45e41758461b.ws-us03.gitpod.io/restaurantes/${id}`, options)
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
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(store.persona)
                }
                fetch("https://5000-cc105e22-f107-4aad-8d4b-e6a586143baa.ws-us02.gitpod.io/registro", options)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
            },
            loginPersona: (e) => {
                e.preventDefault();
                const store = getStore();
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(store.persona)
                }
                fetch("https://5000-d9edb2e7-6407-420f-b188-08f085ad1dcf.ws-us02.gitpod.io/ingreso", options)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        sessionStorage.setItem("persona_data", JSON.stringify(data))
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
                fetch("https://5000-b1f83105-e24d-4340-a3cf-45e41758461b.ws-us03.gitpod.io/nuevo_restaurante", options)
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
            }
        }
    };
}
export default getState;