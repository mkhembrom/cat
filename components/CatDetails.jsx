import { Strength } from "./Strength";

const StrFun = ({text, str}) => {
    return (
        <div className="lrdiv">
            <div className="sub-lr">{text}:</div>
            <Strength st={str} />
            <style jsx>{`
            .lrdiv{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;   
                    margin-bottom: 1.2rem;                 
                   
                }

                .sub-lr{
                    font-weight: bold;
                    width: 150px;
                }
            `}</style>
        </div>
    );
} 

const CatDetails = ({info}) => {
    return (
        <div className="app">
           
                <div className="row">
                    <div className="left">
                        <div className="left-details">
                            <img className="catImage" src={info?.url} alt="cats" />
                            <div className="backd"></div>
                        </div>
                    </div>
                    <div className="right">
                        <p className="title">{info.breeds[0].name}</p>
                        <p className="desc">{info.breeds[0].description}</p>
                        <p className="sub" ><span className="subinfo">Temperament:</span> { info.breeds[0].temperament }</p>
                        <p className="sub"><span className="subinfo">Origin:</span>{info.breeds[0].origin} </p>
                        <p className="sub"><span className="subinfo">Life Span:</span>{info.breeds[0].life_span}</p>
                       
                        <StrFun text="Adaptability" str={info.breeds[0].adaptability} />
                        <StrFun text="Affection level" str={info.breeds[0].affection_level} />
                        <StrFun text="Child Friendly" str={info.breeds[0].child_friendly} />
                        <StrFun text="Grooming" str={info.breeds[0].grooming} />
                        <StrFun text="Intelligence" str={info.breeds[0].intelligence} />
                        <StrFun text="Health issues" str={info.breeds[0].health_issues} />
                        <StrFun text="Social needs" str={info.breeds[0].social_needs} />
                        <StrFun text="Stranger friendly" str={info.breeds[0].stranger_friendly} />
                       
                    </div>
                </div>
           
            <style jsx>{`

                .row{
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    padding: 0 100px;
                }

                .left{
                    flex: 1;
                   
                }

                .right{
                    flex: 1.5;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .left-details{
                        position: relative;

                }
                .catImage{
                    width: 300px;
                    height: 300px;
                    object-fit: cover;
                    border-radius: 20px;
                    
                }

                .backd{
                    z-index: -99;
                    position: absolute;
                    top: 50%;
                    left: -12px;
                    height: 250px !important;
                    width: 100px !important;
                    border-radius: 20px;
                    background-color: #DEC68B;
                    transform: translateY(-50%);
                }

                .title{
                    font-size: 40px;
                    font-weight: bold;
                    color: #291507;
                }

                .desc{
                    margin: 1.2rem 0;
                }

                .sub{
                   
                    margin-bottom: 1.2rem;
                }

                .subinfo{
                    font-weight: bold;
                    margin-right: 10px;
                }

                @media screen and (max-width: 992px) {
                    .row{
                        flex-direction: column;
                        padding: 0px 40px;
                    }

                    .catImage{
                        width: 100%;
                        height: 350px;
                    }

                    .title{
                        margin-top: 1rem;
                    }
                }

            `}</style>
        </div>
    );
}

export default CatDetails;