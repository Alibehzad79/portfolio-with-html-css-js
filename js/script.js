function modal() {
    let modal = document.querySelector('#modal');
    let projects = document.querySelectorAll('.project');
    let modalImage = document.querySelector('#modalImage');
    let modalContent = document.querySelector('#modalContent');
    let modalTitle = document.querySelector('#modalTitle');
    projects.forEach(project => {
        project.addEventListener('click', () => {
            modal.classList.add('active')
            if (modal.classList.contains('active')) {
                document.querySelector('#project_1').scrollIntoView();
                modalImage.src = project.querySelector('img').src;
                modalContent.innerHTML = project.querySelector('p').innerHTML;
                modalTitle.innerHTML = project.querySelector('h2').innerHTML;
                document.body.style.overflow = 'hidden';
                document.body.style.userSelect = 'none';
            }
        }
        )
    })

}
modal();

function closeModal() {
    let modal = document.querySelector('#modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.body.style.userSelect = 'auto';
}

function navStiky() {
    let navbar = document.querySelector('#navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('stiky')
        } else {
            navbar.classList.remove('stiky')
        }
    })
}

navStiky();

// function navItemActive() {
//     let portfolio = document.querySelector('#portfolio');
//     if (window.scrollIntoView() == portfolio) {
//         document.querySelector('#navbar').querySelector('#portfolio').classList.add('active')
//     }
// }

// navItemActive();

function formAnimation() {
    let formItems = document.querySelectorAll('.form-item');
    formItems.forEach(item => {
        item.addEventListener('click', () => {
            item.querySelector('label').classList.add('active');
            let itemvalue = item.querySelector('.form-input').value;
            if (itemvalue != '') {
                item.querySelector('label').classList.add('active');
            }
        })
    })
    formItems.forEach(item => {
        item.querySelector('label').classList.add('active');
        let itemvalue = item.querySelector('.form-input').value;
        if (itemvalue != '' && itemvalue != null && itemvalue != ' ') {
            item.querySelector('label').classList.add('active');
        } else {
            item.querySelector('label').classList.remove('active');
        }
    })
}

formAnimation();