import './index.css'

const DenominationItem = props => {
  const {denomination, onClickWithdraw} = props

  const onClickDenomination = () => {
    onClickWithdraw(denomination.id)
  }

  return (
    <li className="denomination_value" onClick={onClickDenomination}>
      <h2>{denomination.value}</h2>
    </li>
  )
}

export default DenominationItem
