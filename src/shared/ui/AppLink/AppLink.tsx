import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ className, to, children, theme = AppLinkTheme.PRIMARY, ...otherProps }) => {
  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>{children}</Link>
  )
}
