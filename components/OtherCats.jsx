import SimpleReactLightbox from "simple-react-lightbox"; 
import { SRLWrapper } from "simple-react-lightbox";

export const OtherCats = ({cats}) => {
   
    return (
        <div className="app">
            <div className="head">
                Other photos
            </div>
            <SimpleReactLightbox>
                <SRLWrapper>
            <div className="cat-lists">
               {
                 cats.map((item) => (
                    <div key={item.id} >
                    <img className="cat-list-img" src={item.url} alt={item.name} />
                    </div>
                ))
            }
            </div>
            </SRLWrapper>
            </SimpleReactLightbox>
            <style jsx>{`
                .app{
                    width: 90%;
                    margin: 0 auto;
                }

                .head{
                    font-size: 30px;
                    font-weight: bold;
                    color: #291507;
                    margin: 1.5rem 0;
                }

                .cat-lists{
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: auto;
                  
                    grid-row-gap: 60px;
                    grid-column-gap: 30px;
                    margin-bottom: 100px;
                }

                .cat-list-img {
                    width: 220px;
                    height: 220px;
                    border-radius: 30px;
                    object-fit: cover;
                    cursor: pointer;
                }

                @media screen and (max-width: 992px) {
                    .cat-lists{
                        grid-template-columns: repeat(2, 1fr);
                        
                    }
                }


            `}</style>
        </div>
    );
}

