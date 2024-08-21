import './index.css'

const BannerCardItem = props => {
  const {eachbanner} = props
  const {headerText, description, className} = eachbanner

  return (
    <div className={className}>
      <li className="eachlist">
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button>Show</button>
      </li>
    </div>
  )
}

export default BannerCardItem
