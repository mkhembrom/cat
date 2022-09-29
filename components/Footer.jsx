export const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="logo">
                    <img src="/assets/CatwikiLogo.svg" alt="footer-logo" />
                </div>
                <div className="copy-write">
                    <p className="footer-desc">&#169;    created by <span>Manjesh Hembrom</span> - devChallange.io 2022</p>
                </div>
            </div>
            <style jsx>{`
                .footer{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 50px 1rem 100px;
                    background-color: #000;
                    color: #fff;
                    border-radius: 40px 40px 0 0 ;
                }

                .logo, .copy-write {
                    align-items: center;
                }

                .footer-desc{
                    align-items: center;
                }

                .footer-desc span{
                    font-weight: bold;
                }

                @media screen and (max-width: 992px) {
                    .footer{
                        padding: 1rem 20px 1rem 20px;
                    }

                    .copy-write{
                        margin-left: 2rem;
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    );
}