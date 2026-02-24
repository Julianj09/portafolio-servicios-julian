export function initFormValidation() {
    const btn = document.getElementById('button');
    const form = document.getElementById('form');
    if (!form) return;

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    const limits = {
        nombre: 50,
        asunto: 50,
        mensaje: 300
    };

    const setupCounter = (input, limit, counterId, errorClass) => {
        const counter = document.getElementById(counterId);
        if (!counter) return;

        const update = () => {
            const current = input.value.length;
            counter.innerText = `${current}/${limit}`;

            const errorEl = document.querySelector(errorClass);
            if (current > limit) {
                input.style.borderColor = "#FF2851";
                counter.style.color = "#FF2851";
                if (errorEl) errorEl.innerText = `Máximo ${limit} caracteres permitidos`;
            } else {
                input.style.borderColor = "";
                counter.style.color = "";
                if (errorEl) errorEl.innerText = "";
            }
        };

        input.addEventListener('input', update);
        update(); // Initial call
    };

    setupCounter(nombre, limits.nombre, 'nombre-counter', '.contact__error--nombre');
    setupCounter(asunto, limits.asunto, 'asunto-counter', '.contact__error--asunto');
    setupCounter(mensaje, limits.mensaje, 'mensaje-counter', '.contact__error--mensaje');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Clear previous errors
        document.querySelectorAll('.contact__error').forEach(el => el.innerText = '');

        let isValid = true;

        if (nombre.value.trim() === '') {
            document.querySelector('.contact__error--nombre').innerText = 'El campo nombre es obligatorio';
            isValid = false;
        } else if (nombre.value.length > limits.nombre) {
            isValid = false;
        }

        if (email.value.trim() === '') {
            document.querySelector('.contact__error--email').innerText = 'El campo email es obligatorio';
            isValid = false;
        } else if (!validateEmail(email.value)) {
            document.querySelector('.contact__error--email').innerText = 'Por favor, ingresa un correo electrónico válido';
            isValid = false;
        }

        if (asunto.value.trim() === '') {
            document.querySelector('.contact__error--asunto').innerText = 'El campo asunto es obligatorio';
            isValid = false;
        } else if (asunto.value.length > limits.asunto) {
            isValid = false;
        }

        if (mensaje.value.trim() === '') {
            document.querySelector('.contact__error--mensaje').innerText = 'El campo mensaje es obligatorio';
            isValid = false;
        } else if (mensaje.value.length > limits.mensaje) {
            isValid = false;
        }

        if (isValid) {
            const originalText = btn.innerText;
            btn.innerText = 'Enviando...';
            btn.disabled = true;

            const serviceID = 'default_service';
            const templateID = 'template_dctxol9';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    Swal.fire({
                        icon: 'success',
                        title: 'Correo Enviado',
                        text: '¡Tu mensaje ha sido enviado con éxito!',
                    });
                    form.reset();
                    // Reset counters
                    ['nombre-counter', 'asunto-counter', 'mensaje-counter'].forEach(id => {
                        const el = document.getElementById(id);
                        if (el) el.innerText = `0/${limits[id.split('-')[0]]}`;
                    });
                }, (err) => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.',
                    });
                });
        }
    });
}
