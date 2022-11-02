import React from 'react'
import { Stack } from './Pilas'

const stack = new Stack();
stack.infijoAPostfijo('a+b*b');
function Pilas() {
  return (
    <div>Pilas</div>
  )
}

export default Pilas