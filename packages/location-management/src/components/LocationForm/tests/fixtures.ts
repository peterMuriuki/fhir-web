import { FormInstances } from '../../../../dist/types';
import { LocationUnitGroup } from '../../../ducks/location-unit-groups';
import { LocationUnit, LocationUnitStatus } from '../../../ducks/location-units';
import { LocationFormFields, Setting } from '../utils';

/* eslint-disable @typescript-eslint/camelcase */
export const location1: LocationUnit = {
  type: 'Feature',
  id: 'b652b2f4-a95d-489b-9e28-4629746db96a',
  properties: {
    status: 'Active' as LocationUnitStatus,
    parentId: '',
    name: 'Kenya',
    geographicLevel: 0,
    version: 0,
    username: 'web-admin',
    name_en: 'Kenya',
  },
  serverVersion: 206,
  locationTags: [
    {
      id: 2,
      name: 'Sample 2',
    },
    {
      id: 3,
      name: 'Sample 3',
    },
  ],
};

export const location2 = ({
  type: 'Feature',
  id: '95310ca2-02df-47ba-80fc-bf31bfaa88d7',
  properties: {
    status: 'Active' as LocationUnitStatus,
    name: 'The Root Location',
    geographicLevel: 0,
    version: 0,
    username: 'web-admin',
    area_code: 'test 55',
    sample_key: 'test1',
    area_nick_name: 'test2',
    sample_key_two: 'test3',
    name_en: 'The Root Location',
  },
  serverVersion: 336,
  locationTags: [{ id: 7, name: 'CHW ' }],
  // parentId is missing
} as unknown) as LocationUnit;

export const generatedLocation1 = {
  id: 'b652b2f4-a95d-489b-9e28-4629746db96a',
  locationTags: [{ active: false, description: 'Sample description 2', id: 2, name: 'Sample 2' }],
  properties: {
    geographicLevel: 0,
    name: 'Kenya',
    name_en: 'Kenya',
    status: 'Active',
    username: 'web-admin',
    version: 0,
  },
  syncStatus: 'Synced',
  type: 'Feature',
};

export const generatedLocation2 = {
  properties: {
    geographicLevel: 0,
    username: 'web-admin',
    externalId: 'alien',
    name: 'Mars',
    name_en: 'The Root Location',
    status: 'InActive',
    serviceTypes: [{ name: 'School' }],
    'Sample Key': 'extraFields - Sample Key',
    version: 0,
    'Area Nick name': 'extraFields - Area Nick name',
    area_code: 'test 55',
    'Sample Key Two': 'extraFields - Sample Key Two',
    sample_key: 'test1',
    'Area code': 'extraFields - Area code',
    area_nick_name: 'test2',
    sample_key_two: 'test3',
  },
  id: '95310ca2-02df-47ba-80fc-bf31bfaa88d7',
  syncStatus: 'Synced',
  type: 'Feature',
  locationTags: [{ id: 7, active: true, name: 'CHW ', description: 'The chw tags ' }],
  geometry: [19.92919921875, 30.135626231134587],
};

export const expectedFormFields = {
  externalId: '',
  extraFields: [],
  instance: 'core',
  isJurisdiction: true,
  locationTags: [],
  name: '',
  serviceTypes: '',
  status: 'Active',
  type: '',
  username: '',
};

export const expectedFormFields1: LocationFormFields = {
  externalId: undefined,
  extraFields: [
    {
      geographicLevel: 0,
    },
    {
      version: 0,
    },
    {
      name_en: 'Kenya',
    },
  ],
  geometry: undefined,
  id: 'b652b2f4-a95d-489b-9e28-4629746db96a',
  instance: 'core' as FormInstances,
  isJurisdiction: true,
  locationTags: [2, 3],
  name: 'Kenya',
  parentId: '',
  serviceTypes: [],
  status: 'Active' as LocationUnitStatus,
  type: 'Feature',
  username: 'web-admin',
};

