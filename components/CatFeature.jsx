import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export const CatFeature = () => {
    return (
        <div className="row">
            <div className="left">
                <div className="left-details">
                    <p className="title">Why should you have a cat?</p>
                    <p className="desc">Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
                    <div className="btn">
                    <Link href="https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=Owning%20a%20cat%20can%20bring,be%20an%20extremely%20rewarding%20relationship."><a target="_blank">SEE MORE</a></Link>
                    <div className="icon">
                    <BsArrowRight />
                    </div>
                </div>
                </div>
            </div>
            <div className="right">
                <div className="right-details">
                    <img className="imgs" src="/assets/image_2.png" />
                    <img className="imgs" src="/assets/image 3.png" />
                    <img className="imgs" src="/assets/image 1.png" />
                </div>
            </div>
            <style jsx>{`
                .row{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 100px;
                    
                }

                .left,.right{
                    flex: 1;
                }

                .left{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                }

                .left-details{
                    width: 350px;
                }
                .title{
                    font-size: 35px;
                    font-weight: 600;
                   
                    line-height: 1.2;
                    color: #291507;
                }

                .desc{
                    margin: 2rem 0;
                    text-align: justify;
                }

                .btn{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .btn a{
                    font-size: 0.9rem;
                    margin-right: 10px;
                    font-weight: bold;
                    color: #291507;
                }

                .btn .icon{
                    font-weight: bold;
                    color: #291507;
                }

                .right{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .right-details{
                    display: grid;
                    grid-template-columns: 2;
                    grid-template-rows: 4;
                    grid-gap: 20px;
                    padding: 2em;
                }

                .imgs:nth-child(1){
                    grid-column: 1 / 2;
                   
                }
                .imgs:nth-child(2){
                    grid-column: 2 / 3;
                    grid-row: 1/3;
                    width: 190px;
                }
                .imgs:nth-child(3){
                    grid-column: 1 / 2;
                    grid-row: 2/3;
                    width: 150px;
                    margin-left: auto;
                    
                    
                }

                @media screen and (max-width: 992px) {
                    .row{
                        padding: 1rem 0px;
                        flex-direction: column;
                    }

                    .left-details{
                    width: 100%;
                    }

                    .right-details{
                        padding: 80px 0px;
                    }
                }
            `}</style>
        </div>
    );
}