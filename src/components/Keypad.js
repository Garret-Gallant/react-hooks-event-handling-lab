// Code Keypad Component Here

const passPrinter = () => {
    console.log("entering password...")
}

function Keypad (){
    return (
        <div>
            <input onChange={passPrinter} type="password" />
        </div>
    )
}

export default Keypad;