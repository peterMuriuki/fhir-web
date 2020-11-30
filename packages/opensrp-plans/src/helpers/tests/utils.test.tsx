import { SORT_BY_EFFECTIVE_PERIOD_START_FIELD } from '../../constants';
import * as planDefinitionFixtures from '../../ducks/tests/fixtures';
import { InterventionType } from '../../ducks/index';
import * as fixtures from '../../ducks/tests/fixtures';
import { descendingOrderSort, isPlanDefinitionOfType } from '../utils';
import { PlanDefinition } from '../../plan-global-types';

describe('helpers/utils', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('sorts plans array in descending order', () => {
    const sortedPlans = descendingOrderSort(
      fixtures.eusmPlans as PlanDefinition[],
      SORT_BY_EFFECTIVE_PERIOD_START_FIELD
    );
    expect(sortedPlans).toEqual(fixtures.eusmPlans);
  });

  it('computes the interventionType of a planDefinition correctly', () => {
    const sampleFIPlan = planDefinitionFixtures.plans[0];
    let result = isPlanDefinitionOfType(sampleFIPlan, InterventionType.FI);
    expect(result).toBeTruthy();
    result = isPlanDefinitionOfType(sampleFIPlan, InterventionType.IRS);
    expect(result).toBeFalsy();
    const sampleIRSPlan = planDefinitionFixtures.plans[1];
    result = isPlanDefinitionOfType(sampleIRSPlan, InterventionType.FI);
    expect(result).toBeFalsy();
    result = isPlanDefinitionOfType(sampleIRSPlan, InterventionType.IRS);
    expect(result).toBeTruthy();
  });

  it('computes the interventionType of a planDefinition correctly with many interventionTypes', () => {
    const sampleFIPlan = planDefinitionFixtures.plans[0];
    let result = isPlanDefinitionOfType(sampleFIPlan, [InterventionType.FI, InterventionType.IRS]);
    expect(result).toBeTruthy();
    result = isPlanDefinitionOfType(sampleFIPlan, [
      InterventionType.IRS,
      InterventionType.DynamicFI,
    ]);
    expect(result).toBeFalsy();
    const sampleIRSPlan = planDefinitionFixtures.plans[1];
    result = isPlanDefinitionOfType(sampleIRSPlan, [
      InterventionType.FI,
      InterventionType.DynamicMDA,
    ]);
    expect(result).toBeFalsy();
    result = isPlanDefinitionOfType(sampleIRSPlan, InterventionType.IRS);
    expect(result).toBeTruthy();
  });
});
