import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from '../src/app/about/page'

describe('Page', () => {
    it('renders a heading', () => {
        render(<HomePage />)

        const heading = screen.getByRole('heading', { level: 1 })

        expect(heading).toBeInTheDocument()
    })
})

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
    it('renders a specific ID', () => {
        render(<HomePage />)

        const heading = screen.getByTestId("about-page")

        expect(heading).toBeInTheDocument()
    })
})
