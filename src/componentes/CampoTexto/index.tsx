import './CampoTexto.css'

interface Props {
    aoAlterado: (valor: string) => void // Especialmente nesse caso, temos uma função passada como props. Então, para temos que tipá-la como se uma arrow function
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({aoAlterado, label, placeholder, valor, obrigatorio = false, tipo = 'text'}: Props) => {

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
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto