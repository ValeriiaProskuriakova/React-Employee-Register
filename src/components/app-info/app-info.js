import "./app-info.css";

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Employees register in the company N</h1>
            <h2>Number of employees: {employees}</h2>
            <h2>Will receive a bonus: {increased}</h2>
        </div>
    )
}

export default AppInfo;
