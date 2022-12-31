const dbConnect = require('./dbConnect');

const deleteData= async()=>{
    let data = await dbConnect();
    let result = await data.deleteMany({name :'M 02'})

    console.warn(result);

    if(result.acknowledged){
        console.log("Record Deleted");
    }
}

deleteData();