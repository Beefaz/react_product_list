import '../styles/rating.css';

const Rating = ({rating}) => {

  const createStars = (starAmount, rating) => {
    const fillRatios = Array(starAmount).fill(0).map(() => {
      if (rating >= 1) {
        rating--
        return 1;
      }
      if (rating > 0) return rating--;
      return 0;
    })

    return fillRatios.map((number, index) => {
      const fillRatioPercent = number.toFixed(2) * 100;
      return <div className='star'
                  style={{background: `linear-gradient(to right, rgb(255, 205, 0) ${fillRatioPercent}%, rgb(221, 221, 221) ${fillRatioPercent}%)`}}
                  key={index}></div>
    });
  }

  return (
    <div className="stars">
      {createStars(5, rating)}
    </div>
  );
}

export default Rating;
