import { iColaborador } from '../../shared/interfaces/iColaborador'
import Colaborador from '../Colaborador'
import './Time.css'

interface Props {
    corPrimaria: string
    corSecundaria: string
    nome: string
    colaboradores: iColaborador[]
}

const Time = (props: Props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador =>
                    <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        data={colaborador.data}
                    />)
                }
            </div>
        </section>
            : <></>
    )
}

export default Time