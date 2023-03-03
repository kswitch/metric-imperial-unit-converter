const convertBtn = document.querySelector('#convert-btn');
convertBtn.addEventListener('click', () => {
    const numberInput = document.querySelector('#number-input').innerHTML;
    if (!Number(numberInput)) {
        window.alert("Please input a number");
    }
    else {
        const metersToFeet = numberInput * 3.28084;
        const feetToMeters = numberInput * 0.3048;
        const litersToGallons = numberInput * 0.264172;
        const gallonsToLiters = numberInput * 3.78541;
        const kilosToPounds = numberInput * 2.20462;
        const poundsToKilos = numberInput * 0.453592;

        document.querySelector('#length').textContent = `${numberInput} meters = ${metersToFeet.toFixed(3)} feet | ${numberInput} feet = ${feetToMeters.toFixed(3)} meters`
        document.querySelector('#volume').textContent = `${numberInput} liters = ${litersToGallons.toFixed(3)} gallons | ${numberInput} gallons = ${gallonsToLiters.toFixed(3)} liters`
        document.querySelector('#mass').textContent = `${numberInput} kilos = ${kilosToPounds.toFixed(3)} pounds | ${numberInput} pounds = ${poundsToKilos.toFixed(3)} kilos`
    }
})