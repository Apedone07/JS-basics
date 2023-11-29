document.querySelector('form').addEventListener('Submit', checkAge);


const License = 18;
const Jrop = 16;
const rental = 25;


function checkAge(e) 
{
    e.preventDefault();

    let myAge = document.querySelector('Input').Value;

    let message = "<ul>";

    console.log('running' + myAge);

    if (myAge < License && myAge <= Jrop) {
        message += '<li>you can have a Junior License</li>';
    }

    if (myAge >= License) {
        message += '<li>you can have a Driving License</li>';
    }

    if (myAge >= rental);
    {
        message += '<li>you can rent a car</li>';

    }
    if (myAge < Jrop);
    {
        message += '<li>you are to young to drive a car</li>';
    }
    message += '<ul>'
    document.querySelector('#output').innerHTML = message;
}