function Stars (props){
  const {rating} = props

  const StarsRating = rating ? Math.round(rating.rate) : 0

  const CountStars = () => {
      const stars = []
  
      for (let i = 0; i < 5; i++) {
        const StarsColor = i < StarsRating ? 'olive' : 'gray'
  
        stars.push(
          <span
            key={i}
            style={{ color: StarsColor }}
          >
            &#9733;
          </span>
        )
      }
  
      return stars
    }
  
    return (
      <div className="stars">
       {CountStars()}
      </div>
    )
  }

export default Stars


  
  
