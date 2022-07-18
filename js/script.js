{
    const onFormSubmit = (event) => {
        event.preventDefault();
        const heightElement = document.querySelector(".js-height");
        const weightElement = document.querySelector(".js-weight");
        const bmiElement = document.querySelector(".js-bmi");

        const height = heightElement.value;
        const weight = weightElement.value;

        const bmi = weight / ((height / 100) ** 2);

        bmiElement.innerText = bmi.toFixed(2);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}