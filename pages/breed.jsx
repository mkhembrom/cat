import Link from "next/link";
import { Layout } from "../components/Layout/Layout";
import { CatData } from "../utils/api";

const Breed = ({breed}) => {
    return (
        <div className="app">
            <Layout>
               
                    <p className="title">Top 10 most searched breeds</p>
                    <div className="cat_box">
                    {
                        breed.map((item, i) =>  { return (
                            <div className="boxs" key={item.id}>
                                <Link href={`/cat-info/${item.id}`}><a>
                                <img className="imgbg" src={item.image.url} alt="list" />
                                </a></Link>
                                <div className="coled">
                                    <div className="coled-row">
                                    <Link href={`/cat-info/${item.id}`}><a>
                                    <p className="texts">{item.name}</p>
                                    </a></Link>
                                    <p className="descs">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        );})
                    }

                    </div>
              
                
            </Layout>
            <style jsx>{`
                .app{
                    width: 90%;
                    margin: 0 auto;
                }

                .title{
                    font-size: 30px;
                    color: #291507;
                    font-weight: bold;
                }

                .boxs{
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-start;
                    height: 150px;
                    margin: 2rem 0;
                   
                }

                .imgbg{
                    width: 150px !important;
                    height: 150px !important;
                    object-fit: cover;
                    border-radius: 20px;
                    margin-right: 2.5em;
                }

                .coled{
                    display: flex;
                   
                    align-items: flex-start;
                    width: 900px;
                   
                }

                .texts{
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }

                .descs{
                    font-size: 16px;
                }

                .coled-row{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    margin-left: 1.5rem;
                }

                @media screen and (max-width: 992px) {
                    .cat_box{
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-template-rows: auto;
                    }

                    .boxs{
                        align-items: flex-start;
                        height: auto;
                        padding-bottom: 2rem;
                        border-bottom: 1px solid #cacaca;
                    }

                    .coled{
                        width: 100%;
                    }

                    .coled-row{
                        margin-left: 1.2rem;
                    }

                    .descs{
                        text-align: justify;
                        line-height: 18px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Breed;

export async function getServerSideProps(context) {

    const res = await CatData.get('/breeds');
    const data = await res.data;
    return {
        props: {
            breed: data.slice(0,10)
        }
    }
  }