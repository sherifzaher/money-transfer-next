import {FC, PropsWithChildren} from "react";
import NavigationSidebar from "../components/sidebars/NavigationSidebar";
import styles from './index.module.scss';

const DashboardLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.layout}>
          <NavigationSidebar />
          <main className={styles.main}>{children}</main>
        </div>
    )
}

export default DashboardLayout