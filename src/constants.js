
const MOC = {
  open: null,
  close: 'ADD MOC',
  fields:[
    {
      name: 'selectMOC',
      type: 'dropdown',
      label: 'Select MOC',
      options: [
        {
          value: 'stainlessSteel',
          label: 'Stainless Steel'
        },
        {
          value: 'glass',
          label: 'Glass'
        },
        {
          value: 'teflon',
          label: 'Teflon'
        },
        {
          value: 'plastic',
          label: 'Plastic'
        }
      ]
    },
    {
      name:'recovery',
      label: ' Recovery (%)'
    }
  ]
}

export default {
  initialValues: {
    analytical_method_id: '',
    target_residue_type: '',
    reason: '',
  },
  sections: [
    {
      fields: [
        {
          name: 'analytical_method_id',
          label: 'Analytical Method ID',
          fluid: true,
        },
        {
          name: 'target_residue_type',
          type: 'dropdown',
          label: 'Target Residue Type',
          options: [
            {
              value: 'api',
              label: 'API'
            },
            {
              value: 'cleaning-agent',
              label: 'Cleaning Agent'
            },
            {
              value: 'bioburden',
              label: 'Bioburden'
            },
            {
              value: 'endotoxin',
              label: 'Endotoxin'
            }
          ]
        }
      ]
    },
    {
      fields: [
        {
          name: 'reason',
          label: 'Reason',
          fluid: true
        }
      ]
    }
  ],
  customSection: {
    api: {
      fields: [
        {
          name: 'api_lod',
          label: 'LOD (in ppm)',
          inputType: 'number',
          min: '0',
        },
        {
          name: 'api_loq',
          label: 'LOQ (in ppm)',
          inputType: 'number',
          min: '0',
        }
      ],
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'api_swab_method',
              label: 'Method Used',
              fluid: true
            },
            {
              name: 'api_swab_solvent_name',
              label: 'Solvent Name'
            },
            {
              name: 'api_swab_solvent_quality',
              label: 'Solvent Quality',
              inputType: 'number',
              min: '0',
            },
            {
              name: 'api_swab_default_recovery',
              label: 'Default Recovery',
              inputType: 'number',
              min: '0',
              fluid: true
            }
          ],
          MOCButton: MOC,
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'api_rinse_method',
              label: 'Method Used',
              fluid: true
            },
            {
              name: 'api_rinse_default_recovery',
              label: 'Default Recovery (%)',
              inputType: 'number',
              min: '0',
              fluid: true,
            }
          ],
          MOCButton: MOC,
        }
      ]
    },
    'cleaning-agent': {
      fields: [
        {
          name: 'cleaning_agent_lod',
          label: 'LOD (in ppm)',
          inputType: 'number',
          min: '0',
        },
        {
          name: 'cleaning_agent_loq',
          label: 'LOQ (in ppm)',
          inputType: 'number',
          min: '0',
        }
      ],
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'cleaning_agent_swab_method',
              label: 'Method Used',
              fluid: true
            },
            {
              name: 'cleaning_agent_swab_solvent_name',
              label: 'Solvent Name'
            },
            {
              name: 'cleaning_agent_swab_solvent_quality',
              label: 'Solvent Quality',
              inputType: 'number',
              min: '0',
            },
            {
              name: 'cleaning_agent_swab_default_recovery',
              label: 'Default Recovery',
              inputType: 'number',
              min: '0',
              fluid: true
            }
          ],
          MOCButton: MOC,
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'cleaning_agent_rinse_method',
              label: 'Method Used',
              fluid: true,
            },
            {
              name: 'cleaning_agent_rinse_default_recovery',
              label: 'Default Recovery',
              inputType: 'number',
              min: '0',
              fluid: true,
            }
          ],
          MOCButton: MOC,
        }
      ]
    },
    bioburden: {
      fields: [
        {
          name: 'bioburden_method',
          label: 'Method Used',
          fluid: true
        },
        {
          name: 'bioburden_limit',
          label: 'Define TNTC and TFTC Limits',
          fluid: true,
          options: [
            {
              label: 'Yes',
              id: 'yes'
            },
            {
              label: 'No',
              id: 'no'
            }
          ],
          type: 'radio'
        }
      ],
      radioSection: {
        fields: [
          {
            name: 'bioburden_tntc',
            label: 'TNTC Limit (in CFU)',
            inputType: 'number',
            min: '0',
          },
          {
            name: 'bioburden_tftc',
            label: 'TFTC Limit (in CFU)',
            inputType: 'number',
            min: '0',
          }
        ]
      },
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'bioburden_swab_use_recovery',
              label: 'Use Recovery for Swap?',
              options: [
                { 
                  label: 'Yes',
                  id: 'yes'
                },
                {
                  label: 'No',
                  id: 'no'
                }
              ],
              type: 'radio'
            },
            {
              name: 'bioburden_swab_recovery_percentage',
              label: 'Default Recovery (%)'
            }
          ],
          MOCButton: MOC,
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'bioburden_rinse_solvent_volume',
              label: 'Solvent Volume',
              inputType: 'number',
              min: '0',
              fluid: true
            },
            {
              name: 'bioburden_rinse_use_recovery',
              label: 'Use Recovery for Swap?',
              options: [
                {
                  label: 'Yes',
                  id: 'yes'
                },
                {
                  label: 'No',
                  id: 'no'
                }
              ],
              type: 'radio'
            },
            {
              name: 'bioburden_rinse_recovery_percentage',
              label: 'Default Recovery (%)',
              inputType: 'number',
              min: '0',
            }
          ],
          MOCButton: MOC,
        }
      ]
    },
    endotoxin: {
      fields: [
        {
          name: 'endotoxin_method',
          label: 'Method Used',
          fluid: true
        },
        {
          name: 'endotoxin_limit',
          label: 'Define TNTC and TFTC Limits',
          fluid: true,
          options: [
            {
              label: 'Yes',
              id: 'yes'
            },
            {
              label: 'No',
              id: 'no'
            }
          ],
          type: 'radio'
        }
      ],
      radioSection: {
        fields: [
          {
            name: 'endotoxin_tntc',
            label: 'TNTC Limit (in CFU)',
            inputType: 'number',
            min: '0',
          },
          {
            name: 'endotoxin_tftc',
            label: 'TFTC Limit (in CFU)',
            inputType: 'number',
            min: '0',
          }
        ]
      },
      buttons: [
        {
          name: 'swab',
          button: {
            open: 'Configure Swab Sampling Parameters',
            close: 'Remove Swab Sampling Parameters'
          },
          fields: [
            {
              name: 'endotoxin_swab_use_recovery',
              label: 'Use Recovery for Swap?',
              options: [
                {
                  label: 'Yes',
                  id: 'yes'
                },
                {
                  label: 'No',
                  id: 'no'
                }
              ],
              type: 'radio'
            },
            {
              name: 'endotoxin_swab_recovery_percentage',
              label: 'Default Recovery (%)',
              inputType: 'number',
              min: '0',
            }
          ],
          MOCButton: MOC,
        },
        {
          name: 'rinse',
          button: {
            open: 'Configure Rinse Sampling Parameters',
            close: 'Remove Rinse Sampling Parameters'
          },
          fields: [
            {
              name: 'endotoxin_rinse_solvent_volume',
              label: 'Solvent Volume',
              inputType: 'number',
              min: '0',
              fluid: true
            },
            {
              name: 'endotoxin_rinse_use_recovery',
              label: 'Use Recovery for Swap?',
              options: [
                {
                  label: 'Yes',
                  id: 'yes'
                },
                {
                  label: 'No',
                  id: 'no'
                }
              ],
              type: 'radio'
            },
            {
              name: 'endotoxin_rinse_recovery_percentage',
              label: 'Default Recovery (%)',
              inputType: 'number',
              min: '0',
            }
          ],
          MOCButton: MOC,
        }
      ]
    }
  }
};
