import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hideModal, updateCourse, updateUser } from '../../redux/actions';
import '@styles/addUsers.css'

const UpdateCourse = ({data}) => {
    const dispatch = useDispatch();
    const { item,listUsers, id, token} = data;
    const { courseName, image, description, teacher, students} = item;
    const listStudents = listUsers.filter(user=>user.role == 'student');
    const listTeachers = listUsers.filter(user=>user.role == 'teacher');

    const [course, setCourse] = useState({
        courseName,
        image,
        description,
        teacher:teacher._id,
        students:students.map(e=>e._id)
      });


    const cancel = (event) => {
        event.preventDefault();
        dispatch(hideModal()).catch((error) => console.log(error));
    };

    const _handleChange = ({ target: { name, value } }) => {
        setCourse((prev) => ({ ...prev, [name]: value }));
      };

    const _handleSelect = (event) => {
        const {value, checked, name} = event.target;
        setCourse((prev) => {
            let students = prev.students;
            if (checked && !students.includes(value)) {
                students.push(value);
            }
            if (!checked ) {
                students = students.filter(student => student !== value);
            }
            return {
                ...prev,
                [name]: students
        }
         });
      }

    const _handleSubmit = (e,data,token) => {
        e.preventDefault();
        dispatch(updateCourse( data, id, token))
            .then(() => dispatch(hideModal()))
            .then(() => console.log('actualizado'))
            .catch((error) => console.log(error));
    }



  return (
    <form
    className='addUsers'
    onSubmit={(e) => _handleSubmit(e,course,token)}>
        <input className='addUsers-input'
          name="courseName"
          onChange={_handleChange}
          value={course.courseName}
          placeholder="Nombre del curso"
          />
        <input className='addUsers-input'
          name="image"
          onChange={_handleChange}
          value={course.image}
          placeholder="Link imagen curso"
          />
        <input className='addUsers-input'
          name="description"
          onChange={_handleChange}
          value={course.description}
          placeholder="Descripción"
          />
        <div className="addUsers-iput">
            <label>Profesor</label>
            <select  className ="customInput" name="teacher" value={course.teacher} onChange={_handleChange}>
                {listTeachers.map((teacher,index)=>
                    <option value={teacher.uid} key={index}>{teacher.fullName}</option>
                )}
            </select>
        </div>
        <label>Estudiantes</label>
        <div  className='addUsers-input'  >

          {
            listStudents ?  (listStudents.map((student,index) => {

               return (
                <Fragment key={index}>
               <label htmlFor={student.uid} >
                    <input
                    type="checkbox"
                    id={student.uid}
                    name="students"
                    value={student.uid}
                    onChange={_handleSelect}
                    checked={course.students.includes(student.uid)}
                    />
                   { student.fullName}
                </label><br />
                </Fragment>
                )
            }
            )
            ) : ("")
        }

        </div>
        <button className='addUsers-button' type="submit">Actualizar</button>
        <button className='addUsers-button cancel-button' onClick={cancel}>
          Cancelar
        </button>
      </form>
    );
}

export default UpdateCourse
