/**
 * @author Alberto González
 *
 */
import { useQuery } from "react-query";
import UserService from "../../services/user/UserService";

export const Dashboard = () => {
    
    const { data: user, error, isLoading, isFetching } = useQuery(["current-user"], UserService.getCurrentUser);

    if (isLoading) {
        return (
            <div>
                <span className="spinner-border"></span> Loading current user...
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger">
                Error fetching user: {error.message}
            </div>
        );
    }

    return (
        <div>
            <h1 id={user.id}>Bienvenido! {user.name} {user.surnames} {isFetching && "(Fetching...)"}</h1>
            <h3>@{user.username} -- <strong>User status </strong><input type="checkbox" checked={user.enabled} readOnly></input></h3>
        </div>
    );
}