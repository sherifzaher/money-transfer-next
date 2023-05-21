import { IoAddCircleOutline } from 'react-icons/io5'

import styles from './index.module.scss';
import {MockPaymentMethodType} from "../../../types";
import PaymentMethodCardItem from "./PaymentMethodCardItem";
import PaymentMethodHeader from "./PaymentMethodHeader";

const mockPaymentMethod: MockPaymentMethodType[] = [
  {
    type: 'visa',
    last4:'0036',
    name: 'Gas Cash Back'
  },
  {
    type: 'visa',
    last4:'0036',
    name: 'Gas Cash Back'
  },

];

const PaymentMethodContainer = () => {
  return (
    <>
      <PaymentMethodHeader />
      <div className={styles.container}>
        {mockPaymentMethod.map((method) => (
          <PaymentMethodCardItem key={method.last4} method={method} />
        ))}
      </div>
    </>
  )
}

export default PaymentMethodContainer;