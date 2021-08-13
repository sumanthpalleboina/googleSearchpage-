import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  getSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  takeInputByClick = suggestion => {
    this.setState({
      searchInput: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    console.log(searchInput)
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="google-section">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="google-logo"
            />
          </div>
          <div className="bottom-section">
            <div className="input-bar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input"
                onChange={this.getSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="suggestions-container">
              {searchResult.map(each => (
                <SuggestionItem
                  suggestionItem={each}
                  key={each.id}
                  takeInputByClick={this.takeInputByClick}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
