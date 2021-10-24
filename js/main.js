window.onload = () => {

    document.querySelector(".btn-submit").addEventListener("click", () => {
        const height = parseFloat(document.querySelector("#height-input").value);
        const weight = parseFloat(document.querySelector("#weight-input").value);

        if(!weight) {
            const alert = document.querySelectorAll(".err")[0];
            alert.style.display = "block";
        } else if(!height) {
            const alert = document.querySelectorAll(".err")[1];
            alert.style.display = "block";
        } else {

            const result = (weight / (height * height));

            const alert = document.querySelectorAll(".err");

            alert[0].style.display = "none";
            alert[1].style.display = "none";
 
            document.querySelector(".result").innerHTML = `Seu IMC é ${result.toFixed(2)}`;
            document.querySelector(".result").style.display = "block";
        }

    });
}