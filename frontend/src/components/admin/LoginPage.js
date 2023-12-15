import styles from "./LoginPage.module.scss"
import {useState} from "react";
import {login} from "../../redux/users";
import {useDispatch, useSelector} from "react-redux";
import AdminView from "./AdminView";

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const actions = {login: login(dispatch)};
    const role = useSelector(state => state.users.role)

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.login(email, password, () => {
            console.log("error")
        })
    }

    return (
        <div className={styles.login}>
            {role !== "admin" && (
                <>
                    <h1>ADMIN</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <fieldset>
                            <label>Email</label>
                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                        </fieldset>
                        <fieldset>
                            <label>Password</label>
                            <input type="password" name="password" id="password"
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </fieldset>
                        <button type="submit">Login</button>
                    </form>
                </>
            )}
            {role === "admin" && (
                <AdminView role={role}/>
            )}
        </div>
    )
}

export default LoginPage;