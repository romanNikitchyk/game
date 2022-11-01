import InputRange from "../components/InputRange";
import styled from "styled-components";
import {useAppSelector} from "../components/store";
import {
  changeMode,
  changeNumberOfItems,
  changeNumbersLeters,
  setCurrentValuesOfItems,
  setTheme
} from "../components/appReducer";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

export const Container = styled.div<{ url: string }>`
  background-image: url(${props=>props.url});
  width: 980px;
  height: 810px;
  display: flex;
  align-content: center;
  justify-content: center ;
`
const Border = styled.div`
  background: linear-gradient(to bottom left, #7F75F0, #101F32);
  position: absolute;
  width: 699px;
  height: 660px;
  left: 139px;
  top: 91px;

  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const WhiteList = styled.div`
  width: 665px;
  height: 623px;
  background-color: #FFFFFF;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Wraper = styled.div`
  width: 554px;
  height: 541px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const SettingsWraper = styled.div<{width:string,height:string}>`
  width:${props => props.width} ;
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  font-family: 'Helvetica';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: #423F45;

`
const SpanWraper = styled.div<{width: string}>`
  width: ${props => props.width};
display: flex;
  
  justify-content: space-between;
  
  

`
const ButtonWraper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const SettingsButton = styled.button`
  
  color: #423F45;
  background: #FFD748;
  font-family: 'Calibri';
  display: inline;
  font-size: 32px;
  width: 271px;
  height: 44.44px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  :disabled {
    opacity: 0.4;
  }
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`
const PlayButton = styled.button`
  transition: all 100ms ease-out;
  /* Эффект при наведении */
  &:hover {
    box-shadow: 0px 0px 5px 10px #38df7a;
  }
  &:active { 
    width: 130px; /* Уменьшаем ширину */
    height: 60px; /* Уменьшаем высоту */
    box-shadow:  hsl(8, 90%, 90%); /* Уменьшаем тень */
  }
  color: #fff;
  background: #38df7a;
  font-family: 'Helvetica';
  font-size: 32px;
  width: 260px;
  height: 60px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

const Settings = () => {
  const numberOfItems = useAppSelector((state)=>state.settings.numberOfItems)
  const numbersLeters = useAppSelector((state)=>state.settings.numbersOrLeters)
  const mode = useAppSelector((state)=>state.settings.mode)
  const themes = useAppSelector((state) => state.settings.themes)
  const characters = useAppSelector((state) => state.settings.characters)
  const currentValuesOfItems = useAppSelector((state) => state.settings.currentValuesOfItems)
console.log(currentValuesOfItems)
  const router = useRouter()
  const dispatch = useDispatch()
  const disabledFunc1=()=>{
    if(mode === 'up'){
      return true
  }}
    const disabledFunc2=()=> {
      if (mode === 'down') {
        return true
      }
    }

const changeHandlerNumberOfItems = (value:number) =>{
  dispatch(changeNumberOfItems(value))
}
const changeHandlerNumbersLeters = (value:number) => {
dispatch(changeNumbersLeters(value))
}
  const changeModeHandlerUP = () => {
    dispatch(changeMode('up'))
  }
const changeModeHandlerDown = () => {
  dispatch(changeMode('down'))

}

  const getRandomTheme = () => {
    let result = Math.floor(Math.random() * themes.length)
    return themes[result]
  }
  function getRandomNumber (min:number, max:number, values:number[]): number {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min

    if(values.includes(randomNumber)){
      return getRandomNumber(min, max, values)
    }
    return randomNumber
  }
  // make function for strings Array!!!
  const getRandomValueForPlayItem = (amount: number, value: number) => {
    let min=0
    let max=0
    let strings: string[] = []
    let numbers: number[] = []

    if(value === 0){
      for (let i = 0; i < amount; i++) {
        strings.push(characters.charAt(Math.floor(Math.random() * characters.length)));
      }
      return strings;
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
      numbers.push(getRandomNumber(min, max, numbers))
    }
    return numbers
  }


  const playRedirect = () =>{
    dispatch(setTheme(getRandomTheme()))
    dispatch(setCurrentValuesOfItems(getRandomValueForPlayItem(numberOfItems, numbersLeters)))
    router.push('/playground')
  }
  return (
    <Container url={'wallpaper.png'}>
      <Border>
        <WhiteList>
          <Wraper>
            <SettingsWraper width={'366px'} height={'112px'}>
              <Title>Кол-во Предметов</Title>
              <SpanWraper width={'333px'}><span>2</span><span>3</span><span>4</span><span>5</span></SpanWraper>
              <InputRange width={'366px'} height={'21px'} min={2} max={5} step={1} startValue={numberOfItems} onChangeRange={changeHandlerNumberOfItems}/>
            </SettingsWraper>
            <SettingsWraper width={'531px'} height={'114px'}>
              <Title>Значение</Title>
              <SpanWraper width={'531px'}><span>A</span><span>9</span><span>19</span><span>50</span><span>99</span><span>999</span></SpanWraper>
              <InputRange width={'545px'} height={'21px'} min={0} max={5} step={1} startValue={numbersLeters} onChangeRange={changeHandlerNumbersLeters} />
            </SettingsWraper>
            <ButtonWraper>
              <SettingsButton disabled={disabledFunc1()} onClick={changeModeHandlerUP}>По возрастанию</SettingsButton>
              <SettingsButton disabled={disabledFunc2()} onClick={changeModeHandlerDown}>По убыванию</SettingsButton>
            </ButtonWraper>
            <div>
              <PlayButton onClick={playRedirect}
              >Играть</PlayButton>
            </div>
          </Wraper>
        </WhiteList>

      </Border>
    </Container>
  )
}
export default Settings



