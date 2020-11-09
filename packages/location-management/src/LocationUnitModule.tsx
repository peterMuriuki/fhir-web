import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { URL_ADD_LOCATIONS_UNIT, URL_LOCATIONS_UNIT } from './constants';

import LocationUnitView from './components/LocationUnitView';
import LocationUnitAdd from './components/LocationUnitAdd';

/**
 * Location Unit Module
 *
 * @returns {Element} - Location Unit Module
 */
export const LocationUnitModule: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={URL_LOCATIONS_UNIT + URL_ADD_LOCATIONS_UNIT + '/:id'}
          component={LocationUnitAdd}
        />
        <Route exact component={LocationUnitView} />
      </Switch>
    </BrowserRouter>
  );
};

export default LocationUnitModule;
