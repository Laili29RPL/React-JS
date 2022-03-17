import { useState, useEffect} from "react"
/**
 * useState -> digunakan unutk mendefinisikan state
 * useEffect -> sebuah fungsi yang dijalankan (diekseskusi) ketika komponenya telah ditampilkan
 * 
 */
import { Modal } from "bootstrap"
/**
 * 
 * 
 */
export default function Student(){
    let[student,setStudent]= useState([])
    let [modal_student,setModalStudent]= useState(null)
    let [id, setId] = useState(0)
    let [name, setName] = useState("")
    let [birthdate, setBirthdate] = useState("")
    let [action, setAction] = useState("")
    let [editId, setEditId] = useState(true)
    let [deleteStudent, setDeletStudent] = useState(true)

    useEffect(() =>{
        //inisiasi data array student
        let arrayStudents = [
            { id:1, name: 'Laili',birthdate: '6 Juli 2004'},
            { id:2, name: 'Faiza',birthdate: '6 August 2005'},
        ]
        setStudent(arrayStudents)
        //inisiasi state modalStudent
        setModalStudent(new Modal(document.getElementById('modal_student')))
    } ,[])

    //function addStudent
    let addStudent = () =>{
        //open modal 
        modal_student.show()

        // reset isi dari setiap inputan
        setId(0)
        setName("")
        setBirthdate("")
        setAction("insert")
        setEditId(true)
        setDeletStudent(true)
    }

    // function saveStudent
    let saveStudent = () => {
        // close modal
        modal_student.hide()
        if (action == `insert`) {
            let newData ={
                id: id, name: name, birthdate: birthdate
            }

            // store array from students
            let temp = [...student]
            // add new data
            temp.push(newData)
            // store to student again
            setStudent(temp)

        } else if(action === `edit`){
            // store data students to temp
            let temp = [...student]
            // find index of selected data by ID
           let index = temp.findIndex(siswa => siswa.id === id)

           // update data founded index
           temp[index].name = name
           temp[index].birthdate = birthdate

           // restore to students from temp
           setStudent(temp)
        } else if(action == 'delete'){
            let temp = [...student]
            setDeletStudent(temp)
        }
        


    }

    let editStudent = siswa => {
        // open the modal 
        modal_student.show()
        setId(siswa.id)
        setName(siswa.name)
        setBirthdate(siswa.birhdate)
        setAction(`edit`)
        setEditId(false)
    }
    return(
        <div>
            <div className="card col-10">
                <div className="card-header bg-danger">
                    <h3 className="tect-white">List The Students</h3>
                </div>
                <div className="card-body">
                    {student.map(siswa => (
                        <div className="row" key={'key${siswa.id}'}>
                            <div className="col-2">
                                <small>ID</small>
                                <h5>{siswa.id}</h5>
                            </div>
                            <div className="col-4">
                                <small>Name</small>
                                <h5>{siswa.name}</h5>
                            </div>
                            <div className="col-4">
                                <small>birthdate</small>
                                <h5>{siswa.birthdate}</h5>
                            </div>
                            <div className="col-2">
                                <small>Action</small> <br/>
                                {/** edit button */}
                                <button className="btn btn-primary mx-1"
                                onClick={() => editStudent(siswa)}>
                                    Edit
                                </button>

                                {/** delete button */}
                                <button className="btn btn-danger mx-1"
                                onClick={() => deleteStudent(siswa)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}

                    <button className="btn btn-dark" 
                    onClick={() => addStudent()}>
                        Add
                    </button>

                    {/**modal component */}
                    <div className="modal" id="modal_student">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Form Student</h4>
                                </div>
                                <div className="modal-body">
                                    {/**input for ID,Name.birthdate */}
                                    ID
                                    <input type={'number'}
                                    className="form-control mb-2"
                                    value={id}
                                    onChange={ev => setId(ev.target.value)}
                                    readOnly={!editId}/>
                                    {/** saat add student, editId = true
                                     *oleh karena itu readOnly harus bernilai false

                                     saat add student, editId = false
                                     oleh karena itu readOnly harus bernilai true
                                     */}
                                    Name
                                    <input type={'text'}
                                    className="form-control mb-2"
                                    value={name}
                                    onChange={ev => setName(ev.target.value)}/>
                                    Birthdate
                                    <input type={'text'}
                                    className="form-control mb-2"
                                    value={birthdate}
                                    onChange={ev => setBirthdate(ev.target.value)}/>

                                    <button className="btn btn-success"
                                    onClick={() => saveStudent()}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/**end of modal */}
                </div>
            </div>
            
        </div>
    )
}