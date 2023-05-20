import {FC, PropsWithChildren} from "react";
import NavigationSidebar from "../components/sidebars/NavigationSidebar";

const DashboardLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
          <NavigationSidebar />
          <main>{children}</main>
        </>
    )
}

export default DashboardLayout