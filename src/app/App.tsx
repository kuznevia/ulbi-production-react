import './styles/index.scss'
import { Link } from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter as Router } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <Router />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}
