import { ParsedHierarchyNode } from '@opensrp/location-management/dist/types';
import { Setting } from '../../../ducks/settings';

export const serverSettings: Setting[] = [
  {
    key: 'pop_hepc',
    value: 'false',
    label: 'Hep C prevalence is intermediate (2% or higher) or high (5% or higher)',
    description:
      'The proportion of Hepatitis C virus (HCV) antibody seroprevalence in the general population is 2% or higher. ',
    uuid: '49500968-5836-4476-add7-d662c75157f0',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '16',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_anaemia_20',
    value: 'true',
    label: 'Anaemia prevalence 20% or lower',
    inheritedFrom: 'Test',
    description:
      'The proportion of pregnant women in the population with anaemia (haemoglobin level less than 11 g/dl) is 20% or lower.',
    uuid: '140126bd-04b5-4202-96c7-105271f26f7d',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '5',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_malaria',
    value: 'true',
    label: 'Malaria-endemic setting',
    description: 'This is a malaria-endemic setting.',
    uuid: '6559ced2-7ead-4a3c-b043-11555cecfa8d',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '12',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_syphilis',
    value: 'false',
    label: 'Syphilis prevalence 5% or higher',
    description: 'The prevalence of syphilis in pregnant women in the population is 5% or higher.',
    uuid: '2f49c0de-4145-4b12-bc17-fd779febefce',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '13',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_hiv_incidence',
    value: 'false',
    label: 'HIV incidence greater than 3 per 100 person-years in the absence of PrEP',
    description:
      'Women in the population have a substantial risk of HIV infection. Substantial risk of HIV infection is provisionally defined as HIV incidence greater than 3 per 100 person–years in the absence of pre-exposure prophylaxis (PrEP).',
    uuid: '118cabfc-9e72-4304-872a-9c06603f435b',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '10',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_low_calcium',
    value: 'true',
    label: 'Low dietary calcium intake',
    description:
      'Women in the population are likely to have low dietary calcium intake (less than 900 mg of calcium per day).',
    uuid: '2982cc53-5f0d-474b-bf62-4aa852f74d87',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '6',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_helminth',
    value: 'false',
    label: 'Soil-transmitted helminth infection prevalence 20% or higher',
    description:
      'The percentage of individuals in the general population infected with at least one species of soil-transmitted helminth is 20% or higher.',
    uuid: 'cf994bee-d6c4-4321-a030-c8bcc6d00a8d',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '9',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_vita',
    value: 'true',
    label: 'Vitamin A deficiency 5% or higher',
    description:
      'The prevalence of night blindness is 5% or higher in pregnant women or 5% or higher in children 24–59 months of age, or the proportion of pregnant women with a serum retinol level less than 0.7 mol/L is 20% or higher. ',
    uuid: '1d956211-46a7-404a-bb2d-964451e720ee',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '8',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_undernourish',
    value: 'false',
    label: 'Undernourished prevalence 20% or higher',
    description:
      'The proportion of women in the adult population (18 years or older), with a BMI less than 18.5, is 20% or higher.',
    uuid: '8a9e18d1-222a-4e63-8db1-c80b81c07847',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '3',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_hepb_screening',
    value: 'true',
    label: 'National Hep B ANC routine screening program established',
    description: 'There is a national Hepatitis B ANC routine screening program in place.',
    uuid: 'c4507430-708f-4824-ad38-41d94270e1a4',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '15',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_anaemia_40',
    value: 'false',
    label: 'Anaemia prevalence 40% or higher',
    description:
      'The proportion of pregnant women in the population with anaemia (haemoglobin level less than 11 g/dl) is 40% or higher.',
    uuid: 'e81c8bea-0419-4e2b-953a-ac5e30b9b747',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '4',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_hepb',
    value: 'false',
    label: 'Hep B prevalence is intermediate (2% or higher) or high (5% or higher)',
    description:
      'The proportion of Hepatitis B surface antigen (HBsAg) seroprevalance in the general population is 2% or higher.',
    uuid: 'b48e4a85-db6d-4a88-ae8e-808e16ab8f23',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '14',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_tb',
    value: 'false',
    label: 'TB prevalence 100/100,000 or higher',
    description:
      'The tuberculosis prevalence in the general population is 100 cases per 100,000 persons or greater.',
    uuid: 'e9cd499b-e56c-44d6-994a-d7eaf028f74d',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '7',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_hiv_prevalence',
    value: 'false',
    label: 'HIV prevalence 5% or higher',
    description: 'The HIV prevalence in pregnant women in the population is 5% or higher.',
    uuid: '97d2b7f8-eef6-4117-a439-a53480d62cf9',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '11',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
];

export const serverSettingsLevel1: Setting[] = [
  {
    key: 'pop_hepc',
    value: 'false',
    label: 'Hep C prevalence is intermediate (2% or higher) or high (5% or higher)',
    description:
      'The proportion of Hepatitis C virus (HCV) antibody seroprevalence in the general population is 2% or higher. ',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: '49500968-5836-4476-add7-d662c75157f0',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '16',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_anaemia_20',
    value: 'true',
    label: 'Anaemia prevalence 20% or lower',
    description:
      'The proportion of pregnant women in the population with anaemia (haemoglobin level less than 11 g/dl) is 20% or lower.',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: '140126bd-04b5-4202-96c7-105271f26f7d',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '5',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_malaria',
    value: 'true',
    label: 'Malaria-endemic setting',
    description: 'This is a malaria-endemic setting.',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: '6559ced2-7ead-4a3c-b043-11555cecfa8d',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '12',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_syphilis',
    value: 'false',
    label: 'Syphilis prevalence 5% or higher',
    description: 'The prevalence of syphilis in pregnant women in the population is 5% or higher.',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: '2f49c0de-4145-4b12-bc17-fd779febefce',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '13',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_hiv_incidence',
    value: 'false',
    label: 'HIV incidence greater than 3 per 100 person-years in the absence of PrEP',
    description:
      'Women in the population have a substantial risk of HIV infection. Substantial risk of HIV infection is provisionally defined as HIV incidence greater than 3 per 100 person–years in the absence of pre-exposure prophylaxis (PrEP).',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: '118cabfc-9e72-4304-872a-9c06603f435b',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '10',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_low_calcium',
    value: 'true',
    label: 'Low dietary calcium intake',
    description:
      'Women in the population are likely to have low dietary calcium intake (less than 900 mg of calcium per day).',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: '2982cc53-5f0d-474b-bf62-4aa852f74d87',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '6',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_helminth',
    value: 'false',
    label: 'Soil-transmitted helminth infection prevalence 20% or higher',
    description:
      'The percentage of individuals in the general population infected with at least one species of soil-transmitted helminth is 20% or higher.',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: 'cf994bee-d6c4-4321-a030-c8bcc6d00a8d',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '9',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_vita',
    value: 'true',
    label: 'Vitamin A deficiency 5% or higher',
    description:
      'The prevalence of night blindness is 5% or higher in pregnant women or 5% or higher in children 24–59 months of age, or the proportion of pregnant women with a serum retinol level less than 0.7 mol/L is 20% or higher. ',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: '1d956211-46a7-404a-bb2d-964451e720ee',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '8',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_undernourish',
    value: 'false',
    label: 'Undernourished prevalence 20% or higher',
    description:
      'The proportion of women in the adult population (18 years or older), with a BMI less than 18.5, is 20% or higher.',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: '8a9e18d1-222a-4e63-8db1-c80b81c07847',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '3',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_hepb_screening',
    value: 'true',
    label: 'National Hep B ANC routine screening program established',
    description: 'There is a national Hepatitis B ANC routine screening program in place.',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: 'c4507430-708f-4824-ad38-41d94270e1a4',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '15',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_anaemia_40',
    value: 'false',
    label: 'Anaemia prevalence 40% or higher',
    description:
      'The proportion of pregnant women in the population with anaemia (haemoglobin level less than 11 g/dl) is 40% or higher.',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: 'e81c8bea-0419-4e2b-953a-ac5e30b9b747',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '4',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_hepb',
    value: 'false',
    label: 'Hep B prevalence is intermediate (2% or higher) or high (5% or higher)',
    description:
      'The proportion of Hepatitis B surface antigen (HBsAg) seroprevalance in the general population is 2% or higher.',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: 'b48e4a85-db6d-4a88-ae8e-808e16ab8f23',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '14',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_tb',
    value: 'false',
    label: 'TB prevalence 100/100,000 or higher',
    description:
      'The tuberculosis prevalence in the general population is 100 cases per 100,000 persons or greater.',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: 'e9cd499b-e56c-44d6-994a-d7eaf028f74d',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '7',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
  {
    key: 'pop_hiv_prevalence',
    value: 'false',
    label: 'HIV prevalence 5% or higher',
    description: 'The HIV prevalence in pregnant women in the population is 5% or higher.',
    inheritedFrom: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    uuid: '97d2b7f8-eef6-4117-a439-a53480d62cf9',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '11',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
];

export const tree: ParsedHierarchyNode[] = [
  {
    id: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    label: 'Uganda',
    node: {
      locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
      name: 'Uganda',
      tags: ['Country'],
      attributes: { geographicLevel: 0 },
      voided: false,
    },
    children: [
      {
        id: '8340315f-48e4-4768-a1ce-414532b4c49b',
        label: 'Kampala',
        node: {
          locationId: '8340315f-48e4-4768-a1ce-414532b4c49b',
          name: 'Kampala',
          parentLocation: { locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9', voided: false },
          tags: ['District'],
          attributes: { geographicLevel: 1 },
          voided: false,
        },
        children: [
          {
            id: 'b1ef8a0b-275b-43fc-a580-1e21ceb34c78',
            label: 'KCCA',
            node: {
              locationId: 'b1ef8a0b-275b-43fc-a580-1e21ceb34c78',
              name: 'KCCA',
              parentLocation: { locationId: '8340315f-48e4-4768-a1ce-414532b4c49b', voided: false },
              tags: ['County'],
              attributes: { geographicLevel: 2 },
              voided: false,
            },
            children: [
              {
                id: '4e188e6d-2ffb-4b25-85f9-b9fbf5010d40',
                label: 'Central Division',
                node: {
                  locationId: '4e188e6d-2ffb-4b25-85f9-b9fbf5010d40',
                  name: 'Central Division',
                  parentLocation: {
                    locationId: 'b1ef8a0b-275b-43fc-a580-1e21ceb34c78',
                    voided: false,
                  },
                  tags: ['Sub-county'],
                  attributes: { geographicLevel: 3 },
                  voided: false,
                },
                children: [
                  {
                    id: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                    label: 'Bukesa Urban Health Centre',
                    node: {
                      locationId: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                      name: 'Bukesa Urban Health Centre',
                      parentLocation: {
                        locationId: '4e188e6d-2ffb-4b25-85f9-b9fbf5010d40',
                        voided: false,
                      },
                      tags: ['Health Facility'],
                      attributes: { geographicLevel: 4 },
                      voided: false,
                    },
                    children: [
                      {
                        id: '982eb3f3-b7e3-450f-a38e-d067f2345212',
                        label: 'Jambula Girls School',
                        node: {
                          locationId: '982eb3f3-b7e3-450f-a38e-d067f2345212',
                          name: 'Jambula Girls School',
                          parentLocation: {
                            locationId: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                            voided: false,
                          },
                          tags: ['School'],
                          attributes: { geographicLevel: 5 },
                          voided: false,
                        },
                        parent: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                        title: 'Jambula Girls School',
                        key: '982eb3f3-b7e3-450f-a38e-d067f2345212-02ebbc84-5e29-4cd5-9b79-c594058923e9',
                        children: [],
                      },
                      {
                        id: 'ee08a6e0-3f73-4c28-b186-64d5cd06f4ce',
                        label: 'Nsalo Secondary School',
                        node: {
                          locationId: 'ee08a6e0-3f73-4c28-b186-64d5cd06f4ce',
                          name: 'Nsalo Secondary School',
                          parentLocation: {
                            locationId: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                            voided: false,
                          },
                          tags: ['School'],
                          attributes: { geographicLevel: 5 },
                          voided: false,
                        },
                        parent: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                        title: 'Nsalo Secondary School',
                        key: 'ee08a6e0-3f73-4c28-b186-64d5cd06f4ce-02ebbc84-5e29-4cd5-9b79-c594058923e9',
                        children: [],
                      },
                    ],
                    parent: '4e188e6d-2ffb-4b25-85f9-b9fbf5010d40',
                    title: 'Bukesa Urban Health Centre',
                    key: '44de66fb-e6c6-4bae-92bb-386dfe626eba-02ebbc84-5e29-4cd5-9b79-c594058923e9',
                  },
                ],
                parent: 'b1ef8a0b-275b-43fc-a580-1e21ceb34c78',
                title: 'Central Division',
                key: '4e188e6d-2ffb-4b25-85f9-b9fbf5010d40-02ebbc84-5e29-4cd5-9b79-c594058923e9',
              },
            ],
            parent: '8340315f-48e4-4768-a1ce-414532b4c49b',
            title: 'KCCA',
            key: 'b1ef8a0b-275b-43fc-a580-1e21ceb34c78-02ebbc84-5e29-4cd5-9b79-c594058923e9',
          },
        ],
        parent: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
        title: 'Kampala',
        key: '8340315f-48e4-4768-a1ce-414532b4c49b-02ebbc84-5e29-4cd5-9b79-c594058923e9',
      },
    ],
    title: 'Uganda',
    key: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
  },
];

export const securityAuthenticateEndpoint = {
  jurisdictionIds: ['982eb3f3-b7e3-450f-a38e-d067f2345212', 'ee08a6e0-3f73-4c28-b186-64d5cd06f4ce'],
  locations: {
    locationsHierarchy: {
      map: {
        '02ebbc84-5e29-4cd5-9b79-c594058923e9': {
          id: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
          label: 'Uganda',
          node: {
            locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
            name: 'Uganda',
            tags: ['Country'],
            attributes: { geographicLevel: 0 },
            voided: false,
          },
          children: {
            '8340315f-48e4-4768-a1ce-414532b4c49b': {
              id: '8340315f-48e4-4768-a1ce-414532b4c49b',
              label: 'Kampala',
              node: {
                locationId: '8340315f-48e4-4768-a1ce-414532b4c49b',
                name: 'Kampala',
                parentLocation: {
                  locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
                  voided: false,
                },
                tags: ['District'],
                attributes: { geographicLevel: 1 },
                voided: false,
              },
              children: {
                'b1ef8a0b-275b-43fc-a580-1e21ceb34c78': {
                  id: 'b1ef8a0b-275b-43fc-a580-1e21ceb34c78',
                  label: 'KCCA',
                  node: {
                    locationId: 'b1ef8a0b-275b-43fc-a580-1e21ceb34c78',
                    name: 'KCCA',
                    parentLocation: {
                      locationId: '8340315f-48e4-4768-a1ce-414532b4c49b',
                      voided: false,
                    },
                    tags: ['County'],
                    attributes: { geographicLevel: 2 },
                    voided: false,
                  },
                  children: {
                    '4e188e6d-2ffb-4b25-85f9-b9fbf5010d40': {
                      id: '4e188e6d-2ffb-4b25-85f9-b9fbf5010d40',
                      label: 'Central Division',
                      node: {
                        locationId: '4e188e6d-2ffb-4b25-85f9-b9fbf5010d40',
                        name: 'Central Division',
                        parentLocation: {
                          locationId: 'b1ef8a0b-275b-43fc-a580-1e21ceb34c78',
                          voided: false,
                        },
                        tags: ['Sub-county'],
                        attributes: { geographicLevel: 3 },
                        voided: false,
                      },
                      children: {
                        '44de66fb-e6c6-4bae-92bb-386dfe626eba': {
                          id: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                          label: 'Bukesa Urban Health Centre',
                          node: {
                            locationId: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                            name: 'Bukesa Urban Health Centre',
                            parentLocation: {
                              locationId: '4e188e6d-2ffb-4b25-85f9-b9fbf5010d40',
                              voided: false,
                            },
                            tags: ['Health Facility'],
                            attributes: { geographicLevel: 4 },
                            voided: false,
                          },
                          children: {
                            '982eb3f3-b7e3-450f-a38e-d067f2345212': {
                              id: '982eb3f3-b7e3-450f-a38e-d067f2345212',
                              label: 'Jambula Girls School',
                              node: {
                                locationId: '982eb3f3-b7e3-450f-a38e-d067f2345212',
                                name: 'Jambula Girls School',
                                parentLocation: {
                                  locationId: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                                  voided: false,
                                },
                                tags: ['School'],
                                attributes: { geographicLevel: 5 },
                                voided: false,
                              },
                              parent: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                            },
                            'ee08a6e0-3f73-4c28-b186-64d5cd06f4ce': {
                              id: 'ee08a6e0-3f73-4c28-b186-64d5cd06f4ce',
                              label: 'Nsalo Secondary School',
                              node: {
                                locationId: 'ee08a6e0-3f73-4c28-b186-64d5cd06f4ce',
                                name: 'Nsalo Secondary School',
                                parentLocation: {
                                  locationId: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                                  voided: false,
                                },
                                tags: ['School'],
                                attributes: { geographicLevel: 5 },
                                voided: false,
                              },
                              parent: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
                            },
                          },
                          parent: '4e188e6d-2ffb-4b25-85f9-b9fbf5010d40',
                        },
                      },
                      parent: 'b1ef8a0b-275b-43fc-a580-1e21ceb34c78',
                    },
                  },
                  parent: '8340315f-48e4-4768-a1ce-414532b4c49b',
                },
              },
              parent: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
            },
          },
        },
      },
      parentChildren: {
        '4e188e6d-2ffb-4b25-85f9-b9fbf5010d40': ['44de66fb-e6c6-4bae-92bb-386dfe626eba'],
        '44de66fb-e6c6-4bae-92bb-386dfe626eba': [
          '982eb3f3-b7e3-450f-a38e-d067f2345212',
          'ee08a6e0-3f73-4c28-b186-64d5cd06f4ce',
        ],
        'b1ef8a0b-275b-43fc-a580-1e21ceb34c78': ['4e188e6d-2ffb-4b25-85f9-b9fbf5010d40'],
        '8340315f-48e4-4768-a1ce-414532b4c49b': ['b1ef8a0b-275b-43fc-a580-1e21ceb34c78'],
        '02ebbc84-5e29-4cd5-9b79-c594058923e9': ['8340315f-48e4-4768-a1ce-414532b4c49b'],
      },
    },
  },
  team: {
    identifier: 'e0d45cda-3d9a-4a52-8cd8-03984c68bffc',
    locations: [
      {
        display: 'Jambula Girls School',
        name: 'Jambula Girls School',
        uuid: '982eb3f3-b7e3-450f-a38e-d067f2345212',
      },
      {
        display: 'Nsalo Secondary School',
        name: 'Nsalo Secondary School',
        uuid: 'ee08a6e0-3f73-4c28-b186-64d5cd06f4ce',
      },
      {
        display: 'Bukesa Urban Health Centre',
        name: 'Bukesa Urban Health Centre',
        uuid: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
      },
    ],
    team: {
      teamName: 'Bukesa',
      organizationIds: [1.0],
      display: 'Bukesa',
      location: {
        display: 'Bukesa Urban Health Centre',
        name: 'Bukesa Urban Health Centre',
        uuid: '44de66fb-e6c6-4bae-92bb-386dfe626eba',
      },
      uuid: 'ca2d2f3f-573d-4b99-b060-b1ac1bad3104',
    },
    uuid: 'ba293d71-a535-45dd-ae66-3d1b44d0e2b9',
  },
  time: { time: '2021-05-25 22:52:05', timeZone: 'Etc/UTC' },
  user: {
    username: 'demo',
    roles: [
      'ROLE_realm-admin',
      'ROLE_OPENMRS',
      'ROLE_EDIT_KEYCLOAK_USERS',
      'ROLE_offline_access',
      'ROLE_VIEW_KEYCLOAK_USERS',
      'ROLE_uma_authorization',
      'ROLE_ALL_EVENTS',
      'ROLE_PLANS_FOR_USER',
    ],
    permissions: [
      'ROLE_realm-admin',
      'ROLE_OPENMRS',
      'ROLE_EDIT_KEYCLOAK_USERS',
      'ROLE_offline_access',
      'ROLE_VIEW_KEYCLOAK_USERS',
      'ROLE_uma_authorization',
      'ROLE_ALL_EVENTS',
      'ROLE_PLANS_FOR_USER',
    ],
    preferredName: 'ANC User',
    baseEntityId: 'ba293d71-a535-45dd-ae66-3d1b44d0e2b9',
    attributes: {},
    voided: false,
  },
  jurisdictions: ['Jambula Girls School', 'Nsalo Secondary School'],
};

export const locationHierarchyWithoutParent = [
  {
    id: 5,
    identifier: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    name: 'Test Location',
    parentId: '',
    voided: false,
    tags: 'Demo Test',
    geographicLevel: 0,
  },
];

export const locationHierarchyWithParent = [
  {
    id: 5,
    identifier: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    name: 'Test Location',
    parentId: 'b652b2f4-a95d-489b-9e28-4629746db96a',
    voided: false,
    tags: 'Demo Test',
    geographicLevel: 1,
  },
  {
    id: 14,
    identifier: 'b652b2f4-a95d-489b-9e28-4629746db96a',
    name: 'Test Nested Location',
    parentId: '',
    voided: false,
    tags: 'TEST14',
    geographicLevel: 0,
  },
];

export const serverSettingsSimilarToParent: Setting[] = [
  {
    key: 'pop_anaemia_20',
    value: 'false',
    label: 'Anaemia prevalence 20% or lower',
    inheritedFrom: 'Test',
    description:
      'The proportion of pregnant women in the population with anaemia (haemoglobin level less than 11 g/dl) is 20% or lower.',
    uuid: '140126bd-04b5-4202-96c7-105271f26f7d',
    settingsId: '2',
    settingIdentifier: 'population_characteristics',
    settingMetadataId: '5',
    locationId: '02ebbc84-5e29-4cd5-9b79-c594058923e9',
    v1Settings: false,
    resolveSettings: false,
    documentId: '0f851168-044d-4cff-9f81-689a567ade65',
    serverVersion: 2,
    type: 'Setting',
  },
];