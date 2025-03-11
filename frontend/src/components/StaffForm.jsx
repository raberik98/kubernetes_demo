export default function StaffForm({submitHandler}) {
    return (
        <form onSubmit={submitHandler} className="m-5 p-5 text-white">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" name="title" className="form-control" id="title"/>
            </div>
            <div className="mb-3">
                <label htmlFor="salary" className="form-label">Salary</label>
                <input type="number" name="salary" className="form-control" id="salary"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}