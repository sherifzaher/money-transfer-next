import {NextPageWithLayout} from "../../types";
import {ReactElement} from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

const Activity: NextPageWithLayout = () => {
  return (
    <div className={"page"}>
      Activity
    </div>
  )
}

Activity.getLayout = function getLayout(page: ReactElement){
  return (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  )
}

export default Activity