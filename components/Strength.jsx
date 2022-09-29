export const Strength = ({st}) => {
    const array1 = [1, 2, 3, 4, 5];

    return (
        <div className="str">
            {
                array1.fill(1, 0, st).map((i, d) => {
                       return ((i === 1 ) ?
                            <div key={d} className="color"></div>
                       :
                             <div key={d} className="color d"></div>
                       );   
                    })

            }
            <style jsx>{`
                .str{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                   
                   
                }
                .color {
                    width: 50px !important;
                    height: 10px !important;
                    background-color: #291507;
                    margin-right: 10px;
                    border-radius: 50px;
                }

                 .d {
                  
                    background-color: #E0E0E0;
                   
                }
            `}</style>
        </div>
    );
}