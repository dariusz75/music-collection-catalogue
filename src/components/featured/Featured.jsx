import './featured.scss';
import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbar } from 'react-circular-progressbar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return <div className="featured">
    <div className="top">
      <h1 className="title">Total Revenue</h1>
      <MoreVertIcon fontSize='small' />
    </div>
    <div className="bottom">
      <div className="featuredChart">
        <CircularProgressbar value={70} text="70%" strokeWidth={5} />
      </div>
      <p className='title'>Total sales made today</p>
      <p className='amount'>$420</p>
      <p className='desc'>
        Previous transaction processing. Last payments may not be included.
      </p>
      <div className="summary">
        <div className="item">
          <div className="item-title">Target</div>
          <div className="item-result positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
            <div className="result-amount">
              $12.4k
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">Last Week</div>
          <div className="item-result negative">
            <KeyboardArrowDownIcon fontSize="small" />
            <div className="result-amount">
              $12.4k
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">Last Month</div>
          <div className="item-result positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
            <div className="result-amount">
              $12.4k
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Featured;