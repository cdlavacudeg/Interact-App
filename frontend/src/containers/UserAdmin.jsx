
import  UserAdminTable from "../components/AdminTabs"
import "@styles/useradmintable.css";

const UserAdmin = () => {
    return (
        <div className="user-section">
            <h1 className="listUser_title">Panel de Administracion </h1>
            <section>
                <UserAdminTable />
            </section>
        </div>
    );
};

export default UserAdmin;
