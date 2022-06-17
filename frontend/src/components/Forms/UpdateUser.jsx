import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, updateUser } from '../../redux/actions';
import '@styles/addUsers.css'

const UpdateUser = ({data}) => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses);
    const { item, id, token,role } = data;
    const { fullName, email, password, gender, courses : materias} = item;
    console.log(data)

    const [user, setUser] = useState({
        fullName,
        gender,
        email,
        password,
        role,
        courses: materias
      });
      console.log(materias)

      const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const _handleChange = ({ target: { name, value } }) => {
        setUser((prev) => ({ ...prev, [name]: value }));
      };

    const _handleSelect = (event) => {
        const {value, checked, name} = event.target;
        setUser((prev) => {
            let materias = prev.courses;
            if (checked && !materias.includes(value)) {
                materias.push(value);
            }
            if (!checked ) {
                materias = materias.filter(materia => materia !== value);
            }
            return {
                ...prev,
                [name]: materias
        }
         });
      }

    const _handleSubmit = (e,data,token) => {
        e.preventDefault();
        dispatch(updateUser( data, id, token))
            .then(() => dispatch(hideModal()))
            .then(() => console.log('actualizado'))
            .catch((error) => console.log(error));
    }
    const isChecked = (materia) => {
        return materias.includes(materia);
    }

    console.log(isChecked('62a3a1d27b4a1f92f34627eb'))



  return (
    <form
    className='addUsers'
    onSubmit={(e) => _handleSubmit(e,user,token)}>
        <input className='addUsers-input'
          name="fullName"
          onChange={_handleChange}
          value={user.fullName}
          placeholder="Nombre"
          />
        <input className='addUsers-input'
          name="gender"
          onChange={_handleChange}
          value={user.gender}
          placeholder="Genero"
          />
        <input className='addUsers-input'
          name="email"
          onChange={_handleChange}
          value={user.email}
          placeholder="Email"
          />
        <input className='addUsers-input'
          name="password"
          onChange={_handleChange}
          value={user.password}
          placeholder="Nueva Contraseña"
          />
        <div  className='addUsers-input'  >
          {
            courses ?  (courses.map((course,index) => {
                console.log(course.uid)

               return (
                <Fragment key={course.uid}>
               <label htmlFor={course.courseName} >
                    <input
                    type="checkbox"
                    id={course.courseName}
                    name="courses"
                    value={course.uid}
                    onChange={_handleSelect}
                    checked={materias.includes(course.uid)}
                    />
                   { course.courseName}
                </label><br />
                </Fragment>
                )
            }
            )
            ) : ("")
        }

        </div>
        <button className='addUsers-button' type="submit"><strong>Actualizar</strong></button>
        <button className='addUsers-button cancel-button' onClick={cancel}>
         <strong>Cancelar</strong>
        </button>
      </form>
    );
}

export default UpdateUser
