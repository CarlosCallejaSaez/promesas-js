const Promesa=new Promise((resolve, reject)=>{

    setTimeout(()=>{

       const sucess=true

       if(sucess) resolve("exito")
        else reject("error")

    },2000)

})

Promesa.then((result)=>console.log(result)).catch((err)=>console.log(err))  