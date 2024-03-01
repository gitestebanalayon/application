import { 
    display_block,
    display_block_nivel1
} from '../funtions-stack/funtions.js';

function nav_active(container, btn, arrow, dropdown_options) {
    btn.addEventListener('click', () => {
        container.classList.toggle('open_nav');
        arrow.classList.toggle('rotate-arrow');
    });

    /*--ACTIVA-EL-FOCUS-INIT--*/
    const background = document.querySelectorAll('.a');
    function focus() {
        background.forEach(dato => {
            dato.classList.remove('options-focus');
        })
        this.classList.add('options-focus');
    }
    background.forEach(element => {
        element.addEventListener('click', focus);
    })
    /*--ACTIVA-EL-FOCUS-END--*/

    dropdown_options.forEach(element => {
        element.addEventListener('click', (e) => {
            const arrow = document.querySelectorAll('.arrow-nav');
            const block = document.querySelectorAll('.block');
            const options = document.querySelectorAll('.dropdown_options');
            
            switch (e.target.id) {
                case 'personal':
                    options[0].classList.toggle('options-focus');
                    arrow[0].classList.toggle('rotate_arrow');
                    display_block(block[0]);
                break;
                case 'compras':
                    options[1].classList.toggle('options-focus');
                    arrow[1].classList.toggle('rotate_arrow');
                    display_block(block[1]);
                break;
                case 'euro':
                    options[2].classList.toggle('options-focus');
                    arrow[2].classList.toggle('rotate_arrow');
                    display_block_nivel1(block[2], block[1]);
                break;
                case 'dolares':
                    options[3].classList.toggle('options-focus');
                    arrow[3].classList.toggle('rotate_arrow');
                    display_block_nivel1(block[3], block[1]);
                break;
                case 'bank':
                    options[4].classList.toggle('options-focus');
                    arrow[4].classList.toggle('rotate_arrow');
                    display_block(block[4]);
                break;
            };
        });
    });
};

export { nav_active };