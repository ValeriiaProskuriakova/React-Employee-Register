import './search-panel.css';
import {Component} from 'react';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
      this.state = {val: ''};
  }

// Ф-ция кот. записивает value c инпута в state и передает ету value в ф-цию searchEmployee
  SearchPanel = (e) => {
    const val = e.target.value;
    this.setState({val});
    this.props.searchState(val);

  }

    render() {
      return(
        <input type="text"
                className="form-control search-input"
                placeholder="Find employee"
                value = {this.state.val}
                onChange = {this.SearchPanel}/>
        )
    }
}

export default SearchPanel;
