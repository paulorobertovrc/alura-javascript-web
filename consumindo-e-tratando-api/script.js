const consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(async (response) => {
        const data = await response.json();
        console.log(data);
    });