export const locationUnitGroups: LocationUnitGroup[] = [
  { id: 2, active: false, name: 'Sample 2', description: 'Sample description 2' },
  { id: 4, active: false, name: 'Option1', description: 'asdsad' },
  { id: 3, active: false, name: 'Sample 3', description: 'Sample description 3' },
  { id: 1, active: false, name: 'Sample 1', description: 'Sample description 1' },
  { id: 5, active: false, name: 'testing', description: 'testing 111' },
  { id: 6, active: true, name: 'Demo Test', description: 'The demo unit group' },
];

export const serviceTypeSetting1 = {
  key: 'school',
  label: 'School',
  description: 'This service type is a school',
  uuid: '8718e71e-af01-49aa-85dd-381d29eaf6de',
  settingsId: '34',
  settingIdentifier: 'service_types',
  settingMetadataId: '34',
  v1Settings: false,
  resolveSettings: false,
  documentId: 'ab85b445-baec-4f94-94fe-ec76de36f9a3',
  serverVersion: 58,
  type: 'Setting',
};
export const serviceTypesSetting2 = {
  key: 'hospital',
  label: 'Hospital',
  description: 'This service type is a Hospital',
  uuid: '7d3c2a2c-4b67-4f98-aed5-90d1b597801a',
  settingsId: '34',
  settingIdentifier: 'service_types',
  settingMetadataId: '35',
  v1Settings: false,
  resolveSettings: false,
  documentId: 'ab85b445-baec-4f94-94fe-ec76de36f9a3',
  serverVersion: 58,
  type: 'Setting',
};
export const serviceTypeSettings = [serviceTypeSetting1, serviceTypesSetting2] as Setting[];

export const fetchCalls1 = [
  [
    'https://opensrp-stage.smartregister.org/opensrp/rest/location/findByProperties?is_jurisdiction=true&return_geometry=false&properties_filter=status:Active,geographicLevel:0',
    {
      headers: {
        accept: 'application/json',
        authorization: 'Bearer sometoken',
        'content-type': 'application/json;charset=UTF-8',
      },
      method: 'GET',
    },
  ],
  [
    'https://opensrp-stage.smartregister.org/opensrp/rest/v2/settings/?serverVersion=0&identifier=service_types',
    {
      headers: {
        accept: 'application/json',
        authorization: 'Bearer sometoken',
        'content-type': 'application/json;charset=UTF-8',
      },
      method: 'GET',
    },
  ],
  [
    'https://opensrp-stage.smartregister.org/opensrp/rest/location-tag',
    {
      headers: {
        accept: 'application/json',
        authorization: 'Bearer sometoken',
        'content-type': 'application/json;charset=UTF-8',
      },
      method: 'GET',
    },
  ],
  [
    'https://opensrp-stage.smartregister.org/opensrp/rest/v2/settings/?serverVersion=0&identifier=location_settings',
    {
      headers: {
        accept: 'application/json',
        authorization: 'Bearer sometoken',
        'content-type': 'application/json;charset=UTF-8',
      },
      method: 'GET',
    },
  ],
];

export const createdLocation1 = {
  properties: {
    geographicLevel: 0,
    externalId: 'secret',
    parentId: '51',
    name: 'area51',
    name_en: 'area51',
    status: 'InActive',
    serviceTypes: [{ name: 'School' }],
  },
  id: '9b782015-8392-4847-b48c-50c11638656b',
  syncStatus: 'Synced',
  type: 'Feature',
  geometry: [19.92919921875, 30.135626231134587],
};

export const locationTags = [
  { id: 2, active: false, name: 'Sample 2', description: 'Sample description 2' },
  { id: 3, active: false, name: 'Sample 3', description: 'Sample description 3' },
  { id: 7, active: true, name: 'CHW ', description: 'The chw tags ' },
  { id: 5, active: false, name: 'testing', description: 'testing 111' },
  { id: 6, active: false, name: 'Demo Test', description: 'The demo unit group' },
  { id: 8, active: false, name: 'ANC', description: 'Describes tags for ANC locations' },
  { id: 9, active: true, name: 'CHW - PATH', description: "CHW's tied to path" },
  { id: 10, active: true, name: 'HF- CHW', description: 'Health facilities - chw' },
  {
    id: 4,
    active: false,
    name: 'Nairobi West CHW Team',
    description: 'The Nairobi west chw team location tag',
  },
  { id: 11, active: true, name: 'Madaraka CHW team', description: 'The madaraka CHW team' },
  { id: 1, active: false, name: 'Sample test edit 1', description: 'Sample description 1' },
  { id: 12, active: true, name: 'Test', description: '' },
];

