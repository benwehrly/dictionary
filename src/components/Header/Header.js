import './style.css'

const Header = ({ darkTheme, setDarkTheme }) => {

    const handleTheme = () => setDarkTheme(!darkTheme)

    return (
        <header>
            <h1>Quicktionary</h1>
            <div 
                className='theme'
                onClick={handleTheme}
                style={{ justifyContent: darkTheme && 'flex-end'}}
            >
                <div className='toggle'/>
            </div>
        </header>
    )
}

export default Header