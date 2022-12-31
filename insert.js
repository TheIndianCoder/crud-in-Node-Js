const dbConnect = require('./dbConnect');

const insert = async()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {
                name:'M 03',
                brand:'micromax',
                price:'400',
                catagary:'tablet'
            },
            {
                name:'A 01',
                brand:'Apple',
                price:'500',
                catagary:'mobile'
            }
        ]
    );
    if(result.acknowledged){ 
        console.log("Data Inserted");
    }
    
}

insert();