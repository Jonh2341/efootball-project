import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Header() {
    return (
        <>
            <header className="header-box relative w-full h-[120px] bg-[#D9D9D9] flex items-center justify-between p-[20px] z-[3]">
                <h1 className="title">transfermarket</h1>
                <nav className="navigation w-[30%] flex justify-between">
                    <a href="" className="link-a text-black border-b">clubs page</a>
                    <a href="" className="link-a text-black border-b">players page</a>
                    <a href="" className="link-a text-black border-b">transfers page</a>
                </nav>
                <span className="league text-[#7F7F7F] text-[36px]">Bundesliga</span>
            </header>
        </>
    )
}

export default Header;