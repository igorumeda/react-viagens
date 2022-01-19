import { useSelector, useDispatch } from 'react-redux'
import { removeReserve, updateAmountReserve } from '../../store/modules/reserve/actions'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import './styles.css'

export default function Reservas(){

    const dispatch = useDispatch();
    const reserves = useSelector(state => state.reserve);

    function handleRemove(id){

        if(window.confirm('Deseja realmente remover esta reserva?')){
            
            dispatch( removeReserve(id) );
            
        }

    }

    function incrementAmount(trip){
        dispatch(updateAmountReserve(trip.id, trip.amount + 1))
    }

    function decrementAmount(trip){
        dispatch(updateAmountReserve(trip.id, trip.amount - 1))
    }

    return(
        <div>
            <h1 className='title'>Voce solicitou {reserves.length} reserva</h1>

            {reserves.map(reserve => (

                <div className='reservas' key={reserve.id}>

                    <img src={reserve.image} alt={reserve.title} />
                    <strong>{reserve.title}</strong>
                    <div id="amount">
                        <button type="button" onClick={ ()=> decrementAmount(reserve) }>
                            <MdRemoveCircle size={25} color="#191919" />
                        </button>
                        <input type="text" readOnly value={reserve.amount} />
                        <button type="button" onClick={ ()=> incrementAmount(reserve) }>
                            <MdAddCircle size={25} color="#191919" />
                        </button>
                    </div>
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