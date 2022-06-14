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