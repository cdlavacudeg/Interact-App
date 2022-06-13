import '@styles/cardActivity.css'

const CardActivity = () => {
  return (
    <div className="cardActivity">
        <div className="cardActivity-text">
            <p className="cardActivity-title">Descripcion</p>
            <p className="cardActivity-body">Fecha limite: <span>12/03/2022</span></p>
        </div>
        <p className="cardActivity-status">
           Entregado
        </p>
    </div>
  )
}

export default CardActivity
