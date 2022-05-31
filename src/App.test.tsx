import { it, describe, expect, test } from 'vitest'
import React from 'react'
import { render } from '@testing-library/react'
import App from './App.jsx'

describe("Test app", ()=>{
    test('<App/> Cargar el formulario y que todo este correcto', () => {
        const wrapper = render(<App />)
        wrapper.debug()
    })

})
