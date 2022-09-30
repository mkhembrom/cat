import Link from 'next/link';
import { motion } from "framer-motion"

import { Cat } from "./Cat";
import { BsArrowRight } from 'react-icons/bs';

export const CatBreed = ({catbreed}) => {
    return (
        <div className="wrapper">
            <p className="top">Most Search Breeds</p>
            <div className="bottom-bar"></div>
            <div className="box">
                <p className="title">66+ Breeds For you to discover</p>
                    
                <div className="btn">
                <Link href="/breed">
                        <a>SEE MORE</a>
                    </Link>
                    <div className="icon">
                    <BsArrowRight />
                    </div>
                </div>
                    
            </div>
            <div className="catList"
                 >
              
               { 
                
               catbreed?.map((breed) => {
                
                    return(
                        <motion.div initial={{ opacity: 0.5, y: 40, }}
                        whileInView={{ opacity: 1, y: 0 }} transition={{ type: 'twin', duration: 0.5 }}  key={breed.id}>
                        <Link href={`/cat-info/${breed.id}`}>
                            <a>
                            <Cat name={breed.name} img={breed.image.url} />
                            </a>
                        </Link>
                        </motion.div>
                    );
                }) } 
            </div>
            <style jsx>{`
                .wrapper{
                    background-color: #E3E1DC;
                    padding: 1rem 100px 40px 100px;
                    margin-bottom: 2rem;
                    border-radius: 0 0 40px 40px;
                }
                .top{
                    display: inline;
                    font-size: 16px;
                    color: #291507;
                    margin-top: 1rem;
                  
                }
                .bottom-bar{
                    width: 60px;
                    height: 5px;
                    margin-top: 5px;
                    border-radius: 30px;
                    background-color: #291507;
                    z-index: 99;
                }
                .box{
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    margin: 1.5rem 0;
                }

                .title{
                    font-size: 35px;
                    font-weight: 600;
                    width: 350px;
                    line-height: 1.2;
                    color: #291507;
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

                .catList{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                   
                }

                @media screen and (max-width: 992px) {
                    .wrapper{
                        padding: 1rem 40px 40px 40px;
                    }

                    .title{
                        font-size: 24px;
                    }

                    .btn{
                        font-size: 12px;
                        display: none;
                    }

                    .catList{
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: auto;
                        gap: 20px;
                        align-items: flex-start;
                    }
                }
            `}</style>
        </div>
    );
}

