import React from 'react'
import './Banner.css'

interface Props {
    enderecoImg: string,
    textAlt?: string
}

export const Banner = ({ enderecoImg, textAlt }: Props) => {
    // JSX
    return (
        <header className="banner">
            {/* <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/> */}
            <img src={enderecoImg} alt={textAlt}/>
        </header>
    )
}

export default Banner