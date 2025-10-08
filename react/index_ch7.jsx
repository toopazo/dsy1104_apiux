function NavBar(props) {
    return <h1>Yo soy el navbar de {props.nombre}.</h1>;
}

function Header3({ title }) {
    return <h3>{title ? title : 'Default title'}</h3>;
}

function iterateLi(name) {
    return <li key={name}>{name}</li>;
}

function MainList() {
    const names = ['Jesus', 'Maria', 'Jose', 'Jeronimo'];

    return (
        <div>
            <Header3 title="Inside <MainList />." />
            <ul>
                {names}
                {/* {names.map((name) => (
                    <li>{name}</li>
                ))} */}
                {names.map((name) => (
                    <li key={name}>{name} </li>
                ))}
                {names.map(iterateLi)}
                
            </ul>
        </div>
    );
}

function Footer(props) {
    return <h1>Yo soy el footer de {props.nombre}.</h1>;
}

function HomePage() {
    const name = 'Juan';
    return (
        <div>
            <h1>Yo soy el homepage de {name}.</h1>
            <NavBar nombre={name} />
            <MainList />
            <Footer nombre={name} />
            <Footer nombre="Jeronimo"></Footer>
        </div>
    );
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);

// const app = document.getElementById('app');

// function Header(props) {
//     console.log(props);
//     const title = props.title;
//     {/* return <h1>{title}</h1>; */}
//     const names = ['Jesus', 'Maria', 'Jose'];
//     const ret = (
//     <>
//         <h1>{title}</h1>
//         <ul>
//             {names.map((name) => (
//                 <li key={name}>{name} </li>
//             ))}
//         </ul>
//     </>
//     );
//     return ret;
// }

// function LikeButton() {
//     const [likes, setLikes] = React.useState(0);
//     function handleClick() {
//         setLikes(likes + 1);
//     }
//     return <button onClick={handleClick}>Like({likes})</button>;
// }

// function HomePage() {
//     console.log('Inside HomePage');
//     return (
//     <div>
//         {/* This is a comment in JSX */}
//         {/* Nesting the Header component */}
//         <Header title="React is pretty weird but works" />
//         <LikeButton />
//         <Header title="React is pretty awesome but kinda works" />
//     </div>
//     );
// }
// const root = ReactDOM.createRoot(app);
// root.render(<HomePage />);