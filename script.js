const button = document.querySelectorAll('button');
let p = document.querySelector('p');

button.forEach((elemet)=>{
    elemet.addEventListener('click', ()=>{
        const request = new XMLHttpRequest();
    
        request.open('GET', `https://jsonplaceholder.typicode.com/users/${elemet.id}`);
        request.setRequestHeader('Content-type','application/json; charset=utf-8');
        request.send();
    
        request.addEventListener('load', ()=>{
            if(request.status === 200){
                
                let btnClass = document.querySelector('.info');
                btnClass.classList.remove("empty");

                let deleteP = document.querySelector('.delete');
                deleteP.classList.remove("empty");

                deleteP.addEventListener('click', ()=>{
                    p.innerHTML = ``;
                    btnClass.classList.add("empty");
                    deleteP.classList.add("empty");
                });



                console.log(request.response);
                const data = JSON.parse(request.response);
                p.innerHTML = `Имя пользователя: ${data.name}<br>
                               Почта пользователя: ${data.email}<br>
                               Телефон пользователя: ${data.phone}<br>
                               Сайт пользователя: ${data.website}<br>`;
            } else{
                console.log('Error');
            }
        });
    });
    
});
