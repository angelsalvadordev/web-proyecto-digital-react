import React from 'react'

const Menu = () => {
    return (
        <div className="main-menu bg-dark flex-column justify-content-center" id="main-menu">
            <div className="social flex">
                <a href="/"><img src="/media/svg/instagram.svg" className="social__icon" alt="icono instagram" /></a>
                <a href="/"><img src="/media/svg/twitter.svg" className="social__icon" alt="icono twitter" /></a>
                <a href="/"><img src="/media/svg/facebook.svg" className="social__icon" alt="icono facebook" /></a>
            </div>
            <ul className="menu">
                <li className="menu__item"><a href="#inicio" className="menu__link f-14">Inicio</a></li>
                <li className="menu__item"><a href="#servicios" className="menu__link f-14">Servicios</a></li>
                <li className="menu__item"><a href="#portafolio" className="menu__link f-14">Portafolio</a></li>
                <li className="menu__item"><a href="#testimonios" className="menu__link f-14">Testimonios</a></li>
                <li className="menu__item"><a href="#contactos" className="menu__link f-14">Contacto</a></li>
            </ul>
        </div>
    )
}

export default Menu
