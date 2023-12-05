const tabs = ({headerSelector, tabSelector, contentSelector, activeClass}) => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);

    const hideTabContent = () => {
        contents.forEach(item => {
            item.style.display = 'none'
        })
        tabs.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    const showTabContent = (i = 0) => {
        contents[i].style.display = 'block'
        tabs[i].classList.add(activeClass)
    }

    hideTabContent()
    showTabContent()

    header.addEventListener('click', (e) => {
        const target = e.target
        if ( target && target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tabs.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i)
                }
            })
        }
    })
}

export default tabs