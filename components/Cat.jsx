
export const Cat = ({name, img}) => {
    return (
        <div className="catFamily">
          <img className="cat" src={img} alt={name} />
            <p className="breed-type">{name}</p>
            <style jsx>{`

                .catFamily{
                    cursor: pointer;

                }
                .cat{
                   border-radius: 20px !important;
                   width: 200px;
                   height: 200px;
                   object-fit: cover;
                }

                .breed-type{
                    font-size: 20px;
                    color: #291507;
                    margin-top: 1rem;
                }

               
            `}</style>
        </div>
    );
}