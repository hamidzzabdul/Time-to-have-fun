export const hideError  = ()=>{
    const el = document.querySelector('.alert');
    if (el){
        el.parentElement.removeChild(el);
    } 
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')
    if(email.className.includes('input--error')|| password.className.includes('input--error')){
        email.classList.remove('input--error')
        password.classList.remove('input--error')
    }
}

export const  showError = (type, msg, time=4)=> {
    hideError()
    const markup = `<div class="alert alert--${type}">${msg}</span>`
    document.querySelector('.close').insertAdjacentHTML('afterend', markup);
    const email = document.querySelector('.email')
    const password = document.querySelector('.password')
    email.classList.add(`input--${type}`)
    password.classList.add(`input--${type}`)
    window.setTimeout(hideError, time * 1000);
}

export const hideAlert = () => {
    const el = document.querySelector('.no-match')
    if(el) el.remove()
}
export const showAlertError = () => {
    hideAlert()
    const markup = `<p class="no-match">Sorry nothing matched those tags? 😥</>`
    document.querySelector('.text-wrapper').insertAdjacentHTML('afterbegin', markup);
}