import './main.css';
import hello from '../../assets/hello.svg';
import Chart from '../charts/Chart';

const Main = () => {
  return (
    <main>
      <div className='main__container'>
        <div className='main__title'>
          <img src={hello} alt='hello' />
          <div className='main__greeting'>
            <h1>Hello anytest</h1>
            <p>admin dashboard</p>
          </div>
        </div>

        <div className='main__cards'>
          <div className='card'>
            <i className='far fa-user fa-2x text-lightblue'></i>
            <div className='card__inner'>
              <p className='text-primary-p'>Number of subscribers</p>
              <span className='font-bold text-title'>541</span>
            </div>
          </div>

          <div className='card'>
            <i className='far fa-calendar-alt fa-2x text-red'></i>
            <div className='card__inner'>
              <p className='text-primary-p'>time of watching</p>
              <span className='font-bold text-title'>1214</span>
            </div>
          </div>

          <div className='card'>
            <i className='fas fa-video fa-2x text-yellow'></i>
            <div className='card__inner'>
              <p className='text-primary-p'>Number of video</p>
              <span className='font-bold text-title'>350</span>
            </div>
          </div>

          <div className='card'>
            <i className='fa fa-thumbs-up fa-2x text-green'></i>
            <div className='card__inner'>
              <p className='text-primary-p'>Number of likes</p>
              <span className='font-bold text-title'>554</span>
            </div>
          </div>
        </div>

        <div className='charts'>
          <div className='charts__left'>
            <div className='charts__left__title'>
              <div>
                <h1>daily reports</h1>
                <p>cupertino</p>
              </div>
              <i class='fas fa-dollar-sign'></i>
            </div>
            <Chart />
          </div>

          <div className='charts__right'>
            <div className='charts__right__title'>
              <div>
                <h1>status reports</h1>
                <p>cupertino</p>
              </div>
              <i class='fas fa-dollar-sign'></i>
            </div>

            <div className='charts__right__cards'>
              <div className='card1'>
                <h1>Income</h1>
                <p>$34,300</p>
              </div>

              <div className='card2'>
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className='card3'>
                <h1>Users</h1>
                <p>650</p>
              </div>

              <div className='card4'>
                <h1>Orders</h1>
                <p>1541</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
