// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, updateTabId, isActive} = props
  const {displayText, tabId} = eachTab

  const activeTabButton = isActive ? 'active-btn' : 'not-active-btn'

  const onClickTabButton = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={activeTabButton}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
