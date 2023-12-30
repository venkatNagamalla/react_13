import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onChange = () => {
    onChangeTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        onClick={onChange}
        type="button"
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
