'use strict';

function popup(icon, text, position = 'top') {
    Swal.fire({
        background: '#1D2026',
        position: position,
        icon: icon,
        text: text,
        color: '#FFFFFF',
        confirmButtonColor: 'rgba(127, 174, 203, 1)',
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' },
    });
}
//...
