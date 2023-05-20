import styles from './index.module.scss'

const BalanceInfoCard = () => {
    return (
        <div className={styles.card}>
            <h2>My Balance</h2>
          <div>
            <span className={styles.balanceText}>$56,322,456.49</span>
          </div>
          <div>
            <span>View Activity</span>
          </div>
        </div>
    )
}

export default BalanceInfoCard