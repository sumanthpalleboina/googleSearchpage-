import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, takeInputByClick} = props
  const {suggestion} = suggestionItem
  const onClickedArrow = () => {
    takeInputByClick(suggestion)
  }
  return (
    <li className="suggestionItem">
      <h1 className="heading">{suggestion}</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onClickedArrow}
      />
    </li>
  )
}
export default SuggestionItem
