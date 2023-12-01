const getlocation = () => {
    fetch("https://ipapi.co/json/")
        .then((response) => response.json() )
        .then((data) =>{
            console.log(data);
            const des = document.querySelector("p");
            des.innerHTML = `Location: ${data.city},${data.region}`;
        })
}