import checkNumInputs from "./checkNumInputs";

const forms = (state) => {
    const forms = document.querySelectorAll('form');
    const input = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]')

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        return await res.text()
    };

    const clearInputs = () => {
        input.forEach(item => {
            item.value = '';
        });
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key])
                }
            }
            const formDataEntries = Array.from(formData.entries());

            const jsonData = JSON.stringify(formDataEntries);

            postData('https://simple-server-for-project.onrender.com/api/data', jsonData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                })
        });
    });

};

export default forms;