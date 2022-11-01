import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useAppSelector} from "../components/store";
import {string} from "prop-types";

const PGContainer = styled.div<{ url: string }>`
  background-image: url(${props => props.url});
  width: 980px;
  height: 810px;
  display: flex;
  justify-content: space-between;
  position: relative;
`
const PlayItemsWraper = styled.div`
  width: 70%;
  height: 500px;
  left: 150px;
  top: 50px;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & :nth-child(even) {
    margin-left: 40px;
    margin-right: 40px;
  }

  & :nth-child(6n) {
    margin-right: 0;
  }

  & :nth-child(n+4) {
    margin-top: -90px;
  }
`
const PlayItem = styled.div<{ url: string }>`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  color: aliceblue;
  -webkit-text-stroke: 3px #242546;
`
const PlaceForItem = styled.div`
  background-image: url(${'ellipse.png'});
  width: 131px;
  height: 131px;
`
const PlayField = styled.div<{ url: string }>`
  background-image: url(${props => props.url});
  background-color: #D9D9D9;
  background-repeat: no-repeat;
  position: absolute;
  width: 890px;
  height: 223px;
  margin: 557px 45px 20px 45px;
  border-radius: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const ResultField = styled.div`
  position: absolute;
  width: 890px;
  height: 223px;
  margin: 557px 45px 20px 45px;
  border-radius: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
/*type ItemsType = [
  background:string[]
  value: string[]
]*/

const Playground = () => {
  const [items, setItems] = useState<any>([])
  const [results, setResults] = useState<any>([])
  useEffect(()=>{
    let acc = []
    for( let i = 0; i < numberOfItems; i++){
      acc.push({background:currentTheme.items[Math.floor(Math.random() * (currentTheme.items.length))],
        value:currentValuesOfItems[i]
      })
    }
    setItems(acc)
  },[])
  const numberOfItems = useAppSelector((state) => state.settings.numberOfItems)
  const currentTheme = useAppSelector((state) => state.settings.currentTheme)
  const currentValuesOfItems = useAppSelector((state) => state.settings.currentValuesOfItems)




  /*const getRandomInteger = (amount: number, value: number) => {
    let min=0
    let max=0
    let values = []
    if(value === 0){
      let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      for (let i = 0; i < amount; i++) {
        values.push(characters.charAt(Math.floor(Math.random() * characters.length)));
      }
      return values;
    }
    if(value===1){
      min=1
      max=9
    } else if(value===2){
      min=10
      max=19
    } else if(value===3){
      min=20
      max=50
    } else if(value===4){
      min=51
      max=99
    } else if(value===5){
      min=100
      max=999
    }
    for(let i = 0; i < amount; i++){
      values.push(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    return values
  }*/

  return (
    <PGContainer url={currentTheme.background}>
      <PlayItemsWraper>
        {
          items.map((el, i)=> <PlayItem
            onClick={()=>{setResults((state:any)=>([...state, el]));
              setItems((state:any)=> state.filter((e)=>e.value!== el.value))} }
            key={i}
            url={el.background}>{el.value}</PlayItem>)
      }
      </PlayItemsWraper>
      <PlayField url={currentTheme.playfield}>
        {items.map((el,i)=> <PlaceForItem key={i}/>)}
      </PlayField>
      <ResultField>
        {results.map((el,i)=> <PlayItem key={i} url={el.background}>{el.value}</PlayItem>)}
      </ResultField>
    </PGContainer>
  );
};

export default Playground;