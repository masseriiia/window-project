const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
        const triggers = document.querySelectorAll(triggerSelector)
        const close = document.querySelector(closeSelector)
        const modal = document.querySelector(modalSelector)
        const windows = document.querySelectorAll('[data-modal]')

        const closeWindows = () => {
            windows.forEach(item => {
                item.style.display = 'none';
            })
        }

        const closeModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }

        triggers.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                }
                closeWindows()

                modal.style.display = "block";
                document.body.style.overflow = "hidden"
            })
        })

        close.addEventListener('click', () => {
            closeWindows()
            closeModal()
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeWindows()
                closeModal();
            }
        })
        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape") {
                closeWindows()
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

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    //showModalByTime('.popup', 60000)
};

export default modals;