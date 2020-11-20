const form = document.getElementById('myForm');
const whatDays = document.getElementById('whatDays')
const age = document.getElementById('age');
const time = document.getElementById('hours');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    getValue()
});

function getValue() {
    // Values;
    const whatDaysValue = whatDays.value;
    const ageValue = age.value;
    const timeValue = time.value


    if ((whatDaysValue == 'cumartesi') && (ageValue >= 20 && ageValue <= 65) && (timeValue >= '10:00' && timeValue <= '20:00') ||
        (whatDaysValue == 'pazar') && (ageValue >= 20 && ageValue <= 65) && (timeValue >= '10:00' && timeValue <= '20:00')) {
        
            $('#\\#modal').modal('show')
            document.querySelector('.result').textContent = "Dışarı Çıkabilirsiniz, maskenizi takmayı unutmayın."
            document.querySelector('.modal-title').textContent = '#MaskeTak'

    } else if ((whatDaysValue == 'pazartesi') && (ageValue >= 20 && ageValue <= 65) ||
        (whatDaysValue == 'salı') && (ageValue >= 20 && ageValue <= 65) ||
        (whatDaysValue == 'çarşamba') && (ageValue >= 20 && ageValue <= 65) ||
        (whatDaysValue == 'perşembe') && (ageValue >= 20 && ageValue <= 65) ||
        (whatDaysValue == 'cuma') && (ageValue >= 20 && ageValue <= 65)
    ) {
        $('#\\#modal').modal('show')
            document.querySelector('.result').textContent = "Dışarı çıkabilirsiniz, maskenizi takmayı unutmayın."
            document.querySelector('.modal-title').textContent = '#MaskeTak'

    } else if ((whatDaysValue == 'pazartesi') && (ageValue < 20) && (timeValue >= '13:00' && timeValue <= '16:00') ||
        (whatDaysValue == 'salı') && (ageValue < 20) && (timeValue >= '13:00' && timeValue <= '16:00') ||
        (whatDaysValue == 'çarşamba') && (ageValue < 20) && (timeValue >= '13:00' && timeValue <= '16:00') ||
        (whatDaysValue == 'perşembe') && (ageValue < 20) && (timeValue >= '13:00' && timeValue <= '16:00') ||
        (whatDaysValue == 'cuma') && (ageValue < 20) && (timeValue >= '13:00' && timeValue <= '16:00') ||
        (whatDaysValue == 'cumartesi') && (ageValue < 20) && (timeValue >= '13:00' && timeValue <= '16:00') ||
        (whatDaysValue == 'pazar') && (ageValue < 20) && (timeValue >= '13:00' && timeValue <= '16:00')
    ) {
        $('#\\#modal').modal('show')
            document.querySelector('.result').textContent = "Saat 13:00 ve 16:00 arası dışarı çıkabilirsiniz, maskenizi takmayı unutmayın."
            document.querySelector('.modal-title').textContent = '#MaskeTak'

    } else if ((whatDaysValue == 'pazartesi') && (ageValue > 65) && (timeValue >= '10:00' && timeValue <= '13:00') ||
        (whatDaysValue == 'salı') && (ageValue > 65) && (timeValue >= '10:00' && timeValue <= '13:00') ||
        (whatDaysValue == 'çarşamba') && (ageValue > 65) && (timeValue >= '10:00' && timeValue <= '13:00') ||
        (whatDaysValue == 'perşembe') && (ageValue > 65) && (timeValue >= '10:00' && timeValue <= '13:00') ||
        (whatDaysValue == 'cuma') && (ageValue > 65) && (timeValue >= '10:00' && timeValue <= '13:00') ||
        (whatDaysValue == 'cumartesi') && (ageValue > 65) && (timeValue >= '10:00' && timeValue <= '13:00') ||
        (whatDaysValue == 'pazar') && (ageValue > 65) && (timeValue >= '10:00' && timeValue <= '13:00')
    ) {
        $('#\\#modal').modal('show')
            document.querySelector('.result').textContent = "Saat 10:00 ve 13:00 arası dışarı çıkabilirsiniz, maskenizi takmayı unutmayın."
            document.querySelector('.modal-title').textContent = '#MaskeTak'

    } else {
        $('#\\#modal').modal('show')
            document.querySelector('.result').textContent = "Dışarı çıkamazsınız."
            document.querySelector('.modal-title').textContent = '#EvdeKal'
    }
}