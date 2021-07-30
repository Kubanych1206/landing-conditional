import './Kulp.css';
import React from 'react'
import pic from '../images/kulpun.png'

const Render2 =({data2})=>{
    return(
    <div>
        {data2.color && (
            <div className='card2' style={{background:data2.color}}>
                <hr/>
                <ul className='title'><li>{data2.title}</li></ul>
            </div>
        )}
        {data2.color===null &&(
            <div className='card2' style={{backgroundImage:`url(${data2.img})`}}>
                <hr />
                <ul className='title'><li >{data2.title}</li></ul>
            </div>
        )}
    </div>
    )}
export const RenderSecondCard=()=>{
    const data2 = [
        {
          title: 'Physical Health',
          color: '#22356F',
          id: 1
        },
        {
          title: 'Mental Health',
          color: '#0052C1',
          id: 2
        },
        {
          title: 'Nutrition',
          color: null,
          img: pic,
          id: 3
        },
        {
          title: 'Gymnastics',
          color: '#62D0DF',
          id: 4
        },
        {
          title: 'Crossfit',
          color: '#DEE1FF',
          id: 5
        },
        {
          title: 'Aerobics',
          color: '#8F00FF',
          id: 6
        },
      ]
    return(
        <div>
            <div style={styles2}>{data2.map((elem,id)=>{
                return <Render2 data2={elem} key={id} />
            })}</div>
        </div>
    )
}
const styles2={
    display:'flex',
    flexWrap:'wrap',
    textAlign:'center',
    marginBottom: '40px',
    
    
    
}