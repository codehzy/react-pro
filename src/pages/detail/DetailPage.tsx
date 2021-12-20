import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  return (
    <div>路由路线详情页面，路线ID为: {props.match.params.touristRouteId}</div>
  );
};
