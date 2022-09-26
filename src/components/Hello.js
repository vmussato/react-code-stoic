const name = 'Vinicius';

const displayMessage = () => {
    return "I need help";
}

function Hello() {
    return <h1>Hello World! {name} {30 + 10} {displayMessage()}</h1>
}

export default Hello;