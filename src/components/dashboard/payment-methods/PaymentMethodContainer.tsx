import { IoAddCircleOutline } from 'react-icons/io5'

import styles from './index.module.scss';
import {MockPaymentMethodType} from "../../../types";

const mockPaymentMethod: MockPaymentMethodType[] = [
  {
    type: 'visa',
    last4:'0036',
    name: 'Gas Cash Back'
  }
];

const PaymentMethodContainer = () => {
  return (
    <div className={styles.container}>
      {
        mockPaymentMethod.length < 3
          ? (
            <>
              {mockPaymentMethod.map((method) => <div style={{width: '500px'}} key={method.last4}>{method.name}</div>)}
              <div className={styles.addPaymentCard}>
                <IoAddCircleOutline size={38} />
                <span>Add Payment Method</span>
              </div>
            </>
          )
          : []
      }
    </div>
  )
}

export default PaymentMethodContainer;