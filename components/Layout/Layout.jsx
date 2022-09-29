import { Footer } from "../Footer";
import { Header } from "../Header";

export const Layout = ({children}) => {
    return (
        <div className="appbar">
            <div className="headerbar"><Header /></div>
            
                <main className="mainbar">
                    {children}
                </main>
            <div className="footerbar"><Footer /></div>

            <style jsx>{`
                .appbar{
                    
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }    

               

                
            `}</style>
        </div>
    );
}