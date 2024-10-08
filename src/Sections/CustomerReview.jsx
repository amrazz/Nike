
import ReviewCard from '../Components/ReviewCard'
import {reviews} from '../Constants/Index'
const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span> 
        Says?
      </h3>
      <p className="info-text m-auto mt-5 max-w-lg"
      >Hear genuine stories from our Satisfied customers about their
       execeptional experiences with us.</p>

       <div className="mt-24 flex justify-evenly items-center
        max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            />
          ))}
        </div>
    </section>
  )
}

export default CustomerReview
