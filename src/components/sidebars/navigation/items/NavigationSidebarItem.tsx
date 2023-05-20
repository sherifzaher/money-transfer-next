import {FC} from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from './index.module.scss';
import {NavigationItem} from "../../../../types";
import {getNavigationIcon} from "../../../../utils/helpers";

type Props = {
  item: NavigationItem;
}

const NavigationSidebarItem: FC<Props> = ({item}) => {
  const Icon = getNavigationIcon(item);
  const router = useRouter();
  const isActive = router.pathname === item.pathname;
    return (
      <Link href={item.pathname}>
        <Icon size={36} cursor={"pointer"} className={`${styles.icon} ${isActive && styles.active}`} />
      </Link>
    )
}

export default NavigationSidebarItem