export const locationSettings = [
  {
    key: 'sample_key',
    label: 'Sample Key',
    description: '',
    uuid: '4f1502f7-1a7f-499d-89bc-55e9a9cb3fd5',
    settingsId: '1',
    settingIdentifier: 'location_settings',
    settingMetadataId: '1',
    v1Settings: false,
    resolveSettings: false,
    documentId: 'b818622a-c3c5-49cb-aaa7-c0aab8c12ba5',
    serverVersion: 51,
    type: 'SettingConfiguration',
  },
  {
    key: 'area_nick_name',
    label: 'Area Nick name',
    description: '',
    uuid: '9905fcdd-f2b7-46db-b999-ea7a60d692d8',
    settingsId: '1',
    settingIdentifier: 'location_settings',
    settingMetadataId: '2',
    v1Settings: false,
    resolveSettings: false,
    documentId: 'b818622a-c3c5-49cb-aaa7-c0aab8c12ba5',
    serverVersion: 53,
    type: 'SettingConfiguration',
  },
  {
    key: 'sample_key_two',
    label: 'Sample Key Two',
    description: '',
    uuid: '27cdf577-91ce-43e6-ab04-4fd519c96085',
    settingsId: '1',
    settingIdentifier: 'location_settings',
    settingMetadataId: '3',
    v1Settings: false,
    resolveSettings: false,
    documentId: 'b818622a-c3c5-49cb-aaa7-c0aab8c12ba5',
    serverVersion: 55,
    type: 'SettingConfiguration',
  },
  {
    key: 'area_code',
    label: 'Area code',
    description: '',
    uuid: '17e91e4c-3eb2-4496-a035-3fd6823295bf',
    settingsId: '1',
    settingIdentifier: 'location_settings',
    settingMetadataId: '4',
    v1Settings: false,
    resolveSettings: false,
    documentId: 'b818622a-c3c5-49cb-aaa7-c0aab8c12ba5',
    serverVersion: 57,
    type: 'SettingConfiguration',
  },
];

export const rawOpenSRPHierarchy1 = {
  locationsHierarchy: {
    map: {
      '95310ca2-02df-47ba-80fc-bf31bfaa88d7': {
        id: '95310ca2-02df-47ba-80fc-bf31bfaa88d7',
        label: 'The Root Location',
        node: {
          locationId: '95310ca2-02df-47ba-80fc-bf31bfaa88d7',
          name: 'The Root Location',
          attributes: { geographicLevel: 0 },
          voided: false,
        },
        children: {
          '421fe9fe-e48f-4052-8491-24d1e548daee': {
            id: '421fe9fe-e48f-4052-8491-24d1e548daee',
            label: 'bbb',
            node: {
              locationId: '421fe9fe-e48f-4052-8491-24d1e548daee',
              name: 'bbb',
              parentLocation: { locationId: '95310ca2-02df-47ba-80fc-bf31bfaa88d7', voided: false },
              attributes: { geographicLevel: 1 },
              voided: false,
            },
            parent: '95310ca2-02df-47ba-80fc-bf31bfaa88d7',
          },
          '0836e054-30b1-4690-985c-b729aa5fcc53': {
            id: '0836e054-30b1-4690-985c-b729aa5fcc53',
            label: 'aa',
            node: {
              locationId: '0836e054-30b1-4690-985c-b729aa5fcc53',
              name: 'aa',
              parentLocation: { locationId: '95310ca2-02df-47ba-80fc-bf31bfaa88d7', voided: false },
              attributes: { geographicLevel: 1 },
              voided: false,
            },
            parent: '95310ca2-02df-47ba-80fc-bf31bfaa88d7',
          },
        },
      },
    },
    parentChildren: {
      '95310ca2-02df-47ba-80fc-bf31bfaa88d7': [
        '421fe9fe-e48f-4052-8491-24d1e548daee',
        '0836e054-30b1-4690-985c-b729aa5fcc53',
      ],
    },
  },
};