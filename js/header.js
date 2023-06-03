let headerModal = document.querySelector('#header_logo2-modal-window');

// function openModal(){
//     headerModal.classList.add('header-window-open')
// }

// function closeModal(){
//     headerModal.classList.remove('header-window-open')
// }

function openModal(){
    headerModal.style.display = 'flex'
}

function closeModal(){
    headerModal.style.display = 'none'
}

function cssModal(){
    
}

async function getUsers(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(data)
}