import { FC } from 'react';
import './style.scss';

const Breadcrumbs: FC = () => {
  return (
    <div className="breadcrumbs">
      <span>
        <a href="#">Home</a>
        <span>
          <a href="#">Blog/News</a>
          <span className="breadcrumb__last">How to Write A Business Plan – Starting A Business beginning</span>
        </span>
      </span>
    </div>
  );
};

export { Breadcrumbs };
