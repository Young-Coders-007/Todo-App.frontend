import { Link } from 'react-router-dom'
import css from './NavFooter.module.scss'
import HelpIcon from '@ass/icons/help-&-support.svg?component'
import GithubIcon from '@ass/icons/github.svg?component'
import AboutIcon from '@ass/icons/about-us.svg?component'
import BackIcon from '@ass/icons/chev-down.svg?component'

const NavFooter = ({ setNavExpand }) => {
  return (
    <div className={css.NavFooter}>
      <div className={css.icons}>
        <Link to="/help-support">
          <HelpIcon />
        </Link>
        <Link to="/about-us">
          <AboutIcon />
        </Link>
        <a target="_blank" href="https://github.com/BabyDevs/Todo-App">
          <GithubIcon />
        </a>
      </div>

      <div>
        <button
          onClick={() => setNavExpand((prev) => !prev)}
          className={css.toggleNav}
        >
          <BackIcon />
        </button>
      </div>
    </div>
  )
}

export default NavFooter
