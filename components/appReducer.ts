

type ThemeType = {
  background: string
  items: string[],
  color: string,
  playfield: string
}


type ValuesOfItems = [

]
type initialStateType = {
  numberOfItems:number
  numbersOrLeters: number
  mode:string
  themes:ThemeType[]
  currentTheme:ThemeType,
  characters: string,
  currentValuesOfItems:string[] | number[],
}
const initialState = {
  numberOfItems: 2,
  numbersOrLeters: 0,
  mode: '',
  themes: [
    {
      background: 'backGrounds/cookieBG.png',
      items: ['cookies/c1.png', 'cookies/c2.png', 'cookies/c3.png', 'cookies/c4.png'],
      color: '#D9D9D9',
      playfield: 'playGrounds/playgroundCookie.png'
    },
    {
      background: 'backGrounds/coinsBG.png',
      items: ['coins/coin1.png', 'coins/coin2.png', 'coins/coin3.png'],
      color: '#C09F9B',
      playfield: 'playGrounds/playgroundCoin.png'
    }
  ],
  currentTheme:{
    background: '',
    items: [''],
    color: '',
    playfield: ''},
  characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  currentValuesOfItems:[],
}
type AppReducerActionsType =
  | ReturnType<typeof changeNumberOfItems>
  | ReturnType<typeof changeNumbersLeters>
  | ReturnType<typeof changeMode>
  | ReturnType<typeof setTheme>
  | ReturnType<typeof setCurrentValuesOfItems>

export const appReducer = (state:initialStateType = initialState, action: AppReducerActionsType): initialStateType => {
  switch (action.type) {
    case 'CHANGE-NUMBER-OF-ITEMS':
      return {...state, numberOfItems:action.value}
    case 'CHANGE-NUMBERS-LETERS':
      return {...state, numbersOrLeters:action.value}
    case'CHANGE-MODE':
      return {...state, mode:action.value}
    case'SET-THEME':
      return {...state, currentTheme:action.currentTheme}
    case'SET-CURRENT-VALUES-OF-ITEMS':
      return {...state, currentValuesOfItems : action.currentValuesOfItems}
    default:
      return state
  }
}

export const changeNumberOfItems = (value: number) => ({type: 'CHANGE-NUMBER-OF-ITEMS', value} as const)
export const changeNumbersLeters = (value: number) => ({type: 'CHANGE-NUMBERS-LETERS', value} as const)
export const changeMode = (value: string) => ({type: 'CHANGE-MODE', value} as const)
export const setTheme = (currentTheme: ThemeType) => ({type: 'SET-THEME', currentTheme} as const)
export const setCurrentValuesOfItems = (currentValuesOfItems: string[] | number[]) => ({type: 'SET-CURRENT-VALUES-OF-ITEMS', currentValuesOfItems} as const)
