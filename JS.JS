let previewcontainer = document.querySelector('.products-preview');
let previewBox = previewcontainer.querySelectorAll('.preview');
document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        previewcontainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});
previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        previewcontainer.style.display = 'none';
    };
});



document.addEventListener('DOMContentLoaded',function(){
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
     darkModeToggle.addEventListener('click', ()=>{
        body.classList.toggle('dark-mode');
        const currentMode = body.classList.contains('dark-mode')?'dark':'light';

        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
        darkModeToggle.querySelector('i').classList.toggle('light-mode');
     })
})



function data()
{
var a = document.getElementById("name").value;
var b = document.getElementById("age").value;
var c = document.getElementById("gender").value;
var d = document.getElementById("email").value;
var e = document.getElementById("phone").value;
var f = document.getElementById("desc").value;

if(a==""|| b==""||c==""|| d==""||e==""||f==""){
    alert("ALL FIELDS ARE MENDATORY");
    return false;
}
else{
    true;
}

}


document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing!");
});




