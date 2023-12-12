import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000, isInsufficent: false}

  renderProfile = () => {
    const name = 'Sarah Williams'

    return (
      <div className="profile_container">
        <div className="profile_photo_container">
          <h1 className="profile_photo">{name.slice(0, 1)}</h1>
        </div>
        <p className="profile_name">{name}</p>
      </div>
    )
  }

  renderBalance = () => {
    const {amount, isInsufficent} = this.state

    return (
      <div className="balance_container">
        <div>
          <p className="balance">Your Balance</p>
          {isInsufficent && (
            <p className="insufficent_balance">
              "Insufficient Balance to with draw"
            </p>
          )}
        </div>

        <div>
          <p className="amount">{amount}</p>
          <p className="in_rupees">In Rupees</p>
        </div>
      </div>
    )
  }

  onClickWithdraw = id => {
    const {denominationsList} = this.props
    const withraw = denominationsList.filter(each => id === each.id)
    const {value} = withraw[0]

    const {amount} = this.state

    if (amount >= value) {
      this.setState(prveState => ({
        amount: prveState.amount - value,
        isInsufficent: false,
      }))
    } else {
      this.setState(prveState => ({isInsufficent: true}))
    }
  }

  renderDenominationsContainer = () => {
    const {denominationsList} = this.props

    return (
      <div>
        <p className="withdrow_text">Withdraw</p>
        <p className="choose_numbers_text">CHOOSE SUM (IN RUPEES)</p>
        <ul className="denominations_list_container">
          {denominationsList.map(eachItem => (
            <DenominationItem
              key={eachItem.id}
              denomination={eachItem}
              onClickWithdraw={this.onClickWithdraw}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="main_container">
        <div className="withdrawal_contianer">
          {this.renderProfile()}
          {this.renderBalance()}
          {this.renderDenominationsContainer()}
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
