import Nav from '../nav/nav'
import './header.css'
import viteLogo from '/vite.svg'
import Button from '../button/btn'
export default function Header()
{ 
    return (
        <div>
            <header>
                <div className="wrapper">
                   <div className="logo">
                        <img src={viteLogo} alt="" />
                    </div>
                    <Nav/> 
                </div>
                <Button></Button>
            </header>
        </div>
    )
}