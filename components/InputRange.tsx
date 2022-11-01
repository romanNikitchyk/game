import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, useState} from 'react'
import styled from "styled-components";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement>
type PropsType = DefaultInputPropsType & {
  onChangeRange: (value: number) => void
  width: string
  height: string
  min: number
  max: number
  step: number
  startValue: number
}

export const StyledSlider = styled.input<{ width: string, height: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  -webkit-appearance: none;
  border-radius: 25px;
  background: #FFD748;
  -webkit-transition: .2s;
`
const InputRange = (props: PropsType) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChangeRange(+e.currentTarget.value)

    console.log(e.currentTarget.value)
  }


  return (

    <StyledSlider
      type={'range'}
      width={props.width}
      height={props.height}
      min={props.min}
      max={props.max}
      step={props.step}
      value={props.startValue}
      onChange={onChangeCallback}
    />

  )
}

export default InputRange
