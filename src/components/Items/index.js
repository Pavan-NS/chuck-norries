import './index.css'

const Items = (props) => {
  const {itemDetails,onClickJoke} = props

  const onClicItem = () => {
    onClickJoke(itemDetails)
  }

  return(
    <li  className='li-container' onClick={onClicItem}>
        <h1 className='title'>{itemDetails}</h1>
        <p className='para'>Unlimited Jokes On {itemDetails}</p>
    </li>
  )
}


export default Items