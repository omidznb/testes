// single page

//1.what view show to user based on route ?
// dashboard ,products posts


function router() {
    const routes =[ // related to the href that we had written in HTML source
        {path:"/",view:()=> console.log('dashboard paged')},
        {path:"/product",view:()=> console.log('products paged')},
        {path:"/post",view:()=> console.log('post paged')},
    ]
    const potentialRoutes = routes.map((item )=>{
        return{
            route :item,
            isMatch : location.pathname ===item.path ,// for knowing which is matched with thats related or not 
           
}})
   let match =potentialRoutes.find((route) => route.isMatch);
   
   
   
   if(!match){
    match ={
        route :{path:"/not found",view:()=> console.log('not found')},
        isMatch:true
     
    }
   }
}


document.addEventListener('DOMContentLoaded',()=>{
    router()
})

