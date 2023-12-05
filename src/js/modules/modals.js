const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector) => {
        const triggers = document.querySelectorAll(triggerSelector)
        const close = document.querySelector(closeSelector)
        const modal = document.querySelector(modalSelector)

        const closeModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }

        triggers.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                }
                modal.style.display = "block";
                document.body.style.overflow = "hidden"
            })
        })

        close.addEventListener('click', () => {
            closeModal()
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal()
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape") {
                closeModal()
            }
        })
    }

    const showModalByTime = (selector, time) => {
        setTimeout( () => {
            document.querySelector(selector).style.display = 'block'
            document.body.style.overflow = 'hidden'
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup_close')
    showModalByTime('.popup', 60000)
};

export default modals;