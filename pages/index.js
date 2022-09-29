import { CatBreed } from "../components/CatBreed";
import { CatFeature } from "../components/CatFeature";
import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout/Layout";
import { CatData } from "../utils/api";

function HomePage({breeds, listBreed}) {
    return (
        <div className="app">
            <Layout>
         
            <Hero listBreeds={breeds} />
           <CatBreed catbreed={breeds.slice(0,4)} />
           <CatFeature  />
           
          
        </Layout>
        <style jsx>{`
                .app{
                   width: 90%;
                   margin: 0 auto;
                   height: 100%;
                }
            `}</style>
        </div>
    );
  }
  
  export default HomePage


  export async function getServerSideProps(context) {

    const res = await CatData.get('/breeds');
    const data = await res.data;


    return {
        props: {
            breeds: data,
        }
    }
  }