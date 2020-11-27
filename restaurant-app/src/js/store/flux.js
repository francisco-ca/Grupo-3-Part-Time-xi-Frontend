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



            }
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

                e.prevent.default();
                const store = getStore();
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(store.persona)
                }
                fetch("ingresarruta/signup", options)
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