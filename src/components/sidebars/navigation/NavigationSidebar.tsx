import styles from './index.module.scss';
import {navigationItems} from "../../../utils/constants";
import NavigationSidebarItem from "./items/NavigationSidebarItem";
function NavigationSidebar(){
    return (
        <div className={styles.nav}>
          <div className={styles.navItemContainer}>
              {navigationItems.map((item) => (
                <NavigationSidebarItem key={item.type} item={item} />
              ))}
          </div>
        </div>
    )
}

export default NavigationSidebar
