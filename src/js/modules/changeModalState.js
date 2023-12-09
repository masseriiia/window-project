import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height')

   const bindActionToElems = (event, elem, prop) => {
       elem.forEach((item, i) => {
           item.addEventListener(event, () => {
               switch (item.nodeName) {
                   case 'SPAN':
                       state[prop] = i;
                       break;
                   case 'INPUT':
                       state[prop] = item.value
                       break;
                   case 'SELECT':
                       state[prop] = item.value
                       break;
               }
               console.log(state)
           })
       })
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
}

export default changeModalState;