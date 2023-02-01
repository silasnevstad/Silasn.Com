const sections = document.querySelectorAll('.section');
const stickyHeader = document.querySelector('.sticky-header');

function handleScroll() {
    let headerText = '';
    for (let i = 0; i < sections.length; i++) {

        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top < 100) {
            headerText = section.querySelector('h2').textContent;
        }
    }
    if(headerText === '') stickyHeader.innerHTML = '';
    else stickyHeader.innerHTML = headerText;
}   

window.addEventListener('scroll', handleScroll);
