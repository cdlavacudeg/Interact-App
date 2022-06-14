import * as React from "react";
import "@styles/personaldataprofile.css";
import { useSelector } from "react-redux";

function PersonalDataProfile() {
    const user = useSelector((state) => state.user);
    return (
        <section className="bg-light p-2 table-section-width">
            <div
                className="table-responsive table-personaldataprofile"
                id="no-more-tables"
            >
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th className="clamp-responsive">Institucion</th>
                            <th className="clamp-responsive">Curso</th>
                            <th className="clamp-responsive">Correo</th>
                        </tr>
                    </thead>
                    <tbody className="tbody-dataname">
                        <tr>
                            <td
                                data-title="Institucion"
                                className="clamp-responsive"
                            >
                                Interact
                            </td>
                            <td data-title="Curso" className="clamp-responsive">
                                Cohorte 5
                            </td>
                            <td
                                data-title="Correo electronico"
                                className="clamp-responsive"
                            >
                                {user.user.email}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
export default PersonalDataProfile;
