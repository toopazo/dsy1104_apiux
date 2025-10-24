import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from '../src/app/products/page'

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});


describe('Page', () => {
    it('Verificar que la img tienen URL asociada', () => {
        render(<HomePage />)

        const element = screen.getByTestId("client-card-1")

        expect(element).toBeInTheDocument()
        // console.log(element.innerHTML)
        // subelement = element.getElementsByTagName("img")[0].outerHTML
        const img_elem = element.getElementsByTagName("img")[0]
        // console.log(img_elem.outerHTML)
        // console.log(img_elem.src)
        // console.log(img_elem.className)

        expect(img_elem.src).toContain("https://picsum.photos/id/")

        // const div_elem = element.getElementsByTagName("div")[0]
        // console.log(div_elem.outerHTML)
        // console.log(div_elem.innerHTML)

        // const div_div_elem = div_elem.getElementsByTagName("div")[0]
        // console.log(div_div_elem.outerHTML)

        // const p_div_elem = div_elem.getElementsByTagName("p")[0]
        // console.log(p_div_elem.outerHTML)

        // const button_div_elem = div_elem.getElementsByTagName("button")[0]
        // console.log(button_div_elem.outerHTML)
        // console.log(button_div_elem.innerHTML)
    })
})
