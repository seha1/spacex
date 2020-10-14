import React from 'react';
import img_calendar_1 from  'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png';
import img_calendar_2 from  'https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png';
import img_calendar_3 from  'https://images2.imgbox.com/3d/86/cnu0pan8_o.png';
import img_calendar_4 from  'https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png';
import './calendar.css';

const Calendar = () => {
    return(

        <section className="calendar">
		<div className="container">
			<ul className="calendar-list">
				<li className="calendar-item">
					<article className="launches">
						<div className="launches-image">
                            <img 
                            src = {img_calendar_1} 
                            alt=""
                            />
							<a className="launches-youtube" href="https://www.youtube.com/watch?v=dLQ2tZEH6G0"></a>
						</div>
						<div className="launches-content">
							<h2 className="launches-title">FalconSat</h2>
							<a href="./details.html" className="button launches-details">Подробнее</a>
						</div>
					</article>
				</li>

				<li className="calendar-item">
					<article className="launches">
						<div className="launches-image">
                            <img 
                            src= {img_calendar_2}
                            alt=""
                            />
						</div>
						<div className="launches-content">
							<h2 className="launches-title">
								<a href="https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html">
									DemoSat
								</a>
							</h2>
							<a href="./details.html" className="button launches-details">Подробнее</a>
						</div>
					</article>
				</li>

				<li className="calendar-item">
					<article className="launches">
						<div className="launches-image">
                            <img 
                            src= {img_calendar_3}
                            alt=""
                            />
						</div>
						<div className="launches-content">
							<h2 className="launches-title">
								<a href="http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary">
									Trailblazer
								</a>
							</h2>
							<a href="./details.html" className="button launches-details">Подробнее</a>
						</div>
					</article>
				</li>

				<li className="calendar-item">
					<article className="launches">
						<div className="launches-image">
                            <img 
                            src= {img_calendar_4}
                            alt=""
                            />
						</div>
						<div className="launches-content">
							<h2 className="launches-title">
								<a href="https://en.wikipedia.org/wiki/Ratsat">
									RatSat
								</a>
							</h2>
							<a href="./details.html" className="button launches-details">Подробнее</a>
						</div>
					</article>
				</li>

			</ul>
		</div>
	</section>

    )
}

export default Calendar;