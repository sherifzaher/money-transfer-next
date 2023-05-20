import {NextPageWithLayout} from "../../types";
import {ReactElement} from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

const Dashboard: NextPageWithLayout = () => {
    return (
        <div>
            Dashboard
        </div>
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