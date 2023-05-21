import styles from './index.module.scss';
import {IoAddCircleOutline} from "react-icons/io5";
const PaymentMethodHeader = () => {
    return (
        <div className={styles.paymentMethodHeader}>
            <div>
              <span>Payment Methods</span>
            </div>
            <IoAddCircleOutline size={32} />
        </div>
    )
}

export default PaymentMethodHeader