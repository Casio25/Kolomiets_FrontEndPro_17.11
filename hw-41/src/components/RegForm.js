import { useFormik } from "formik"
export function RegForm(){

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            number: ""
        },
        onSubmit: values =>{
            console.log("Form data", values)
        },
        validate: values => {
           let errors = {}  

           if(!values.name){
            errors.name = "Required"
           }

           if(!values.email){
            errors.email = "Required"
           } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
               errors.email = 'Invalid email address';
           }

           if(!values.number){
            errors.number = "Required"
           }

           return errors;
        }
    })

    console.log("Form values", formik.values)
    console.log("Form errors:", formik.errors)

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlform = "name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
                {formik.errors.name ? <div>{formik.errors.name}</div> : null}

                <label htmlform = "email">Email</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                <label htmlform = "number">Number</label>
                <input type="number" id="number" name="number" onChange={formik.handleChange} value={formik.values.number}/>
                {formik.errors.number ? <div>{formik.errors.number}</div> : null}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
