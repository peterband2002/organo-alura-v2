import React from 'react'
import { ReactElement } from 'react'
import './Botao.css'

interface Props { // Convencionalmente é criado uma interface para tipar as props dos componentes
    children: ReactElement | string
}

const Botao = (props: Props) => {
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao