export default function StaffTable({ staff=[] }) {
    return (
        <table className="table table-striped m-5 p-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Title</th>
                    <th scope="col">Salary</th>
                </tr>
            </thead>
            <tbody>
               {staff.map((nextStaff, index) => <tr key={nextStaff._id}>
                    <th scope="row">{index}</th>
                    <td>{nextStaff.name}</td>
                    <td>{nextStaff.title}</td>
                    <td>{nextStaff.salary} $</td>
                </tr>)}
            </tbody>
        </table>
    )
}