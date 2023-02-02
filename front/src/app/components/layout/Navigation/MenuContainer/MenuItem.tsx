
'use client';
import { FC } from 'react';
import cn from 'classnames';
import styles from './Menu.module.scss';
import { IMenuItem } from './menu.interface';
import Link from 'next/link';
import MaterialIcon from '../../../ui/MaterialIcon';
import { useRouter } from 'next/navigation';

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
    const router = useRouter();

    return (
        <li className={cn({
            [styles.active]: router.asPath === item.link
        })}>
            <Link href={`${item.link}`}>
                {/* <a> */}
                {/* TODO: must be fixed */}
                {/* <MaterialIcon name={item.icon} /> */}
                <span>{item.title}</span>
                {/* </a> */}
            </Link>
        </li >
    )
}

export default MenuItem;