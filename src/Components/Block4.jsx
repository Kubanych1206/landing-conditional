import './Block4.css'

const Render =({data})=>{
    return(
        <div className='card' style={{background:data.color}}>
            <ul><li>{data.title}</li></ul>
        </div>
    )
}
 const RenderFirstCard=()=>{
const data=[{
    title: 'Weight Lifting',
    color: '#FFE2DE'
},{
    title: 'Running & Spinning',
    color: '#C4E769'
},{
    title: 'Pumping Iron',
    color: '#62D0DF'
},{
    title: 'Pumping Iron',
    color:'#0052C1'
},]
return(
    <div>
        <div style={styles}>{data.map((elem,index)=>{
            return <Render data={elem} key={index}/>
        })}</div>
    </div>
)
}
const styles={
    display:'flex',
    marginBottom: '70px'
  }

  export default RenderFirstCard;
  