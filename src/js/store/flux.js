const getState = ({ getStore, setStore }) => {
    return {
        store: {
            persona: {
                username: "",
                name: "",
                last_name: "",
                telefono: "",
                correo: "",
                password: ""
            },
            restaurantes: [
                {
                    nombre:"Restaurant 1",
                    cantidad_maxima:10,
                    espera:2
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
            onChangeUser: (e) => {
                const store = getStore();
                const { persona } = store
                persona[e.target.name] = e.target.value
                setStore({ persona })
                console.log(e.target.name)
                console.log(store.persona)

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
                fetch("http://127.0.0.1:5000/signup", options)
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