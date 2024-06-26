import React, {ReactEventHandler, useState} from 'react';
import InputRadio from '../ui/radio';

type TChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

const rating = [
  {value: 5, label: 'perfect'},
  {value: 4, label: 'good'},
  {value: 3, label: 'not bad'},
  {value: 2, label: 'badly'},
  {value: 1, label: 'terribly'},
];

export default function ReviewForm(): React.JSX.Element {
  const [review, setReview] = useState({rating: 0, review: ''});

  const handleChange: TChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
    setReview({...review, [name]: value});
  };

  const minTextLength: number = 50;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          rating.map(({value, label}) => (
            <InputRadio key={value} value={value} label={label} handleChange={handleChange} />
          ))
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">{minTextLength} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.rating === 0 || review.review.length < minTextLength}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
