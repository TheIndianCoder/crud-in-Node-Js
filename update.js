const dbConnect = require('./dbConnect');

const updateData = async () =>{
    let data = await dbConnect();
    let result =await data.updateMany(
        {name:'M 02'},{
            $set: {price:'300'}
        }
    );
    console.warn(result);
}

updateData();