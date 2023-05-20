import styles from './index.module.scss';
import BalanceInfoCard from "../balance/BalanceInfoCard";

const DashboardInformation = () => {
  return (
    <div className={styles.container}>
      <BalanceInfoCard />
      <BalanceInfoCard />
      <BalanceInfoCard />
    </div>
  )
}

export default DashboardInformation;