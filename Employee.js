function Employee(props) {
    return(
        <div  className="container">
            <div className="row">
                {/**gambar */}
                <div className="col-3">
                    <img className="card-img-top" src={props.img} alt="gagal ya? kasian" style={{width: `12rem`}}></img>
                </div>

                 <div className="col-4">
                    <p className="text-start text-primary fst-italic">Name </p>
                    <p className="text-start fs-4">{props.name} </p>
                    
                    <p className="text-start text-primary fst-italic">Tgl lahir </p>
                    <p className="text-start fs-4">{props.tgl} </p>

                    <p className="text-start text-primary fst-italic">Gender </p>
                    <p className="text-start fs-4">{props.gender} </p>
                </div>

                <div className="col-4">
                    <p className="text-start text-primary fst-italic">Email </p>
                    <p className="text-start fs-4">{props.email} </p>

                    <p className="text-start text-primary fst-italic">Telepon </p>
                    <p className="text-start fs-4">{props.telepon} </p>

                    <p className="text-start text-primary fst-italic">Divisi </p>
                    <p className="text-start fs-4">{props.divisi} </p>
                </div>
            </div>
        </div>
    )
}
// props.children = memanggil komponen properti anak

export default Employee; // agar bisa dipanggil file lain