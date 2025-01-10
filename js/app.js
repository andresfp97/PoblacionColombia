
    let mun = document.querySelector("#mun");
    let departamentos = []

    const getDepartamentos = async () => {
        try {
            const respuesta = await fetch("https://api-colombia.com/api/v1/Department")
            const data = await respuesta.json()
            departamentos = data
            return departamentos

        } catch (error) {
            console.log(error);
        }
    }

    const validacionDepartamento = async () => {
        await getDepartamentos();
        const boton = document.querySelector("#pumpum")
        boton.addEventListener("click", (e) => {
            const buscar = document.querySelector("#buscar");
            for (let i = 0; i < departamentos.length; i++) {
                if (departamentos[i].name === buscar.value) {
                    let id = departamentos[i].id
                    console.log(id);
                    buscar.value = "";
                    return getMunicipios(id)

                }
            }

            alert("Departamento no encontrado")
            buscar.value = "";

        })

    }

    const getMunicipios = async (idDepartamento) => {
        try {
            console
            const respuesta = await fetch(`https://api-colombia.com/api/v1/Department/${idDepartamento}/cities`)
            const data = await respuesta.json()
            console.log(data);
            mun.innerHTML = ""
            data.forEach(element => {
                let pintar = document.createElement("p")
                pintar.innerHTML = `${element.name} y poblacion:  ${element.population}`
                mun.appendChild(pintar)
            });

        } catch (error) {
            console.log(error);
        }
    }


    const pintar = (municipios) => {
        let mostrar = "";

        for (let i = 0; i < municipios.length; i++) {
            const element = array[i];

        }

    }

    validacionDepartamento();