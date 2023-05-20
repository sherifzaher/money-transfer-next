import {ReactElement} from "react";

import styles from './index.module.scss';
import {NextPageWithLayout} from "../../types";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardInformation from "../../components/dashboard/info/DashboardInformation";
import PaymentMethodContainer from "../../components/dashboard/payment-methods/PaymentMethodContainer";

const Dashboard: NextPageWithLayout = () => {
    return (
      <>
        <header className={styles.header}>
          <h1>Welcome Back</h1>
        </header>
        <div className={styles.main}>
          <DashboardInformation />
          <PaymentMethodContainer />
        </div>
      </>
    )
}

Dashboard.getLayout = function getLayout(page: ReactElement){
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default Dashboard