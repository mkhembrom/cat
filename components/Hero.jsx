import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';

export const Hero = ({listBreeds}) => {

    const [isPopup, setIsPopup] = useState(false);
    const [enterCat, setEnterCat] = useState('');

    const handleChange = (e) => {
        if(e.target.value !== '') {
            setIsPopup(true);
        }  else {
            setIsPopup(false);
        }

        setEnterCat(e.target.value); 
    }
    
    useEffect(()=>{
        const result = listBreeds.filter(i => i.name?.toLowerCase().includes(enterCat.toLowerCase())).length;
        if(result === 0) {
            setIsPopup(false);
        } 
    }, [isPopup, enterCat])
    
   


    // console.log(enterCat);

    return (
        <div>
           <div className="heroImage">
           <div className="box">
                <Image className="cat" src='/assets/CatwikiLogo.svg' alt="hero" style={{ fill: '#fff' }}  width="200px"
                        height="100px" />
                <h1 className="h1">Get to know more about your cat breed</h1>
                
               <div className="input-field">
                    <input type="text" placeholder="Enter Your Breed" value={enterCat} onChange={(e) => handleChange(e)} />
                    <div className="container" style={{ display: isPopup ? 'block' :'none' }}>
                    <div className="results">

                        {
                            listBreeds.filter(i => i.name?.toLowerCase().includes(enterCat.toLowerCase())).map(item => (
                                <li key={item.id}><Link href={`/cat-info/${item.id}`}><a>{item.name}</a></Link></li>

                            ))
                        }
                        
                    </div>
                    </div>
               <div className="icon">
                <FaSearch size="16px" color="#000" />
                </div>
               </div>
                
           </div>
           </div>
            <style jsx>{`
                .heroImage{
                    height: 500px;
                    width: 100%;
                    background: url('/assets/HeroImagemd.png') center center no-repeat;
                    border-radius: 40px 40px 0 0;
                    background-size: cover;

                }

                .box{
                    width: 300px;
                    height: 100%;
                    margin: auto 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                   

                  
                }
                .cat{
                        background-color: #fff;
                       color: #fff;
                       fill: #fff;

                      
                       
                    }

                    h1{
                    color: #fff;
                    font-size: 18px;
                    margin-bottom: 1rem;
                }

                .input-field{
                    position: relative;
                    width: 100%;
                }

                input[type="text"]{
                    padding: 12px 20px;
                    border-radius: 30px;
                    width: 100%;
                   
                    color: #000;
                    outline: none;
                }

                .container{
                    margin-top: 10px;
                    background-color: #fff;
                    border-radius: 30px;
                    width: 100%;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    align-items: center;
                    padding: 1rem;
                }

                .results{
                    padding: 0px 1rem 0px 0px;
                    height: 180px;
                    overflow: auto;
                }

                .results::-webkit-scrollbar{
                    width: 5px;
                    color: #F2F2F2;
                    padding: 1rem;
                }

             
                .results::-webkit-scrollbar-thumb {
                    background-color: #BDBDBD !important;
                    border-radius: 50px;
                    
                }


                .results > li{
                    padding: 8px 12px;
                    color: #000;
                    align-items: center;
                    list-style: none;
                    cursor: pointer;
                    background-color: #F5F5F5;
                    margin: 8px 0;
                    border-radius: 10px;
                }

                li a{
                    display: block;
                }

                .icon{
                    position: absolute;
                    right: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    

                }

                @media screen and (max-width: 992px) {
                   .heroImage{
                        height: 300px;
                        width: 100%;
                        object-fit: cover;
                   }

                   .box{
                    width: 200px;
                    margin: auto 40px;
                   }
                   .cat{
                   
                   }
                   h1{
                    font-size: 14px;
                   }
            }`}</style>
        </div>

    );
}