import * as React from "react";
import "@styles/personaldataprofile.css";

function PersonalDataProfile () {
    return ( 
        <section className="bg-light p-2">            
            <div className="table-responsive table-personaldataprofile" id="no-more-tables">
                <table className="table">
                <thead className="thead">
                        <tr>
                            <th className="clamp-responsive">Institucion</th>
                            <th className="clamp-responsive">Curso</th>
                            <th className="clamp-responsive">Correo electronico</th>
                        </tr>
                    </thead>
                    <tbody className="tbody-dataname">
                        <tr>
                            <td data-title="Institucion" className="clamp-responsive">Institucion</td>
                            <td data-title="Curso" className="clamp-responsive">4to A</td>
                            <td data-title="Correo electronico" className="clamp-responsive">poncho@interact.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            
        </section>

    )
}
export default PersonalDataProfile;