import Classes from './Navbar.module.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {

return(
    <div className={Classes['navDiv']}>
    <div className={Classes['accessNav']}><h2>accessories</h2></div>
 <div className={Classes['Navbar']}>
 <Link to="/" className={Classes['navCards']}>Home</Link>
 <Link to="Electronics" className={Classes['navCards']}>Electronics</Link>
 <Link to="Jewelery" className={Classes['navCards']}>Jewelery</Link>
 <Link to="Men" className={Classes['navCards']}>Men</Link>
 <Link to="Women" className={Classes['navCards']}>Women</Link>
 </div>
 <div className={Classes['cartLogoDiv']}></div>
</div>
)

}