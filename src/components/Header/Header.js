import './style.css'

const Header = ({ isDarkTheme, handleTheme }) => {

    return (
        <header>
            <h1>Quicktionary</h1>
            <div 
                className='theme'
                onClick={handleTheme}
                // style={{ justifyContent: darkTheme && 'flex-end'}}
                style={{ justifyContent: isDarkTheme && 'flex-end'}}
            >
                <div className='toggle'>
                    <div className='radiance'/>
                </div>
            </div>
        </header>
    )
}

export default Header