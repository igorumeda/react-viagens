import { useSelector, useDispatch } from 'react-redux'
import { removeReserve } from '../../store/modules/reserve/actions'
import { MdDelete } from 'react-icons/md'
import './styles.css'

export default function Reservas(){

    const dispatch = useDispatch();
    const reserves = useSelector(state => state.reserve);

    function handleRemove(id){

        if(window.confirm('Deseja realmente remover esta reserva?')){
            
            dispatch( removeReserve(id) );
            
        }

    }

    return(
        <div>
            <h1 className='title'>Voce solicitou {reserves.length} reserva</h1>

            {reserves.map(reserve => (
                <div className='reservas' key={reserve.id}>
                    <img src={reserve.image} alt={reserve.title} />
                    <strong>{reserve.title}</strong>
                    <span>Quantidade: {reserve.amount}</span>
                    <button type='button' onClick={ ()=> handleRemove(reserve.id) }>
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