import './CampoTexto.css'

interface Props {
    aoAlterado: (valor: string) => void // Especialmente nesse caso, temos uma função passada como props. Então, para temos que tipá-la como se uma arrow function
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
}

const CampoTexto = ({aoAlterado, label, placeholder, valor, obrigatorio = false}: Props) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto