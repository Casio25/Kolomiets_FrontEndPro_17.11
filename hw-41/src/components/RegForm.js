export function RegForm(){
    return(
        <div>
            <form>
                <label htmlForm = "name">Name</label>
                <input type="text" id="name" name="name"/>

                <label htmlForm = "email">Email</label>
                <input type="email" id="email" name="email"/>

                <label htmlForm = "password">Password</label>
                <input type="password" id="password" name="password"/>

                <button>Submit</button>
            </form>
        </div>
    )
}
