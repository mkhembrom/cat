import { Layout } from "../../components/Layout/Layout";
import { OtherCats } from "../../components/OtherCats";
import CatDetails from "../../components/CatDetails";
import { CatData } from "../../utils/api";


const CatInfo = ({cats, catDetail}) => {
   
    return (
        <div className="app">
            <Layout>
                <CatDetails info={catDetail} />
                <OtherCats cats={cats} />
            </Layout>
            <style jsx>{`
               .app{
                width: 90%;
                margin: 0 auto;
               }
            `}</style>
        </div>
    );
}

export default CatInfo;


export async function getServerSideProps(ctx) {
    
    const response = await CatData.get('/images/search?limit=8');
    const data = await response.data;

    const { id } = ctx.query;

    const res = await CatData.get(`/images/search?breed_ids=${id}`)
    const detail = await res.data;    
    return {
    props: {
        cats: data,
        catDetail: detail[0]
    }
    }
}