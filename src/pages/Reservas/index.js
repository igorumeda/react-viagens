import { useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md'
import './styles.css'

export default function Reservas(){

    const reserves = useSelector(state => state.reserve);

    return(
        <div>
            <h1 className='title'>Voce solicitou {reserves.length} reserva</h1>

            {reserves.map(reserve => (
                <div className='reservas' key={reserve.id}>
                    <img src={reserve.image} alt={reserve.title} />
                    <strong>{reserve.title}</strong>
                    <span>Quantidade: 0</span>
                    <button type='button' onClick={()=>{}}>
                        <MdDelete size={20} color='#191919' />
                    </button>
                </div>
            ))}
 
            <footer>
                <button type="button">Solicitar Reserva</button>
            </footer>
        </div>
    )

}