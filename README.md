# Employees register built with Create React App
This single-page React application is built based on a Create React App template <br />
The app creates a database of employees, adds and deletes them, filters and selects the specific ones according to criteria <br />

Consists of 7 components: <br />
1) The main APP component which state contains the data array enlisting employees as its objects <br />
2) App-filter component which creates filter buttons based on the local data array and calls on a filterstate function which changes the state in the main App component. <br />
3) App-info component which returns from props the number of employees and the number of those who receive the raise. <br />
4) Add-form component which returns a form allowing to add a new employee. First, local state is changed via onValueChange function, then, onSubmit function calls on AddEmployee function in the main App component, which accepts name and salary from the local state, and further changes the data array. <br />
5) Employees-list component which returns the list of employees based on the EmployeesListItem component passed in. It receives the props from the main App component, such as the data array, onProps function and deleteEmployee function. onProps function accepts data-toggle attribute from EmployeesListItem component, and changes the increase and like values of the data in the main App component depending on the attribute value. deleteEmployee function deletes the object in the data array in the main App component. It is called by the trash button in the EmployeesListItem component. <br />
6) Employees-list-item component which returns one employee data and is passed on to the Employees-list component.
7) Search panel component which returns search field, changes the 'val' state both locally and in the main App component once the input value is changed, by calling on the searchState function. SearchEmployee function in the main App component is called on each time the App renders, and returns the data array, changed or unchanged, depending on the val argument passed. 

p.s. SCSS file is used as an example of SCSS usage in React
