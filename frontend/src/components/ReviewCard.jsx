import { useState } from 'react';

function ReviewCard() {
const [name, setName] = useState('Sidharth');
const [date, setDate] = useState('05/06/2003');
const [rating, setRating] = useState(0);
const [text, setText] = useState('This is a Review item');

return (
  <div className="card">
    <div className="name-display"> 
        {name} 
        <span className = "date-display">
            {date}
        </span>
    </div>
    <div className="text-display">
        {text}
    </div>
  </div>
 );
}
export default ReviewCard;