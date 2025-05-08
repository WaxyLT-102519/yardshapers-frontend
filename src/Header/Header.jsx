import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
  const nav = useNavigate();

  return (
    <div>
      <div>
        <h1 onClick={() => nav('/')}>Yardshapers</h1>
      </div>
      <div>
        <Link to='/services'>Our Services</Link>
      </div>
      <div>
        <Link to='/contact-us'>Contact Us!</Link>
      </div>
    </div>
  )
}

export default Header