import "./app-info.css";

const AppInfo = ({employees, increased, raised, morethan1000}) => {
    return (
        <div className="app-info">
            <h1>Employees register in the company Valeriia LTD</h1>
            <h2>Number of employees: {employees}</h2>
            <h2>Will receive a bonus: <i className="fas fa-star"></i> {increased}</h2>
            <h2>Will get a raise: <i className="fas fa-cookie"></i> {raised}</h2>
            <h2>Salary more than 1000$: {morethan1000}</h2>
        </div>
    )
}

export default AppInfo;
