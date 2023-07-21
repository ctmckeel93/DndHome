
const Form = props => {

    const {inputs} = props;

    return (
        <>
            <form>
                {
                    inputs.map((inp, i) => (
                        <input type={inp.type}></input>
                    ))
                }
            </form>
        </>
    )
}

export default Form;