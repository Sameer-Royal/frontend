export function DataRendering({data}){
    // console.log(data)

    return(
        <h1>Sameer royal</h1>
    )
}


export async function getStaticProps(){
    const p= await fetch('https://vercel.com/sameer-royal/backend/Cv5U5wvrLXQ9j52dxM29i3a3F2Hp')
    const data=await p.json();
    console.log("data is"+data);
    return(
       {
           props:{
               data
           },
           revalidate: 180,
       }
    )
}
export default DataRendering;   