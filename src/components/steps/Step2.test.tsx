import { it, describe, expect, test } from 'vitest'
import React from 'react'
import { render } from '@testing-library/react'
import Step2 from './Step1.jsx'

it('<App/> Cargar el formulario y que todo este correcto', () => {
    const wrapper = render(<Step2 />)
    wrapper.debug()
})