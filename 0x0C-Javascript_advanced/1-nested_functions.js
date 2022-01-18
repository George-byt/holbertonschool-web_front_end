let globalVariable = 'Welcome';
const outer = () => {
    let course = 'Holberton';
    alert(globalVariable);

    const inner = () => {
        let exclamation = '!';
        alert(`${globalVariable}  ${course}`)
        
        const inception = () => alert(`${globalVariable} ${course} ${exclamation}`);
        inception();
    }
    inner();
}
outer();
