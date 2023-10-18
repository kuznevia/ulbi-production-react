import { useTheme } from 'app/providers/ThemeProvider'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavBarProps {
    className?: string;
}

export const Navbar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY} >Главная</AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.RED}>О сайте</AppLink>
        </div>
    </div>
  )
}
